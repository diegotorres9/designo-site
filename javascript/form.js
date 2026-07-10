const form = document.querySelector("form");


function validateField(field) {
    const errorEl = field.parentElement.querySelector(".error-message");
    if(!field.validity.valid) {
        errorEl.textContent = field.dataset.error || "can't be empty";
        const errorImage = document.createElement("img");
        errorImage.src = "/assets/contact/desktop/icon-error.svg";
        errorEl.append(errorImage);
        return false
    }
    errorEl.textContent = "";
    return true;
}

form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("blur", () => {
        validateField(input);
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    const fields = form.querySelectorAll("input, textarea");

    fields.forEach((field) => {
        const fieldValid = validateField(field);
        if(!fieldValid) {
            isValid = false;
        }
    });

    if(isValid) {
        form.reset();
    } else {
        form.querySelector(":invalid").focus();
    }
});