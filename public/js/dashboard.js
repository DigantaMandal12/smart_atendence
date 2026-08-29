const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("open");

    });

}


// Close sidebar when clicking outside on mobile

document.addEventListener("click", (event) => {

    if (
        window.innerWidth <= 800 &&
        sidebar.classList.contains("open") &&
        !sidebar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {
        sidebar.classList.remove("open");
    }

});

