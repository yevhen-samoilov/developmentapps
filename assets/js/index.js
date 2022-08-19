//index.js  
function sendEmail(phone) {
    Email.send({
        Host: 'hostnl02.fornex.host',
        port: 587,
        username: 'noreply@ic-o.info',
        password: 'Z:nse?uE~MqL2!yA',
        To: 'samoilovireland@gmail.com',
        From: "noreply@ic-o.info",
        Subject: "Web Site",
        Body: "Phone: " + phone,
    }).then(
        message => alert("mail sent successfully")
    );
}