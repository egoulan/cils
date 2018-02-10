const express = require('express')
const nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport')

const app = express()

app.use(express.static('dist'));

app.get('/email', function (req, res) {
  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: 'eddygoulan@gmail.com',
      pass: '***'
    },
    tls: { rejectUnauthorized: false }
  }));
  
  var mailOptions = {
    from: 'eddygoulan@gmail.com',
    to: 'eddygoulan@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})