document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebar = document.querySelector(".header .navbar");
    const logo = document.querySelector(".header .logo");

    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        logo.classList.toggle("active");

    });
    sidebar.addEventListener("click", function (event) {
        if (event.target === sidebar) {
            sidebar.classList.remove("active");
            logo.classList.remove("active");
        }
    });
});







