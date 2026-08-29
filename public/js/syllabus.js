
// ======================================
// MOBILE SIDEBAR
// ======================================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        sidebar.classList.toggle("open");

    });

}


// ======================================
// SEMESTER TABS
// ======================================

const semesterTabs =
    document.querySelectorAll(".semester-tab");


semesterTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        semesterTabs.forEach(item => {

            item.classList.remove("active");

        });

        tab.classList.add("active");

        console.log(
            "Selected:",
            tab.textContent
        );

    });

});


// ======================================
// SUBJECT BUTTONS
// ======================================

const subjectButtons =
    document.querySelectorAll(".view-topics");

const topicTitle =
    document.getElementById("topicTitle");

const topicSubtitle =
    document.getElementById("topicSubtitle");

const completedCount =
    document.getElementById("completedCount");

const remainingCount =
    document.getElementById("remainingCount");


subjectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const subject =
            button.dataset.subject;


        topicTitle.textContent =
            subject;

        topicSubtitle.textContent =
            "Topic completion status";


        // Temporary demo data

        const subjectData = {

            "Data Structures": {
                completed: 9,
                remaining: 1
            },

            "Database Management": {
                completed: 6,
                remaining: 2
            },

            "Web Development": {
                completed: 7,
                remaining: 4
            },

            "Computer Networks": {
                completed: 7,
                remaining: 5
            },

            "Operating Systems": {
                completed: 8,
                remaining: 5
            }

        };


        const data =
            subjectData[subject];


        if (data) {

            completedCount.textContent =
                data.completed;

            remainingCount.textContent =
                data.remaining;

        }


        // Scroll to topics

        document
            .getElementById("topicSection")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});
