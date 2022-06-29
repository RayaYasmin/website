function formValidation() {
    var fname = document.getElementById("ifname").value;
    var lname = document.getElementById("ilname").value;
    var mobile = document.getElementById("imob").value;
    var pass = document.getElementById("ipass").value;
    var cpass = document.getElementById("icpass").value;
    var email = document.getElementById("iemail").value;
    var namePattern = /^[a-zA-Z .]+$/
    var mobilePattern = /^(\+88)?-?01[3-9]\d{8}$/
    var passPattern = /((?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@%&*£])).{8,20}/
    var emailPattern = /(cse|eee|law)_\d{10}@lus.ac.bd/

    //First Name     
    if (!fname.match(namePattern)) {
        document.getElementById("efname").innerHTML = "Enter Valid Name";
        return false;
    }
    else if (fname.length<3 || fname.length>20) {

        document.getElementById("efname").innerHTML = "Length 3-20";
        return false;
    }
    else {
        document.getElementById("efname").innerHTML = "";
    }
    //Last Name     
    if (!lname.match(namePattern)) {
        document.getElementById("elname").innerHTML = "Enter Valid Name";
        return false;
    }
    else if (lname.length<3 || fname.length>20) {

        document.getElementById("elname").innerHTML = "Length 3-20";
        return false;
    }
    else {
        document.getElementById("elname").innerHTML = "";
    }
    //mobile     
    if (!mobile.match(mobilePattern)) {
        document.getElementById("emobile").innerHTML = "**Only BD phone number is allowed!!";
        return false;
    }
    else {
        document.getElementById("emobile").innerHTML = "";
    }
    //password     
    if (!pass.match(passPattern)) {
        document.getElementById("epass").innerHTML = "Password not strong enough";
        return false;
    }
    else {
        document.getElementById("epass").innerHTML = "";
    }
    //confirmpassword     
    if (!cpass.match(pass)) {
        document.getElementById("ecpass").innerHTML = "Password Not Matched";
        return false;
    }
    else {
        document.getElementById("ecpass").innerHTML = "";
    }
    //Email     
    if (!email.match(emailPattern)) {
        document.getElementById("eemail").innerHTML = "LU email required";
        return false;
    }
    else {
        document.getElementById("eemail").innerHTML = "";
    }
}