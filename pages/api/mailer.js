const nodemailer = require('nodemailer')

export default async function sendMail(req, res) {


  let transporter = nodemailer.createTransport({
    host: 'authsmtp.securemail.pro',
    port: 465,
    auth: {
      user: 'fgreco@craon.it',
      pass: 'Cinisello4'
    }
  })

  debugger
  transporter.sendMail({
    from: req.body.email,
    to: "fraan83@gmail.com",
    subject: req.body.oggetto,
    text: req.body.messaggio,
    html: `<h2> Nuovo messaggio da ${req.body.cognome + ' ' + req.body.nome}   </h2> <br>
   <h4> Testo del Messaggio: </h4> <br>
   <p> ${req.body.messaggio} </p> <br>
   <p> Conttato mail: ${req.body.email} </p>`,

  }).then((response) => {
    res.send(response)

  }).catch((error) => { res.send(error) })

}


/*
const transporter = nodemailer.createTransport({
  service: 'authsmtp.securemail.pro',
  auth: {
    type: 'authsmtp.securemail.pro',
    user: 'info@craon.it',
    refreshToken: '',
    accessToken: '',
    clientId: '',
    clientSecret: ''
  }
})
*/


