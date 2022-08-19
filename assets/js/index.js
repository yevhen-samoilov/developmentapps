//index.js  
function sendEmail() {
    Email.send({
        Host: "hostnl02.fornex.host",
        port: 587,
        username: "noreply@ic-o.info",
        password: "Z:nse?uE~MqL2!yA",
        To: "samoilovireland@gmail.com",
        From: "noreply@ic-o.info",
        Subject: "Web Site",
        Body: "Phone: ",
    }).then(
        message => alert("mail sent successfully")
    );
}