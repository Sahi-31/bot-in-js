var fname = document.getElementById('fname')
var lname = document.getElementById('lname')
var email= document.getElementById('email')
var mobile = document.getElementById('mobile')
var add = document.getElementById('add')
var pin = document.getElementById('pin')
var form = document.getElementById('form')
var errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  var messages = []
  if (fname.value === '' || fname.value == null) {
    messages.push('please fill your firstname')
  }
if (lname.value === '' || lname.value == null) {
    messages.push('please fill your lastname')
  }

if (email.value === '' || email.value == null) {
    messages.push('please fill your email')
  }
if (mobile.value === '' || mobile.value == null) {
    messages.push('please fill your mobile number')
  }
if (add.value === '' || add.value == null) {
    messages.push('please fill your address')
  }
if (pin.value === '' || pin.value == null) {
    messages.push('please fill your pincode')
  }



if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})
