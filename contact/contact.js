function sendMail() {
  (function () {
    emailjs.init("in5CCWfc7_yAgM9Mg");
  });

  var params = {
    sendername: document.querySelector("#name").value,
    senderemail: document.querySelector("#email").value,
    to: document.querySelector("#to").value,
    subject: document.querySelector("#subject").value,
    replyto: document.querySelector("#replyto").value,
    message: document.querySelector("#message").value,
  };

  var serviceID = "service_pzubl3j";
  var templateID = "template_dwqmals";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Email Sent Succesfully");
    })
    .catch();
}
