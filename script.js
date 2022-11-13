// Get the modal and elements of modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnPro = document.getElementById("myBtnPro");
var btnTeams = document.getElementById("myBtnTeams");

// get the <button> element submit/request modal
var btnSubmit = document.getElementById("submitModal");
var btnRequestModal = document.getElementById("btnRequest");
// get the submit modal
var submitModal = document.getElementById("modalSubmit");

// Get the <button> element that closes the modal
var buttonClose = document.getElementsByClassName("modal-close")[0];
var checkIcon = document.getElementById("checkIcon");

// hidden icon check
checkIcon.style.visibility = "hidden";

//regular expressions for validate email
var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

//for create the alert of email error validation
var msjErrorValidationEmail = document.getElementById("emailErrorValidation");
var msjErrorValidationName = document.getElementById("nameInvalid");
//var msjErrorValidationName = document.getElementById("");

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

btnPro.onclick = function () {
    modal.style.display = "block";
}

btnTeams.onclick = function () {
    modal.style.display = "block";
}


// When the user clicks on <button> (x), close the modal
buttonClose.onclick = function () {
    modal.style.display = "none";
}


/* When the user clicks on <buton> "Submit", verifies the function of the input name 
and email and if everything is correct access the second modal
if the condition is not met, an error message is displayed and false is returned.    */
btnSubmit.onclick = function () {
    //get the value of the input name/email
    var inputEmail = document.getElementById("inputEmail").value;
    var inputName = document.getElementById("inputName").value;
    if(inputName == ""){
        msjErrorValidationName.innerHTML = "The 'Name' field must not be empty"
        return false;
    } else {
        if (validEmail.test(inputEmail)) {
            //create button loader
            this.innerHTML = "<button id='loadingBtn' class='button is-loading is-primary'></button>";
            // check icon visible when the condition is true
            checkIcon.style.visibility = "visible";
            setTimeout(() => {
                submitModal.style.display = "block";
                modal.style.display = "none";
            }, 2000)
        } else {
            msjErrorValidationEmail.innerHTML = "Enter a valid email address";
            return false;
        }
    }
}


//when the user clicks on "Ok" in the second modal, the page is closed and then reload
btnRequestModal.onclick = function () {
    submitModal.style.display = "none";
    window.location.reload();
}

