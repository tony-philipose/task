

  function view() {
    var x = document.getElementById("pw");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function login() {
    window.location.href = "login.html"; 
}

function main() {
    var e = document.getElementById('name').value;
    var p = document.getElementById('pw').value;
  let ve = validateEmail(e); 
 // alert (ve);
   let vp = validatepswd(p);
    store(e, p, ve, vp);
    
}



function validateEmail(e){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(e) == false) 
    {
        alert('Please enter a valid email address..!!!');
        return false;
    }

    return true;

}

function validatepswd(p){
    var reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;

    if (reg.test(p) == false) 
    {
        alert('Password must contain Alphabats, digits and special characters(8-16)');
        return false;
    }

    return true;

}



// storing input from register-form
function store(e, p, ve, vp) {
    let v1 = ve;
    let v2 = vp;
   // alert(v1);
    if (v1 == true && v2 == true) {
    console.log(e);
    console.log(p);
    localStorage.setItem("uname", e);
    localStorage.setItem("pswd", p);
   // alert("herr");
    window.location.href = "login.html"; 
    } else {
        window.location.href = "index.html"; 
    }
}



// function check() {
//     var e = document.getElementById('usrname').value;
//     var p = document.getElementById('pw').value;
//     let pswd = localStorage.getItem("pswd");
//     let email = localStorage.getItem("uname");

//         if (e == email && p == pswd) {
//             var url = "dashboard.html";
//             console.log(url);
//             window.location = 'https://www.google.com/';
//         } else {
//             alert("Your username and password are invalid...!!! ");
//         }
// }
