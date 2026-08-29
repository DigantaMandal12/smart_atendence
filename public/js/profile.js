// ======================================
// MOBILE SIDEBAR
// ======================================

const menuBtn =
    document.getElementById("menuBtn");

const sidebar =
    document.querySelector(".sidebar");


if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("open");

    });

}


// ======================================
// CHANGE PASSWORD
// ======================================

const changePasswordBtn =
    document.getElementById("changePasswordBtn");


if (changePasswordBtn) {

    changePasswordBtn.addEventListener("click", () => {

        alert(
            "Password change feature will be available soon."
        );

    });

}


// ======================================
// PROFILE FORM
// ======================================

const profileForm =
    document.getElementById("profileForm");


if (profileForm) {

    profileForm.addEventListener("submit", () => {

        const saveButton =
            profileForm.querySelector(".save-btn");

        if (saveButton) {

            saveButton.textContent =
                "Saving...";

        }

    });

}
