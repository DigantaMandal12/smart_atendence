// ============================================
// TEACHER DASHBOARD
// ============================================


// Current Date

const currentDate =
    document.getElementById("currentDate");


if (currentDate) {

    const today = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    currentDate.textContent =
        today.toLocaleDateString(
            "en-IN",
            options
        );

}


// ============================================
// NOTIFICATION BUTTON
// ============================================

const notificationButton =
    document.querySelector(
        ".notification-btn"
    );


if (notificationButton) {

    notificationButton.addEventListener(
        "click",
        () => {

            alert(
                "You have 3 new notifications."
            );

        }
    );

}