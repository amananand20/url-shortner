const {getLongURL,getShortCode} = require("../controllers/shortURL")

function createShortCode() {
    let result = ""
    let characterPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for ( var i = 0; i < 5; i++ ) {
        result += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }
    return result;
}

const validateShortCode = async (req, res, next) => {
    let createdShortCode = createShortCode()
    while(await getLongURL(createdShortCode)) {
        createdShortCode = createShortCode()
    }
    req.body.shortCode = createdShortCode
    next()
}

const ifLongURLAvailable = async (req, res, next) => {
    const shortCodeData = await getShortCode(req.body.longURL)
    if(shortCodeData) {
        res.status(201).json({
            status: "success",
            shortCode: shortCodeData.shortCode
        })
    } else {
        next()
    }
}

module.exports = {
    validateShortCode,
    ifLongURLAvailable
}