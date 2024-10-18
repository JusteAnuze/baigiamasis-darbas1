
const button = document.querySelector('.button');
const backgroundColor = window.getComputedStyle(button).backgroundColor;

// Now you can use this color in other parts of your JavaScript
console.log('The button background color is:', backgroundColor);

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}
