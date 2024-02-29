document.addEventListener('DOMContentLoaded', function() {
    const myForm = document.getElementById('myForm');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        alert('The form has been sent.');
    });
});