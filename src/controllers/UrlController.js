const isValidUserData = require('../dataValidation/inputDataValidation');
const urlModel = require("../Models/urlModel");


//========================================>  (( Create a url api call )) <==================================//


const CreateUrl = async (req, res) => {
    try {
        // using destructuring of body data.
        const { longUrl } = req.body;

        //Input data validation
        let msgUserData = isValidUserData.isValidRequest(req.body)
        if (msgUserData) {
            return res.status(400).send({ status: false, message: msgUserData })
        }

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = {CreateUrl}