var container = document.getElementById("container");
var row = document.createElement("div");
container.appendChild(row);
row.setAttribute("class" , "row");
// empty col
var col = document.createElement("div");
row.appendChild(col);
col.setAttribute("class" , "col")
// data section start
var data = document.createElement("div");
row.appendChild(data);
data.setAttribute("class" , "col-11 col-md-11 col-sm-11 col-lg-8 col-xl-6 col-xxl-6 data")
// section one
var one = document.createElement("div");
data.appendChild(one);
one.setAttribute("id" , "one")
// signup
var signup = document.createElement("div");
one.appendChild(signup);
signup.setAttribute("id" , "signup");
// hello heading
var hello = document.createElement("h2");
signup.appendChild(hello);
hello.innerHTML = "Hello!";
// request
var request = document.createElement("p");
signup.appendChild(request);
request.innerHTML = "Please signup to continue";
// full name section
var nameDiv = document.createElement("div");
signup.appendChild(nameDiv);
// full name
var fullName = document.createElement("span");
nameDiv.appendChild(fullName);
fullName.innerHTML = "Full name";
// full name input
var nameInput = document.createElement("input");
nameDiv.appendChild(nameInput);
nameInput.setAttribute("type" , "text");
nameInput.setAttribute("placeholder" , "John");
// email section
var emailDiv = document.createElement("div");
signup.appendChild(emailDiv);
// email
var email = document.createElement("span");
emailDiv.appendChild(email);
email.innerHTML = "Email address";
// email input
var emailInput = document.createElement("input");
emailDiv.appendChild(emailInput);
emailInput.setAttribute("type" , "email");
emailInput.setAttribute("placeholder" , "Johndoe@gmail.com");
// password section
var passwordDiv = document.createElement("div");
signup.appendChild(passwordDiv);
// password
var password = document.createElement("span");
passwordDiv.appendChild(password);
password.innerHTML = "Password";
// password input
var passwordInput = document.createElement("input");
passwordDiv.appendChild(passwordInput);
passwordInput.setAttribute("type" , "password");
passwordInput.setAttribute("placeholder" , "Password");
// confirm password section
var conPasswordDiv = document.createElement("div");
signup.appendChild(conPasswordDiv);
// confrim password
var conpassword = document.createElement("span");
conPasswordDiv.appendChild(conpassword);
conpassword.innerHTML = "confirm Password";
// confirm password input
var conPasswordInput = document.createElement("input");
conPasswordDiv.appendChild(conPasswordInput);
conPasswordInput.setAttribute("type" , "password");
conPasswordInput.setAttribute("placeholder" , "confirm Password");
// message
var message = document.createElement("p");
signup.appendChild(message);
message.setAttribute("id" , "message");
// other option section
var otherOption = document.createElement("div");
signup.appendChild(otherOption);
otherOption.setAttribute("id" , "otherOption");
// signup btn
var signupBtn = document.createElement("button");
otherOption.appendChild(signupBtn);
signupBtn.innerHTML = "Sign up";
// 
signupBtn.setAttribute("onclick" , "addData()");
function addData(){
    if(nameInput.value === ""){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Name required!";
        nameInput.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1000);
    }else if(emailInput.value === ""){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Email required!";
        emailInput.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1000);
    }else if(passwordInput.value === ""){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Password required!";
        passwordInput.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1000);
    }else if(passwordInput.value.length !== 8){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Password must be 8 caracters!";
        passwordInput.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1000);
    } else if(conPasswordInput.value === ""){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Confirm Password required!";
        conPasswordInput.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1000);
    }else if(passwordInput.value !== conPasswordInput.value ){
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "confirm passowrd must be same!";
        conPasswordInput.focus();
        setTimeout(() => {
            message.style.display = "none";
        }, 1000);
    }else{
        message.style.display = "block";
        message.innerHTML = "Your form has been submit successfully."
        message.style.color = "green";
        console.log("Name....." , nameInput.value);
        console.log("Email...." , emailInput.value);
        console.log("Password...." , passwordInput.value);
        console.log("Confirm Password...." , conPasswordInput.value);
        setTimeout(() => {
            message.style.display = "none";
            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
            conPasswordInput.value = "";
        }, 1000);
    }
}
// 
var or =document.createElement("span");
otherOption.appendChild(or);
or.innerHTML = "or";
var signupWith = document.createElement("span");
otherOption.appendChild(signupWith);
signupWith.innerHTML = "signup with";
// social signup 
var social = document.createElement("div");
otherOption.appendChild(social);
social.setAttribute("id" , "social");
// facebook
var facebook = document.createElement("a");
social.appendChild(facebook);
facebook.setAttribute("href" , "#");
var facebookImg = document.createElement("img");
facebook.appendChild(facebookImg);
facebookImg.setAttribute("src" , "./image/facebook.png");
// twitter
var twitter = document.createElement("a");
social.appendChild(twitter);
twitter.setAttribute("href" , "#");
var twitterImg = document.createElement("img");
twitter.appendChild(twitterImg);
twitterImg.setAttribute("src" , "./image/twitter.png")
// already member
var alreadyMemb = document.createElement("p");
otherOption.appendChild(alreadyMemb);
alreadyMemb.innerHTML = "I am already a member";
// signin button
var signinBtn2 = document.createElement("button");
alreadyMemb.appendChild(signinBtn2);
signinBtn2.innerHTML = "Sign in";

// section 2
var two = document.createElement("div");
data.appendChild(two);
two.setAttribute("id" , "two")
var div = document.createElement("div");
two.appendChild(div);
// ball image
var image = document.createElement("img");
div.appendChild(image);
image.setAttribute("src" , "./image/football.png");
image.setAttribute("alt" , "ball image");
// ball heading
var heading = document.createElement("h2");
div.appendChild(heading);
heading.innerHTML = "Soccer Ball";
// already account
var already = document.createElement("p");
div.appendChild(already);
already.innerHTML = "Already have an account";
// signin btn
var signinBtn = document.createElement("button");
div.appendChild(signinBtn);
signinBtn.innerHTML = "Signin";
// empty col 2
var col2 = document.createElement("div");
row.appendChild(col2);
col2.setAttribute("class" , "col")