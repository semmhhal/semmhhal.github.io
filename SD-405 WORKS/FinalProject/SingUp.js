

function SignUp() {
  //added code later
  let firstname = document.getElementById("inputfirstname").value
  let secondname = document.getElementById("inputsecondname").value
  let passwordOne = document.getElementById("inputPasswordOne").value
  let passwordTwo = document.getElementById("inputPasswordTwo").value
  let EmailOne = document.getElementById("inputEmailOne").value
  document.getElementById("inputfirstname").style.border = ''
  document.getElementById("inputsecondname").style.border = ''
  document.getElementById("inputEmailOne").style.border = ''
  document.getElementById("inputPasswordOne").style.border = ''
  if (firstname.length < 1)
    document.getElementById("inputfirstname").style.border = '3px solid red'
  if (secondname.length < 1)
    document.getElementById("inputsecondname").style.border = '3px solid red'
  if (EmailOne.length < 1)
    document.getElementById("inputEmailOne").style.border = '3px solid red'
  if (passwordOne.length < 6) {
    document.getElementById("inputPasswordOne").style.border = '3px solid red'
    alert('Passowrd must be 6 character long')
  }
  if (passwordOne !== passwordTwo) {
    document.getElementById("inputPasswordOne").style.border = '3px solid red'
    document.getElementById("inputPasswordTwo").style.border = '3px solid red'
    alert('Passwords do not match!')
  }
  if ((firstname.length > 1 && secondname.length > 1) && (passwordOne == passwordTwo) && (EmailOne.length > 1)) {
    localStorage.setItem('name', EmailOne);
    localStorage.setItem('pw', passwordOne);
    window.location.href = "login.html"
  }
}