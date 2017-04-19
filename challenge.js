/**
 * Note: Read README first.
 */

/**
 * Some utility functions that may or may not be useful.
 * Feel free to modify these.
 */
function getUsernameField() {
    return $("#login-username, #username, #usernameMasked, #onlineId1, [name=username], #email");
}

function getPasswordField() {
    return $("#pass, #password, #login-passwd, [name=password], #passcode1");
}

function getFormField() {
    return getUsernameField().closest('form');
}

function getSubmitButton() {
    let form = getFormField();
    //try to find submit button within login form, otherwise by id within page
    let submitButton = form.find('button, input [type=submit], input [type=button]');
    return submitButton.length > 0 ? 
        submitButton :
        $("#loginbutton, #signInBtn, #hp-sign-in-btn, #btnLogin");
}

/**
 * Logs in into a website.
 *
 * Logs in into a website using the username and password
 * provided.
 * Check the code below for an example that works with https://facebook.com
 */
window.loginWithCredentials = function(username, password) {

    //
    // XXX: Modify this code, if necessary, to work on more sites.
    //
    let usernameField = getUsernameField();
    let passwordField = getPasswordField();

    usernameField.val(username);
    passwordField.val(password);

    setTimeout(() => {
        getSubmitButton().click();
    }, 1000);


};


/**
 * Detects form fields.
 *
 * Should return an object with the following keys: 'form', 'submitButton', 'username', and 'password'
 * The values should be JQuery elements.
 * Check the code below for an example that works with https://facebook.com
 */
window.detectFormFields = function() {

    //
    // XXX: Modify this code, if necessary, to work on more sites.
    //
    return {
        form: getFormField(),
        submitButton: getSubmitButton(),
        username: getUsernameField(),
        password: getPasswordField()
    };

};

/**
 * Returns an object of the following form:
 * {
 *    username: '',
 *    password: ''
 * }
 * where the values correspond to the credentials from the form.
 * Check the code below for an example that works with https://facebook.com
 */
window.obtainFieldsValues = function() {

    //
    // XXX: Modify this code, if necessary, to work on more sites.
    //
    return {
        username: getUsernameField().val(),
        password: getPasswordField().val()
    };

};
