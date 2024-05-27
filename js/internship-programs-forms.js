var currentURL = window.location.href;

function clearError(fieldId) {
    document.getElementById(fieldId + "Error").innerText = "";
    document.getElementById(fieldId).classList.remove("error-input");
}
document.getElementById("fullName").addEventListener("input", function () {
    clearError("fullName");
});
document.getElementById("phoneNumber").addEventListener("input", function () {
    clearError("phoneNumber");
});
document.getElementById("email").addEventListener("input", function () {
    clearError("email");
});
document.getElementById("address").addEventListener("input", function () {
    clearError("address");
});
document.getElementById("degree").addEventListener("input", function () {
    clearError("degree");
});
document.getElementById("englishLevel").addEventListener("change", function () {
    clearError("englishLevel");
});
document.getElementById("jobTitle").addEventListener("input", function () {
    clearError("jobTitle");
});
document.getElementById("experience").addEventListener("input", function () {
    clearError("experience");
});
document.getElementById("message").addEventListener("input", function () {
    clearError("message");
});
document.getElementById("uploadResume").addEventListener("change", function () {
    clearError("uploadResume");
});

function setErrorAndStyle(fieldId, errorMessage) {
    document.getElementById(fieldId + "Error").innerText = errorMessage;
    document.getElementById(fieldId).classList.add("error-input");
}

document.getElementById("job-form").addEventListener("submit", function (event) {
    event.preventDefault();
    // Clear previous error messages
    clearError("fullName");
    clearError("phoneNumber");
    clearError("email");
    clearError("address");
    clearError("degree");
    clearError("englishLevel");
    clearError("jobTitle");
    clearError("experience");
    clearError("message");
    clearError("uploadResume");

    // Validate fullName
    var fullName = document.getElementById("fullName").value;
    if (fullName === "") {
        setErrorAndStyle("fullName", currentURL.includes('-ar') ? 'الاسم بالكامل مطلوب' : "Full name is required");
        event.preventDefault(); // Prevent form submission
    }

    // Validate lastName
    var phoneNumber = document.getElementById("phoneNumber").value;
    if (phoneNumber === "") {
        setErrorAndStyle("phoneNumber", currentURL.includes('-ar') ? 'رقم الهاتف مطلوب' : "Phone Number is required");
        event.preventDefault(); // Prevent form submission
    }

    // Validate email
    var email = document.getElementById("email").value;
    if (email === "") {
        setErrorAndStyle("email", currentURL.includes('-ar') ? "البريد الالكتروني مطلوب" : "Email is required");
        event.preventDefault(); // Prevent form submission
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setErrorAndStyle("email", currentURL.includes('-ar') ? "تنسيق البريد الإلكتروني غير صالح" : "Invalid email format");
        event.preventDefault(); // Prevent form submission
    }

    // Validate address
    var address = document.getElementById("address").value;
    if (address === "") {
        setErrorAndStyle("address", currentURL.includes('-ar') ? "العنوان مطلوب" : "Address is required");
        event.preventDefault(); // Prevent form submission
    }
    // Validate degree
    var degree = document.getElementById("degree").value;
    if (degree === "") {
        setErrorAndStyle("degree", currentURL.includes('-ar') ? "الدرجة مطلوبة" : "degree is required");
        event.preventDefault(); // Prevent form submission
    }
    // Validate englishLevel
    var englishLevel = document.getElementById("englishLevel").value;
    if (englishLevel === "") {
        setErrorAndStyle("englishLevel", currentURL.includes('-ar') ? "مستوي الانجليزي مطلوب" : "English Level is required");
        event.preventDefault(); // Prevent form submission
    }
    // Validate jobTitle
    var jobTitle = document.getElementById("jobTitle").value;
    if (jobTitle === "") {
        setErrorAndStyle("jobTitle", currentURL.includes('-ar') ? "عنزان الوظيفة مطلوب" : "Job Title is required");
        event.preventDefault(); // Prevent form submission
    }
    // Validate experience
    var experience = document.getElementById("experience").value;
    if (experience === "") {
        setErrorAndStyle("experience", currentURL.includes('-ar') ? "الخبرة مطلوبة" : "Experience is required");
        event.preventDefault(); // Prevent form submission
    }
    // Validate message
    var message = document.getElementById("message").value;
    if (message === "") {
        setErrorAndStyle("message", currentURL.includes('-ar') ? "الرساله مطلوبة" : "Message is required");
        event.preventDefault(); // Prevent form submission
    }
    // Validate uploadResume
    var uploadResume = document.getElementById("uploadResume").value;
    if (uploadResume === "") {
        setErrorAndStyle("uploadResume", currentURL.includes('-ar') ? "السيره الذاتية مطلوبة" : "Resume is required");
        event.preventDefault(); // Prevent form submission
    }

    var form = event.target;
    var formValues = [];
    // Loop through all form elements
    for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];

        // Check if the element has a value (ignore buttons and other non-input elements)
        if (element.type !== "button" && element.type !== "submit" && element.value !== undefined) {
            // console.log(element.name + ": " + element.value);
            if (element.value) {
                formValues.push(element.name + ":" + element.value)
            }
        }
    }
    if (formValues.length >= 10) {
        sendJob();
    }
});
//================Start Apply Job====================
function nextStep() {
    $('.apply-job-step-one').addClass('d-none');
    $('.apply-job-step-two').removeClass('d-none');
}
function prevStep() {
    $('.apply-job-step-one').removeClass('d-none');
    $('.apply-job-step-two').addClass('d-none');
}
function sendJob() {
    $('#job-form').addClass('opacity-50');
    $('#job-send-btn').addClass('opacity-50');
    $('#loading').removeClass('d-none');
    $('.send-btn').addClass('d-none');
    setTimeout(() => {
        $('#job-form').removeClass('opacity-50');
        $('#job-send-btn').removeClass('opacity-50');
        $('#loading').addClass('d-none');
        $('.send-btn').removeClass('d-none');
        document.getElementById("job-form").reset();
        $('.btn-close').click();
        prevStep();
    }, 1000);
}
//================End Apply Job====================


