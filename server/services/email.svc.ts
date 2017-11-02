const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export function sendEmail(from: string, subject: string, body: string) {
  const msg = {
    to: "BKB4979@gmail.com",
    from: from,
    subject: subject,
    html: body
  };
  return sgMail.send(msg);
}
