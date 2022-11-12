// Get the modal and elements of modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnPro = document.getElementById("myBtnPro");
var btnTeams = document.getElementById("myBtnTeams");
var loadingBtn = document.getElementById("loadingBtn");

// get the <button> element submit/request modal
var btnSubmit = document.getElementById("submitModal");
var btnRequestModal = document.getElementById("btnRequest");
// get the submit modal
var submitModal = document.getElementById("modalSubmit");

// Get the <button> element that closes the modal
var buttonClose = document.getElementsByClassName("modal-close")[0];
var checkIcon = document.getElementById("checkIcon");

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



btnSubmit.onclick = function () {
    //get the value of the input name/email
    var inputEmail = document.getElementById("inputEmail").value;
    var inputName = document.getElementById("inputName").value;
    if(inputName == ""){
        msjErrorValidationName.innerHTML = "El campo 'Nombre' no debe estar vacío"
        return false;
    } else {
        if (validEmail.test(inputEmail)) {
            this.innerHTML = "<button id='loadingBtn' class='button is-loading is-primary'></button>";
            checkIcon.style.visibility = "visible";
            setTimeout(() => {
                //create button loader
                submitModal.style.display = "block";
                modal.style.display = "none";
            }, 2000)
        } else {
            msjErrorValidationEmail.innerHTML = "Introduzca un email válido";
            return false;
        }
    }
}



btnRequestModal.onclick = function () {
    submitModal.style.display = "none";
    window.location.reload();
}

