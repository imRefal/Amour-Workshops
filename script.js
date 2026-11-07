function changeWelcomeText() {
    var message = document.getElementById("welcomeMessage");
    var extra = document.getElementById("welcomeExtra");
    var image = document.getElementById("heroImage");

    message.textContent =
        "Amour Workshops is a private creative experience for women at Amour Café in Al-Baha. Enjoy pottery, candle making, and canvas painting.";

    extra.textContent = "Create beautiful memories with Amour!";

    // Change CSS styles using JavaScript
    message.style.color = "#967d91";
    message.style.fontWeight = "bold";

    // Change picture dynamically
    if (image.getAttribute("src") === "xx.jpg") {
        image.src = "1.jpg";
        image.alt = "Pottery Workshop";
    } else {
        image.src = "xx.jpg";
        image.alt = "Amour Creative Studio";
    }

    // Use a loop to style workshop cards
    var cards = document.querySelectorAll(".workshop-card");

    for (var i = 0; i < cards.length; i++) {
        cards[i].style.border = "2px solid #e8d2df";
    }
}

function showDetails(workshop) {
    var details = document.getElementById(workshop);

    if (details.innerHTML !== "") {
        details.textContent = "";
    } else if (workshop === "pottery") {
        details.textContent = "Price: 50 SAR";
    } else if (workshop === "candle") {
        details.textContent = "Price: 50 SAR";
    } else if (workshop === "painting") {
        details.textContent = "Kids: 35 SAR | Adults: 45 SAR";
    }
}
