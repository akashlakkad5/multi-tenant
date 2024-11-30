//send response

exports.sendResponse = ({ res, statusCode, data }) => {
    res.status(statusCode).json({
        error: statusCode != 200,
        statusCode,
        data: { ...data, sentDate: new Date() }
    });
}

exports.apiHandler = ({ paylod, handler }) => (req, res) => {

    //validate Payload 

    const validatePayload = () => {
        new Promise((resolve, reject) => {
            try {

                if (!paylod) return resolve();
                let { error } = paylod.validate(req.body)

                if (error) {
                    return reject({ error: error?.details?.[0].message, code: 400 })
                }

            } catch (error) {
                console.log("[ERROR]- [PAYLOAD] - [VALIDATE]", error)
            }
        })
    }

    const processHandler = () => {
        new Promise((resolve, reject) => {
            try {

                handler(req, res)?.then(resolve).catch(reject)

            } catch (error) {
                console.log("[ERROR] [PROCESS] [HANDLER]", error);
                return reject(error);
            }
        })
    }

    validatePayload()
        .then(processHandler)
        .then((data) => {
            return this.sendResponse({ res, statusCode, data })
        }).catch(err => {
            console.log("[ERROR] PATH => ", req.originalUrl, err, JSON.stringify(req.body));
            /** if no error and no code means something wrong in code */
            if (err?.error && err?.code) {
                return (this.sendResponse({ res, statusCode: err.code, data: { ...err } }));
            } else {
                return (this.sendResponse({ res, statusCode: 500, data: err }));
            }
        })

}

