
let  validUrl = require('valid-url');

const isValid = (value)=> {
    if (typeof value == "undefined" || value == null) return false;
    if (typeof value == "string" && value.trim().length > 0) return true; 
};

const isValidRequestBody = function (object) {
    return Object.keys(object).length > 0;
};

whitespace = (value)=>{
    return value.indexOf(" ") >= 0 
}


const isValidRequest = (value) => {
    // if body empty
    if (!isValidRequestBody(value)) {
        return "data is required";
    }
}

 const isValidLongUrl = (value) => {

    if (!isValid(value)) {
        return "longUrl is required and string"
    }
    
    if (whitespace(value)) {
        return "Make sure longUrl should not have space." //&& whitespace(name)
    }

    let data = validUrl.isUri(value)
    if (!data) {
        return `please enter valid longUrl`
    }

}

module.exports = {isValidRequest, isValidLongUrl}