let input = document.getElementById("input");
let btn = document.getElementById("tugma");
let output = document.getElementById("output");

function addCard() {

    if (input.value === "") {
        return;
    }


    let card = document.createElement("div");
    card.classList.add("card");


    let text = document.createElement("p");
    text.textContent = input.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";


    deleteBtn.addEventListener("click", function () {
        card.remove();
    });


    card.appendChild(text);
    card.appendChild(deleteBtn);


    output.appendChild(card);

    input.value = "";
}


btn.addEventListener("click", addCard);

input.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addCard();
    }

});