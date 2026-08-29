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
// QUIZ TYPE BUTTONS
// ======================================

const startButtons =
    document.querySelectorAll(".start-btn");

const subjectSelection =
    document.getElementById("subjectSelection");

const dsaSection =
    document.getElementById("dsaSection");

const aptitudeSection =
    document.getElementById("aptitudeSection");


startButtons.forEach(button => {

    button.addEventListener("click", () => {

        const action =
            button.dataset.action;


        if (action === "subject") {

            subjectSelection.scrollIntoView({
                behavior: "smooth"
            });

        }


        if (action === "dsa") {

            dsaSection.scrollIntoView({
                behavior: "smooth"
            });

        }


        if (action === "aptitude") {

            aptitudeSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ======================================
// SUBJECT QUIZ
// ======================================

const subjectButtons =
    document.querySelectorAll(
        ".subject-quiz-card"
    );


subjectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const subject =
            button.dataset.subject;


        alert(
            `Starting ${subject} Quiz`
        );

        /*
         * Later:
         *
         * window.location.href =
         * `/quiz/subject/${encodeURIComponent(subject)}`;
         */

    });

});


// ======================================
// DSA QUIZ
// ======================================

const practiceCards =
    document.querySelectorAll(
        ".practice-card"
    );


practiceCards.forEach(card => {

    card.addEventListener("click", () => {

        const topic =
            card.querySelector("strong")
                .textContent;


        alert(
            `Starting ${topic} Quiz`
        );

        /*
         * Later:
         *
         * window.location.href =
         * `/quiz/dsa/${encodeURIComponent(topic)}`;
         */

    });

});
