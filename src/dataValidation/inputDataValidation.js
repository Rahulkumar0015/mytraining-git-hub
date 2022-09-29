const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


/** 
 * @param {string} value: bodyData validation function.
 */

const isValid = (value)=> {
    if (typeof value == "undefined" || value == null) return false;
    if (typeof value == "string" && value.trim().length > 0) return true;
};

// const isValids = (value)=> {
//     if (typeof value == "undefined" || value == null) return false;
//     if (typeof value == "number") return true;
// };

const isValidRequestBody = function (object) {
    return Object.keys(object).length > 0;
};

whitespace = (str)=>{
    return str.indexOf(" ") >= 0
}

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

/**
 * @param {string} value: longUrl
 */

 const isValidLongUrl = (value) => {

    if (isValid(value)) {
        return "longUrl is required and string"
    }
    
    if (whitespace(value)) {
        return "Make sure longUrl should not have space." //&& whitespace(name)
    }

    const regex = value.match(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm) != null
    if (regex == false) {
        return "please enter valid longUrl"
    }

}



module.exports = {isValidRequest, isValidLongUrl}