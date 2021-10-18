const express = require('express');
const sendmail= require('../utils/sendmail');
const router = express.Router();
const User= require('../model/user.model');
//nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

router.get("",async function (req, res){
    const page= +req.query.page || 1;
    const size = +req.query.size || 10;
    const offset = (page-1)*size;
    const user = await User.find().lean().skip(offset).limit(size).exec();
    const totalUserCount = await User.find().countDocuments(); 
    const totalpages= Math.ceil(totalUserCount/size);
    
    sendmail({
        from: "vishal@masai.com",
        to: "xyz@flipkart.com",
        subject: "Welcome to ABC system",
        text: "Plaintext version of the message",
        html: "<p>Please welcome</p>"
    });

    console.log(totalpages);
   return res.status(200).send({user,totalpages});
});


module.exports = router;


    
    // message config portion 
    


    // const transporter = nodemailer.createTransport({
    //     host: CURRENT_ENVIRONMENT == "development" ? "smtp.mailtrap.io" : "",
    //     port: 587,
    //     secure: false, // upgrade later with STARTTLS
    //     auth: {
    //       user: SMTP_USERNAME,
    //       pass: SMTP_PASSWORD,
    //     },
    // });
    
   // sending the email through nodemailer 
   
 
