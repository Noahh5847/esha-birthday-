
const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openLetter");
const instruction = document.getElementById("instruction");
const birthdayLetter = document.getElementById("birthdayLetter");

openButton.addEventListener("click", function () {

    if (envelope.classList.contains("opened")) {
        return;
    }

    envelope.classList.add("opened");

    instruction.textContent = "Your little surprise is here ♡";

    openButton.style.opacity = "0";
    openButton.style.pointerEvents = "none";

    setTimeout(function () {
        birthdayLetter.style.display = "block";

        birthdayLetter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        instruction.textContent = "A little letter, just for you 🌹";

    }, 1000);

});

const continueButton = document.getElementById("continueButton");
const appreciationSection = document.getElementById("appreciationSection");
const giftsButton = document.getElementById("giftsButton");

continueButton.addEventListener("click", function () {

    appreciationSection.style.display = "block";

    appreciationSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    continueButton.style.display = "none";

});


giftsButton.addEventListener("click", function () {

    const giftsSection = document.getElementById("giftsSection");

    giftsSection.style.display = "block";

    giftsSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    giftsButton.style.display = "none";

});

const giftBoxes = document.querySelectorAll(".gift-box");

giftBoxes.forEach(function (box) {

    box.addEventListener("click", function () {

        const giftNumber = box.dataset.gift;

        const message = document.getElementById(
            "giftMessage" + giftNumber
        );

        if (message.style.display === "block") {
            return;
        }

        message.style.display = "block";
        box.classList.add("opened");

        box.querySelector(".gift-hint").textContent = "Opened with love ♡";

        message.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    });

});

const finalButton = document.getElementById("finalButton");


finalButton.addEventListener("click", function () {

    finalSection.style.display = "block";

    finalSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    finalButton.style.display = "none";

});


const wishesNextButton = document.getElementById("wishesButton");
const wishesPage = document.getElementById("wishesSection");

wishesNextButton.addEventListener("click", function () {

    wishesPage.style.display = "block";

    wishesPage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    wishesNextButton.style.display = "none";

});

const openFinalLetter = document.getElementById("openFinalLetter");
const finalLetter = document.getElementById("finalLetter");

openFinalLetter.addEventListener("click", function () {

    finalLetter.style.display = "block";

    openFinalLetter.style.display = "none";

    document.getElementById("finalEnvelope").style.display = "none";

    finalLetter.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

