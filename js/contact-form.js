const phone = document.querySelector('#phone')

function validateInput(phone) {
    // Remove non-numeric characters using a regular expression
    phone.value = phone.value.replace(/[^0-9]/g, '');
}
