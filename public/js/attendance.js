const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");



// ===============================
// MOBILE SIDEBAR
// ===============================

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("open");

    });

}


// Close sidebar when clicking outside

document.addEventListener("click", (event) => {

    if (
        window.innerWidth <= 800 &&
        sidebar &&
        sidebar.classList.contains("open") &&
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {

        sidebar.classList.remove("open");

    }

});


// ===============================
// QR SCANNER BUTTON
// ===============================

const scanBtn = document.getElementById("scanBtn");

if (scanBtn) {

    scanBtn.addEventListener("click", () => {

        alert(
            "QR Scanner will be opened here.\n\n" +
            "Next step: connect a QR scanner library " +
            "and attendance verification."
        );

    });

}
