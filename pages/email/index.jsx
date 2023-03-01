import { useState } from "react"
import { Editor } from "primereact/editor"
import { InputText } from "primereact/inputtext"

export default function index() {
  const [text, setText] = useState("")
  const [to, setTo] = useState("")
  const [sbj, setSbj] = useState("")

  const handleSubmit = async () => {
    const response = await fetch("/api/newMail", {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: JSON.stringify({ text, to, sbj }),
    })
    const data = await response.json();
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="send-mail-btns">
        <InputText 
        placeholder="to"
        id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <InputText
          id="sbj"
          placeholder="sbj"
            value={sbj}
            onChange={(e) => setSbj(e.target.value)}
          />
        </div>
        <Editor
        id="text"
          value={text}
          onTextChange={(e) => setText(e.textValue)}
        />

        <input type="submit" />
      </form>
    </>
  )
}

// send email
// export default function index() {

//   return (
//     <>
//       <form action="/api/newMail" method="post">
//         <div className="send-mail-btns">
//           <input name="sbj" placeholder="sbj"/>
//           <input name="to"  placeholder="to"/>
//         </div>
//         <input name="txt" placeholder="body" />
//         <input type="submit" />
//       </form>
//     </>
//   )
// }

// import nodemailer from 'nodemailer';

// export async function getServerSideProps(context) {
//   // create a nodemailer transporter with your email provider settings
//   const transporter = nodemailer.createTransport({
//     host: 'hotmail',
//     port: 587,
//     secure: false, // use TLS
//     auth: {
//       user: 'alirezafeshki2017@gmail.com',
//       pass: 'alireza1380',
//     },
//   });

//   // send the email
//   await transporter.sendMail({
//     from: 'alirezafeshki2017@gmail.com',
//     to: 'ali.feshki1380@gmail.com',
//     subject: 'Test email',
//     text: 'This is a test email sent from Next.js using nodemailer!',
//   });

//   // return any data you want to use in your component
//   return {
//     props: {},
//   };
// }

// export default function MyPage() {
//   return (
//     <div>
//       <h1>Hello world</h1>
//     </div>
//   );
// }

// import { useState } from "react";
// import nodemailer from "nodemailer";

// export default function index() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // create a nodemailer transporter with your email service configuration
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "alirezafeshki2017@gmail.com",
//         pass: "alireza1380",
//       },
//     });

//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: "ali.feshki13380@gmail.com",
//       subject: "Contact Form Submission",
//       text: message,
//     });

//     console.log("Message sent: %s", info.messageId);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <label>
//         Message:
//         <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
//       </label>
//       <button type="submit">Send</button>
//     </form>
//   );
// }

// "use strict";
// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

// import * as msal from "@azure/msal-node";

// const msalConfig = {
//   auth: {
//     clientId: "al.akbari@mobinnet.ir",
//     authority: "https://login.microsoftonline.com",
//     clientSecret: "1234#D%@li",
//   },
// };

// const msalClient = new msal.ConfidentialClientApplication(msalConfig);

// async function getAccessToken() {
//   const authResult = await msalClient.acquireTokenByClientCredential({
//     scopes: ["https://graph.microsoft.com/.default"],
//   });
//   return authResult.accessToken;
// }

// async function sendEmail() {
//     const accessToken = await getAccessToken();

//     const message = {
//       subject: "Test email",
//       toRecipients: [
//         {
//           emailAddress: {
//             address: "alirezawfeshki2017@gmail.com.com",
//           },
//         },
//       ],
//       body: {
//         content: "This is a test email sent from Next.js using the Outlook API",
//         contentType: "text",
//       },
//     };

//     const response = await fetch("https://graph.microsoft.com/v1.0/me/sendMail", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         message,
//         saveToSentItems: true,
//       }),
//     });

//     if (response.ok) {
//       console.log("Email sent successfully");
//     } else {
//       console.error(`Error sending email: ${response.status} ${response.statusText}`);
//     }
//   }
