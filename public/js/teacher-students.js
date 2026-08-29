// ============================================
// TEACHER STUDENTS
// ============================================

const searchInput =
    document.getElementById("studentSearch");

const semesterFilter =
    document.getElementById("semesterFilter");

const sectionFilter =
    document.getElementById("sectionFilter");

const tableBody =
    document.getElementById("studentTableBody");

const resultCount =
    document.getElementById("resultCount");

const noStudents =
    document.getElementById("noStudents");


// ============================================
// FILTER STUDENTS
// ============================================

function filterStudents() {

    if (!tableBody) {
        return;
    }


    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const semester =
        semesterFilter.value;


    const section =
        sectionFilter.value;


    const rows =
        tableBody.querySelectorAll("tr");


    let visibleCount = 0;


    rows.forEach(row => {


        const name =
            row.dataset.name.toLowerCase();


        const studentId =
            row.dataset.id.toLowerCase();


        const roll =
            row.dataset.roll.toLowerCase();


        const rowSemester =
            row.dataset.semester;


        const rowSection =
            row.dataset.section;


        const matchesSearch =

            name.includes(search) ||

            studentId.includes(search) ||

            roll.includes(search);


        const matchesSemester =

            semester === "all" ||

            rowSemester === semester;


        const matchesSection =

            section === "all" ||

            rowSection === section;


        if (
            matchesSearch &&
            matchesSemester &&
            matchesSection
        ) {

            row.style.display = "";

            visibleCount++;

        } else {

            row.style.display = "none";

        }

    });


    // Update result count

    resultCount.textContent =
        `${visibleCount} Student${visibleCount !== 1 ? "s" : ""}`;


    // Show empty state

    if (visibleCount === 0) {

        noStudents.style.display = "block";

    } else {

        noStudents.style.display = "none";

    }

}


// ============================================
// EVENTS
// ============================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterStudents
    );

}


if (semesterFilter) {

    semesterFilter.addEventListener(
        "change",
        filterStudents
    );

}


if (sectionFilter) {

    sectionFilter.addEventListener(
        "change",
        filterStudents
    );

}