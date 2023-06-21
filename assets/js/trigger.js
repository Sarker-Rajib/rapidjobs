const trigger = document.getElementById('trigger');
const hiddenItem = document.getElementById('hiddenItem');

trigger.addEventListener('click', () => {
    if (hiddenItem.style.display === "none") {
        hiddenItem.style.display = "block";
    }

    else {
        hiddenItem.style.display = "none";
    }
})