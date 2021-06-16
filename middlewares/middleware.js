const {getLongURL,getShortCode} = require("../controllers/shortURL")

function createShortCode() {
    let result = new Array()
    let characterPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for ( var i = 0; i < 5; i++ ) {
        result += characterPool.charAt(Math.floor(Math.random() * 5));
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
    const shortCode = await getShortCode(req.body.longURL)
    if(shortCode) {
        res.status(201).json({
            status: "success",
            shortCode: shortCode
        })
    } else {
        next()
    }
}

module.exports = {
    validateShortCode,
    ifLongURLAvailable
}