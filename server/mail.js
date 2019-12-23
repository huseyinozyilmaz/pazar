const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function sendNewShoppingListNotification(from, to, data) {
  const msg = {
    to: to,
    from: from,
    templateId: 'd-9ff7e5a78cac44ff8eaa068ade5fb680',
    dynamic_template_data: {
      from: data.from,
      to: data.to,
      url: data.url,
      count: data.count,
      due: data.due
    }
  }
  sgMail.send(msg) 
}

module.exports = {
  sendNewShoppingListNotification: sendNewShoppingListNotification
}