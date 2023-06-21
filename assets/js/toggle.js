const toggleBtn = document.getElementById('toggler');
const sideNav = document.getElementById('sideNav');

toggleBtn.addEventListener('click', () => {
    sideNav.style.transition = "0.3s";
    if (sideNav.style.width === "260px") {
        sideNav.style.width = "0px";
    } else {
        sideNav.style.width = "260px";
    }
})