// =======Upload Resume=========
function uploadResumeDocs() {
    const file = event.target.files[0];
    const fileInfoContainer = document.getElementById('uploadedFileInfo');
    const resumeContainer = document.getElementById('upload-resume-container');
    if (file) {
        const fileName = file.name;
        const fileSize = file.size; // size in bytes
        const fileExtension = fileName.split('.').pop().toLowerCase();
        const maxSizeKB = 500; // maximum size allowed in kilobytes

        const fileSizeKB = fileSize / 1024; // convert bytes to kilobytes
        if (fileSizeKB <= maxSizeKB) {
            resumeContainer.classList.add('d-none');
            fileInfoContainer.innerHTML = `
                <div class="d-flex justify-content-between align-items-center gap-2">
                   <div class="d-flex align-items-center gap-3 text-white-color">
                   ${fileExtension.includes('pdf') ? `
                   <img class="uploaded-img" src="../images/icons/pdf.svg" alt="${fileName}">
                   ` : fileExtension.includes('doc') ? `
                   <img class="uploaded-img" src="../images/icons/doc.svg" alt="${fileName}">
                   `: `
                   <img class="uploaded-img" src="${URL.createObjectURL(file)}" alt="${fileName}">
                   `}
                   
                <div>
                <p class="mb-2">Name: ${fileName}</p>
                <p class="mb-0">Size: ${fileSizeKB.toFixed(2)} KB</p>
                </div>
                   </div>
                   <div class="d-flex gap-2 fs-6 flex-wrap justify-content-end">
                   <label for="uploadResume">
                   <i class="text-white-color fas fa-refresh"></i>
                   </label>
                   <a onclick="removeFile()">
                   <i class="text-danger fas fa-trash"></i>
                   </a>
                   </div>
                </div>`;
        } else {
            fileInfoContainer.innerHTML = `<p class="text-danger">File size exceeds 500 KB limit.</p>`;
            // Clear the file input to allow the user to choose another file
            event.target.value = '';
        }
    }
}

function removeFile() {
    const fileInfoContainer = document.getElementById('uploadedFileInfo');
    const resumeContainer = document.getElementById('upload-resume-container');
    fileInfoContainer.innerHTML = '';
    fileInfoContainer.value = null;
    resumeContainer.classList.remove('d-none');
}
function formatSizeUnits(size) {
    if (size >= 1073741824) { size = (size / 1073741824).toFixed(2) + " GB"; }
    else if (size >= 1048576) { size = (size / 1048576).toFixed(2) + " MB"; }
    else if (size >= 1024) { size = (size / 1024).toFixed(2) + " KB"; }
    else if (size > 1) { size = size + " bytes"; }
    else if (size == 1) { size = size + " byte"; }
    else { size = "0 bytes"; }
    this.imageSize = size;
}

