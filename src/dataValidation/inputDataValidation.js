const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


/** 
 * @param {string} value: bodyData validation function.
 */

const isValid = (value)=> {
    if (typeof value == "undefined" || value == null) return false;
    if (typeof value == "string" && value.trim().length > 0) return true;
};

const isValids = (value)=> {
    if (typeof value == "undefined" || value == null) return false;
    if (typeof value == "number") return true;
};

const isValidRequestBody = function (object) {
    return Object.keys(object).length > 0;
};

// All input data validation

/**
 * @param {string} value: bodyData
 */

const isValidRequest = (value) => {
    // if body empty
    if (!isValidRequestBody(value)) {
        return "data is required";
    }
}





module.exports = {isValidRequest }