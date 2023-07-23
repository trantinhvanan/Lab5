/*var gmail = ["user1", "user2", "user3"];
var pass = ["123","456","789"];
localStorage.setItem("gmail",JSON.stringify(gmail));
localStorage.setItem("pass",JSON.stringify(pass));*/
var submit = document.getElementById("submit");
var gmail_input = document.getElementById("gmail");
var pass_input = document.getElementById("pass");
submit.addEventListener("click", check);
function check() {
    let gmail = localStorage.getItem("gmail");
    let pass = localStorage.getItem("pass");
    gmail = JSON.parse(gmail);
    pass = JSON.parse(pass);
    if (gmail_input.value != "") {
        if (pass_input.value != "") {
            for(let i = 0;i < gmail.length; i++) {
                if (gmail_input.value == gmail[i] && pass_input.value == pass[i]) {
                    alert("dang nhap thanh cong");
                    break
                } else {
                    alert("gmail hoac mat khau da sai")
                }
            }
        } else {
            alert("vui long nhap mat khau");
        }
    } else {
        alert("vui long nhap gmail");
    }
}