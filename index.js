/* eslint-disable */
'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password


/**
* Here we're using Gmail to send 
*/
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  });


exports.sendMail = functions.https.onRequest((request, response) => {
  console.log(response)
    cors(request, response, () => {

        // getting dest email by query string
        const email = request.body.destEmail;
        const company = request.body.CCompany;
        const PromoCode = request.body.CPromoCode;
        const link = request.body.CLink;
        const discount = request.body.CDiscount;
        console.log(discount);
          //
        const mailOptions = {
            from: 'Tap A Tree Gift', // Something like: Jane Doe <janedoe@gmail.com>
            to: email,
            subject: 'Tap A Tree Gift', // email subject
            html: `
            <p style="font-size: 16px,font-weight: bold;">Thank You for using the code!</p><br />
            ` // email content in HTML
        };

  
        return mailTransport.sendMail(mailOptions, (erro, info) => {
            if(erro){
                console.log(erro);
                return response.send(erro);               
            }
            return response.send(info);
        });
    });   
});

