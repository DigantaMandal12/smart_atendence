
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
// COURSE FILTER
// ======================================

const searchInput =
    document.getElementById("searchInput");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const courseCards =
    document.querySelectorAll(".course-card");

const courseCount =
    document.getElementById("courseCount");

const noResults =
    document.getElementById("noResults");


let selectedType = "all";
let selectedCategory = "all";


// ======================================
// APPLY FILTER
// ======================================

function filterCourses() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();

    let visibleCourses = 0;


    courseCards.forEach(card => {

        const type =
            card.dataset.type;

        const category =
            card.dataset.category;

        const title =
            card.dataset.title
                .toLowerCase();


        const matchesType =
            selectedType === "all" ||
            type === selectedType;


        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;


        const matchesSearch =
            title.includes(searchText);


        if (
            matchesType &&
            matchesCategory &&
            matchesSearch
        ) {

            card.style.display = "";

            visibleCourses++;

        } else {

            card.style.display = "none";

        }

    });


    courseCount.textContent =
        `${visibleCourses} Course${visibleCourses !== 1 ? "s" : ""}`;


    if (visibleCourses === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


// ======================================
// FREE / PAID FILTER
// ======================================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(item => {

            item.classList.remove("active");

        });

        button.classList.add("active");

        selectedType =
            button.dataset.filter;

        filterCourses();

    });

});


// ======================================
// CATEGORY FILTER
// ======================================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(item => {

            item.classList.remove("active");

        });

        button.classList.add("active");


        const text =
            button.textContent
                .toLowerCase();


        if (text.includes("programming")) {

            selectedCategory = "programming";

        } else if (text.includes("web")) {

            selectedCategory = "web";

        } else if (text.includes("database")) {

            selectedCategory = "database";

        } else if (text.includes("ai")) {

            selectedCategory = "ai";

        } else if (text.includes("cyber")) {

            selectedCategory = "cyber";

        } else {

            selectedCategory = "all";

        }


        filterCourses();

    });

});


// ======================================
// SEARCH
// ======================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterCourses
    );

}


// ======================================
// INITIALIZE
// ======================================

filterCourses();
