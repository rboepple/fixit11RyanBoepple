// LDAP (Blue) Login
// This demo app will allow you to log in a user.
// Like the SQL on it does an Ajax requestion with variables
// j_username and j_password with a POST request
// The responses are:
// 1 = Login Successful 
// 0 = Login Failed
// -1 or -2 = Error

// look at form property setFocusID - this puts 
// cursor in specified control when form is loaded

btnLogin.onclick=function(){
    req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inputPassword.value);
    if (req1.status == 200) { //everything worked.
    
    if (req1.responseText == 1){
       ChangeForm(favFoods)}
     else {locationReload
       lblResult.value = 'the username or password where incorrect.'
       }
        //1 good 0 bad
        
    } else {
        //Handle that. 
        lblResult.style.display = "block"  // none to hide
        lblResult.value = "Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText;
    }
}


