const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'oalaa1883@gmail.com',
      pass: ''
    }
  });
  
var mailOptions = {
    from: 'oalaa1883@gmail.com',
    to: 'alaothman110@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'cv jawek behy  '
  }
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });