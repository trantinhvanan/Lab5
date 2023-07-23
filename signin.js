var Gmail_input = document.getElementById("Gmail");
var Pass_input = document.getElementById("Pass");
var PassCk_input = document.getElementById("PassCk");
var submit = document.getElementById("btn");
submit.addEventListener("click", sign_up)
function sign_up() {
    let gmail_check = false
    let gmail = localStorage.getItem("gmail");
    let pass = localStorage.getItem("pass");
    gmail = JSON.parse(gmail);
    pass = JSON.parse(pass);
    if (Gmail_input.value != "") {
        if (Pass_input.value != "") {
            if (PassCk_input.value != "") {
                if (Pass_input.value == PassCk_input.value){
                    for (let i = 0; i < gmail.length;i++) {
                        if (Gmail_input.value == gmail[i]) {
                            alert("Gmail da co");
                            gmail_check = true;
                            break
                        }
                    }
                    if (gmail_check == false) {
                        gmail.push(Gmail_input.value)
                        pass.push(Pass_input.value)
                        localStorage.setItem("gmail", JSON.stringify(gmail));
                        localStorage.setItem("pass", JSON.stringify(pass));
                        alert("dang ky thanh cong");
                    }
                } else {
                    alert("mat khau khong khop")
                }
            } else {
                alert("chua nhap kiem tra mat khau")
            }
        } else {
            alert("chua nhap mat khau")
        }
    } else {
        alert("chua nhap Gmail")
    }
}