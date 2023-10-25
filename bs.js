function validation() {

    let email = document.getElementById('typeEmailX').value

    let password = document.getElementById('typePasswordX').value
    console.log(email);
    console.log(password);
    if(email != "" && password != ""){
        console.log("email and password is valid")




    } else{
        console.log("email and password is invalid")
    }
 
}

function registration() {
     let yourname = document.getElementById('yourname').value;
     let email = document.getElementById('mail');
     let password = document.getElementById('password').value;
     let repeatpassword = document.getElementById('repassword').value;
     let terms = document.getElementById('terms');
     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     console.log(yourname);
     console.log(email);
     console.log(password);
     console.log(repeatpassword);
     if(yourname == ""){
        document.getElementById("label").innerHTML = "please enter name";
     }else if (!email.value.match(validRegex)){
        document.getElementById("label").innerHTML = "please enter valid email";

     }else if (password == "" || password.lenth <= "4" ){
        document.getElementById("label").innerHTML = "please enter valid password";
    }else if (repeatpassword !== password){
        document.getElementById("label").innerHTML = "password does not match";
        
    }else if (!terms.checked){
        document.getElementById("label").innerHTML = "please check the terms and conditions";
    }
    else {
        document.getElementById("label").innerHTML = "registered succesfully";
    }



}
