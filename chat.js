conversation = { "Hai":"Hello...welcome to online home painting" , "How can I make use of your services?":"For that you can visit below provided link and fill your details", "Oh,thats great":"Yup..For any queries you can contact 180098756489 and visit our website","yaa sure":"Good to hear that from you","Thanks for your kind information":"That's my pleasure see you again" }; 
function chat() { 
var user = document.getElementById("userr").value; document.getElementById("userr").value = ""; document.getElementById("chatt").innerHTML += user+"<br>"; 
if (user in conversation) { 
document.getElementById("chatt").innerHTML += conversation[user]+"<br>"; 
}
 else { 
document.getElementById("chatt").innerHTML += "Sorry I don't understand...<br>";
 } 
}
