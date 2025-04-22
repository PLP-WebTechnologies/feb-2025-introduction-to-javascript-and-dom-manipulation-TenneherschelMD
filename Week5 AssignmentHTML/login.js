let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("username").value;
    username = document.getElementById("passkey").value;
    document.getElementById("myH1").textContent = "Hello ${username}"
}