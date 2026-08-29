// ======================================
// PASSWORD SHOW / HIDE
// ======================================

const passwordButtons =
    document.querySelectorAll(".password-toggle");


passwordButtons.forEach(button => {

    button.addEventListener("click", () => {

        const targetId =
            button.dataset.target;

        const input =
            document.getElementById(targetId);


        if (input.type === "password") {

            input.type = "text";

            button.textContent = "🙈";

        } else {

            input.type = "password";

            button.textContent = "👁";

        }

    });

});


// ======================================
// STUDENT PASSWORD VALIDATION
// ======================================

const studentForm =
    document.getElementById("studentSignupForm");


if (studentForm) {

    studentForm.addEventListener("submit", (event) => {

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            event.preventDefault();

            alert("Passwords do not match.");

        }

    });

}


// ======================================
// TEACHER PASSWORD VALIDATION
// ======================================

const teacherForm =
    document.getElementById("teacherSignupForm");


if (teacherForm) {

    teacherForm.addEventListener("submit", (event) => {

        const password =
            document.getElementById("teacherPassword").value;

        const confirmPassword =
            document.getElementById(
                "teacherConfirmPassword"
            ).value;


        if (password !== confirmPassword) {

            event.preventDefault();

            alert("Passwords do not match.");

        }

    });

}