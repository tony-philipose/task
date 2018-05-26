function view() {
    var x = document.getElementById("pw");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function login() {
    var e = document.getElementById('name').value;
    var p = document.getElementById('pw').value;
    //alert(e);
    let pswd = localStorage.getItem("pswd");
    //alert(pswd);
    let email = localStorage.getItem("uname");

        if (e == email && p == pswd) {
            var url = "dashboard.html";
           // console.log(url);
            window.location = 'dashboard.html';
        } else {
            alert("Please enter a valid username and password...!!! ");
            window.location = 'login.html';
        }
}
