var currentURL = window.location.href;

function clearError(fieldId) {
    document.getElementById(fieldId + "Error").innerText = "";
    document.getElementById(fieldId).classList.remove("error-input");
}
document.getElementById("firstName").addEventListener("input", function () {
    clearError("firstName");
});
document.getElementById("lastName").addEventListener("input", function () {
    clearError("lastName");
});
document.getElementById("email").addEventListener("input", function () {
    clearError("email");
});
document.getElementById("message").addEventListener("input", function () {
    clearError("message");
});

function setErrorAndStyle(fieldId, errorMessage) {
    document.getElementById(fieldId + "Error").innerText = errorMessage;
    document.getElementById(fieldId).classList.add("error-input");
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // Clear previous error messages
    clearError("firstName");
    clearError("lastName");
    clearError("email");
    clearError("message");

    // Validate firstName
    var firstName = document.getElementById("firstName").value;
    if (firstName === "") {
        setErrorAndStyle("firstName", currentURL.includes('ar') ? 'الاسم الاول مطلوب' : "First name is required");
        event.preventDefault(); // Prevent form submission
    }

    // Validate lastName
    var lastName = document.getElementById("lastName").value;
    if (lastName === "") {
        setErrorAndStyle("lastName", currentURL.includes('ar') ? 'الاسم الاخير مطلوب' : "Last name is required");
        event.preventDefault(); // Prevent form submission
    }

    // Validate email
    var email = document.getElementById("email").value;
    if (email === "") {
        setErrorAndStyle("email", currentURL.includes('ar') ? "البريد الالكتروني مطلوب" : "Email is required");
        event.preventDefault(); // Prevent form submission
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setErrorAndStyle("email", currentURL.includes('ar') ? "تنسيق البريد الإلكتروني غير صالح" : "Invalid email format");
        event.preventDefault(); // Prevent form submission
    }

    // Validate message
    var message = document.getElementById("message").value;
    if (message === "") {
        setErrorAndStyle("message", currentURL.includes('ar') ? "الرساله مطلوبة" : "Message is required");
        event.preventDefault(); // Prevent form submission
    }

    var form = event.target;
    var formValues = [];
    // Loop through all form elements
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];

        // Check if the element has a value (ignore buttons and other non-input elements)
        if (element.type !== "button" && element.type !== "submit" && element.value !== undefined) {
            console.log(element.name + ": " + element.value);
            if (element.value) {
                formValues.push(element.name + ":" + element.value)
            }
        }
    }
    if (formValues.length >= 4) {
        document.getElementById("overlay-loading").classList.remove('d-none');
        setTimeout(() => {
            document.getElementById("overlay-loading").classList.add('d-none');
            document.getElementById("contact-form").reset();

        }, 500);
    }
});
