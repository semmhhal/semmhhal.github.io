function Loginsubmit() {

    let firstinput = document.getElementById("inputEmail")
  
    let secondinput = document.getElementById("inputPassword")
  
    let CheckName = localStorage.getItem('name')
    let CheckPw = localStorage.getItem('pw')
    if (firstinput.value == CheckName && secondinput.value == CheckPw) {
  
      window.location.href = "home.html"
    }
  
    else {
      alert("User not found!")
    }
  
  }