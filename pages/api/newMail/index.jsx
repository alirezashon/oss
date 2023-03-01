import nodemailer from "nodemailer"

export default async function newMail(req, res) {
  const { text, to, sbj } = req.body

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alirezafeshki2017@gmail.com",
      pass: "xrxqlqnflnfsbjwx",
    },
    port: 465,
    host: "smtp-gmail.com",
  })
  // send the email

  const options = {
    from: "alirezafeshki2017@gmail.com",
    to: to,
    subject: sbj,
    html: text,
  }

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(" یک ایمیل با موفقیت ارسال شد !!!!!!!", info.response)
  })
  res.redirect("/")
}
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//       user: 'your-email@gmail.com',
//       pass: 'your-email-password',
//     },
//   });

//   async function sendEmail() {
//     try {
//       await transporter.sendMail({
//         from: 'your-email@gmail.com',
//         to: 'recipient-email@example.com',
//         subject: 'Test Email',
//         text: 'This is a test email',
//       });
//       console.log('Email sent');
//     } catch (error) {
//       console.error(error);
//     }
//   }
