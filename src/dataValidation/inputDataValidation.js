
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
        return res.status(400).send("longUrl is required and string")
    }
    
    if (whitespace(value)) {
        return res.status(400).send("Make sure longUrl should not have space.") //&& whitespace(name)
    }

    let data = validUrl.isWebUri(value)
    if (!data) {
        return res.status(400).send(`please enter valid longUrl`)
    }

}

module.exports = {isValidRequest, isValidLongUrl}