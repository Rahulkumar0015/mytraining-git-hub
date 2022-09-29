const isValidUserData = require('../dataValidation/inputDataValidation');
const urlModel = require("../Models/urlModel");
const shortId = require("shortid");
require('dotenv').config();
//========================================>  (( Create a url api call )) <==================================//


const CreateUrl = async (req, res) => {
    try {
        // using destructuring of body data.
        const { longUrl } = req.body;

        //Input data validation
        let msgUserData = isValidUserData.isValidRequest(req.body) //isValidLongUrl
        if (msgUserData) { 
            return res.status(400).send({ status: false, message: msgUserData })
        }

        let msgLongUrlData = isValidUserData.isValidLongUrl(longUrl)
        if (msgLongUrlData) {
            return res.status(400).send({ status: false, message: msgLongUrlData })
        }

        let url = await urlModel.findOne({ longUrl });
        if (url) {
            return res.status(201).send({ status: true,message:"Already exists...",  data: url });
        }

        // create url code
        let urlCode = shortId.generate(); 
        let shortUrl = process.env.baseUrl + urlCode; 

        let savedData = {
            urlCode: urlCode,
            longUrl: longUrl,
            shortUrl: shortUrl
        }
        const newUrl = await urlModel.create(savedData);
        return res.status(201).send({ status: true, message: "Saving new record...", data: newUrl })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


//========================================>  (( Render Url , api call )) <==================================//


const renderUrl = async (req, res) => {
    try {
        const code = req.params.urlCode

        //find urlCode
        const url = await urlModel.findOne({ urlCode: code });

        if (!url) {
            return res.status(404).json({ message: "No url found" });
        }

        console.log("Long url found for short url. Redirecting...");
        return res.status(302).redirect(url.longUrl);

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = { CreateUrl, renderUrl }