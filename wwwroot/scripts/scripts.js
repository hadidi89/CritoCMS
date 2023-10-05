function validateSignupForm(e) {
    e.preventDefault();
    const errorMsg = document.querySelector(`#signup-email-error`);
    const emailInput = document.querySelector(`#signup-email-input`);
    let allOK = false;

    if (errorMsg.innerText === `` && emailInput.value != ``)
        allOK = true;

    if (allOK)
        e.target.submit();

    console.log(`allOK: ` + allOK)
}

function errorMessageSignupEmail(e) {
    const emailInput = e.target;
    const errorMsg = document.querySelector(`#signup-email-error`);
    const successMsg = document.querySelector(`#signup-email-success`);
    const alreadyRegisterdMsg = document.querySelector(`#sigup-email-already-registered`);
    const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    errorMsg.innerText = ``;

    if (successMsg)
        successMsg.innerText = ``;

    if (alreadyRegisterdMsg)
        alreadyRegisterdMsg.innerText = ``;

    if (!regExEmail.test(emailInput.value))
        errorMsg.innerText = `Please enter a valid email.`;

    if (emailInput.value === ``)
        errorMsg.innerText = `Please enter an email.`;
}


function validateContactForm(e) {
    e.preventDefault();
    const errorName = document.querySelector(`#contact-name-error`);
    const errorEmail = document.querySelector(`#contact-email-error`);
    const errorMessage = document.querySelector(`#contact-message-error`);

    if (checkIfAllInputsAreEntered() && errorName.innerText === `` && errorEmail.innerText === `` && errorMessage.innerText === ``) {
        console.log(`CAN SEND`)
        e.target.submit()
    }
    else
        console.log(`CAN NOT SEND`)
}

//Check if all inputs are entered
function checkIfAllInputsAreEntered() {
    const inputName = document.querySelector(`#contact-name-input`);
    const inputEmail = document.querySelector(`#contact-email-input`);
    const inputMessage = document.querySelector(`#contact-message-input`);

    if (inputName.value != `` && inputEmail.value != `` && inputMessage.value != ``)
        return true;
    else
        return false;
}

//Clear Messages
function clearMessages() {
    const successMsg = document.querySelector(`#contact-form-success`);
    const alreadyRegisterdMsg = document.querySelector(`#contact-form-already-registered`);

    if (successMsg)
        successMsg.innerText = ``;

    if (alreadyRegisterdMsg)
        alreadyRegisterdMsg.innerText = ``;
}

//Adds error messages to name, email and message-inputs:

//Contact name
function errorMessageContactName(e) {
    const nameInput = e.target;
    const errorMsg = document.querySelector(`#contact-name-error`);
    const regExName = /^[a-öA-Ö]+(?:[ é'-][a-öA-Ö]+)*$/;

    clearMessages()

    errorMsg.innerText = ``;

    if (!regExName.test(nameInput.value))
        errorMsg.innerText = `Please enter a valid name.`;

    if (nameInput.value === ``)
        errorMsg.innerText = `Please enter a name.`;
}

//Contact email
function errorMessageContactEmail(e) {
    const emailInput = e.target;
    const errorMsg = document.querySelector(`#contact-email-error`);
    const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    clearMessages()

    errorMsg.innerText = ``;

    if (!regExEmail.test(emailInput.value))
        errorMsg.innerText = `Please enter a valid email.`;

    if (emailInput.value === ``)
        errorMsg.innerText = `Please enter an email.`;
}

//Contact message
function errorMessageContactMessage(e) {
    const messageInput = e.target;
    const errorMsg = document.querySelector(`#contact-message-error`);

    clearMessages()

    errorMsg.innerText = ``;

    if (messageInput.value.length < 15)
        errorMsg.innerText = `Your message needs to be at least 15 characters long.`;

    if (messageInput.value === ``)
        errorMsg.innerText = `Please enter a message.`;
}

//Scrolling to current section on page when rerendering, after submitting a form
document.addEventListener('DOMContentLoaded', function () {
    const successMsg = document.querySelector(`#signup-email-success`);
    const alreadyRegisteredMsg = document.querySelector(`#sigup-email-already-registered`);

    if (successMsg || alreadyRegisteredMsg)
        window.location.hash = "signup-email-form";
});

document.addEventListener('DOMContentLoaded', function () {
    const successMsg = document.querySelector(`#contact-form-success`);
    const alreadyRegisteredMsg = document.querySelector(`#contact-form-already-registered`);

    if (successMsg || alreadyRegisteredMsg)
        window.location.hash = "contact-form-section";
});                       