// ============================================
// TEACHER ATTENDANCE
// ============================================


// ============================================
// CURRENT DATE
// ============================================

const attendanceDate =
    document.getElementById("attendanceDate");

const currentDate =
    document.getElementById("currentDate");


if (attendanceDate) {

    const today = new Date();

    attendanceDate.textContent =
        today.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );

}


// ============================================
// ATTENDANCE STUDENTS
// ============================================

const studentRows =
    document.querySelectorAll(
        ".attendance-student"
    );


// ============================================
// UPDATE SUMMARY
// ============================================

function updateAttendanceSummary() {

    const total =
        studentRows.length;


    let present = 0;
    let absent = 0;


    studentRows.forEach(row => {

        const status =
            row.dataset.status;


        if (status === "present") {

            present++;

        }


        if (status === "absent") {

            absent++;

        }

    });


    const presentElement =
        document.getElementById(
            "presentCount"
        );

    const absentElement =
        document.getElementById(
            "absentCount"
        );

    const totalElement =
        document.getElementById(
            "totalStudents"
        );

    const percentageElement =
        document.getElementById(
            "attendancePercentage"
        );


    if (presentElement) {

        presentElement.textContent =
            present;

    }


    if (absentElement) {

        absentElement.textContent =
            absent;

    }


    if (totalElement) {

        totalElement.textContent =
            total;

    }


    const percentage =
        total > 0
            ? Math.round(
                (present / total) * 100
            )
            : 0;


    if (percentageElement) {

        percentageElement.textContent =
            `${percentage}%`;

    }

}


// ============================================
// PRESENT / ABSENT BUTTONS
// ============================================

document
    .querySelectorAll(".attendance-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {


                const row =
                    this.closest(
                        ".attendance-student"
                    );


                const status =
                    this.dataset.status;


                row.dataset.status =
                    status;


                // Remove selected state

                row
                    .querySelectorAll(
                        ".attendance-btn"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "selected"
                        );

                    });


                // Select current button

                this.classList.add(
                    "selected"
                );


                updateAttendanceSummary();

            }
        );

    });


// ============================================
// MARK ALL PRESENT
// ============================================

const markAllPresent =
    document.getElementById(
        "markAllPresent"
    );


if (markAllPresent) {

    markAllPresent.addEventListener(
        "click",
        () => {

            studentRows.forEach(row => {

                row.dataset.status =
                    "present";


                row
                    .querySelector(
                        ".present-btn"
                    )
                    .classList.add(
                        "selected"
                    );


                row
                    .querySelector(
                        ".absent-btn"
                    )
                    .classList.remove(
                        "selected"
                    );

            });


            updateAttendanceSummary();

        }
    );

}


// ============================================
// MARK ALL ABSENT
// ============================================

const markAllAbsent =
    document.getElementById(
        "markAllAbsent"
    );


if (markAllAbsent) {

    markAllAbsent.addEventListener(
        "click",
        () => {

            studentRows.forEach(row => {

                row.dataset.status =
                    "absent";


                row
                    .querySelector(
                        ".absent-btn"
                    )
                    .classList.add(
                        "selected"
                    );


                row
                    .querySelector(
                        ".present-btn"
                    )
                    .classList.remove(
                        "selected"
                    );

            });


            updateAttendanceSummary();

        }
    );

}


// ============================================
// SUBMIT ATTENDANCE
// ============================================

const submitAttendance =
    document.getElementById(
        "submitAttendance"
    );


if (submitAttendance) {

    submitAttendance.addEventListener(
        "click",
        () => {


            let completed = true;


            studentRows.forEach(row => {

                if (!row.dataset.status) {

                    completed = false;

                }

            });


            if (!completed) {

                alert(
                    "Please mark attendance for every student."
                );

                return;

            }


            const present =
                [...studentRows]
                    .filter(
                        row =>
                            row.dataset.status ===
                            "present"
                    )
                    .length;


            const absent =
                studentRows.length -
                present;


            alert(
                `Attendance submitted successfully!\n\nPresent: ${present}\nAbsent: ${absent}`
            );


        }
    );

}


// ============================================
// HISTORY FILTER
// ============================================

const filterHistory =
    document.getElementById(
        "filterHistory"
    );


if (filterHistory) {

    filterHistory.addEventListener(
        "click",
        () => {


            const subject =
                document.getElementById(
                    "historySubject"
                ).value;


            const section =
                document.getElementById(
                    "historySection"
                ).value;


            const rows =
                document.querySelectorAll(
                    "#historyTable tbody tr"
                );


            rows.forEach(row => {


                const rowSubject =
                    row.dataset.subject;


                const rowSection =
                    row.dataset.section;


                const subjectMatch =
                    subject === "all" ||
                    subject === rowSubject;


                const sectionMatch =
                    section === "all" ||
                    section === rowSection;


                if (
                    subjectMatch &&
                    sectionMatch
                ) {

                    row.style.display =
                        "";

                } else {

                    row.style.display =
                        "none";

                }

            });

        }
    );

}


// Initial calculation

updateAttendanceSummary();