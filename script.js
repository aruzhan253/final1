function searchTour() {
    var location = document.getElementById("location").value;
    var departureDate = document.getElementById("departureDate").value;
    var returnDate = document.getElementById("returnDate").value;
    var numberOfPeople = document.getElementById("numberOfPeople").value;

    console.log("Location:", location);
    console.log("Departure Date:", departureDate);
    console.log("Return Date:", returnDate);
    console.log("Number of People:", numberOfPeople);

    if (location.toLowerCase() === "almaty" && departureDate === "2024-10-13" && returnDate === "2024-10-18" && numberOfPeople === "1") {
        window.location.href = "almaty.html";
    } else {
        alert("Error: Tour not found.");
        playErrorSound();
    }
}

function playErrorSound() {
    var errorSound = new Audio('error.mp3'); 
    errorSound.play();
}

function clearForm() {
    var locationInput = document.getElementById('location');
    var departureDateInput = document.getElementById('departureDate');
    var returnDateInput = document.getElementById('returnDate');
    var numberOfPeopleInput = document.getElementById('numberOfPeople');
    locationInput.value = '';
    departureDateInput.value = '';
    returnDateInput.value = '';
    numberOfPeopleInput.value = '';
}

    const imgBoxes = document.querySelectorAll('.img_box');

    imgBoxes.forEach(function (box) {
        box.addEventListener('mouseover', function () {
            showOverlay(box);
        });

        box.addEventListener('mouseout', function () {
            hideOverlay(box);
        });
    });

    function showOverlay(box) {
        const overlay = box.querySelector('.overlay');
        overlay.style.opacity = '1';
    }

    function hideOverlay(box) {
        const overlay = box.querySelector('.overlay');
        overlay.style.opacity = '0';
    }
