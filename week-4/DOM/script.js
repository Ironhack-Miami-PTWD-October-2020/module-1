window.onload = () => {
    console.log("Script file connected");

    const h1 = document.querySelector("#mainTitle");
    h1.innerHTML = "DOM Manipulation";
    h1.classList.add("center-text");

    const titleDisplayButton = document.querySelector("#display-title");

    titleDisplayButton.onclick = () => {
        // console.log("Display Title Button On Click Works");

        if (h1.classList.contains("doNotDisplay")) {
            h1.classList.toggle("doNotDisplay", false);
            titleDisplayButton.innerHTML = "Hide Title";
        } else {
            h1.classList.toggle("doNotDisplay", true);
            titleDisplayButton.innerHTML = "Show Title";
        }
    };

    h1.addEventListener("mouseover", (event) => {
        event.target.setAttribute("style", "color: Pink");
    });

    h1.addEventListener("mouseleave", (event) => {
        event.target.setAttribute("style", "color: Black");
    });
};

const showTextButton = document.querySelector("#showText");
const textAddDiv = document.querySelector("#text-display");

let counter = textAddDiv.children.length;

showTextButton.onclick = () => {
    const textInput = document.querySelector("#randomTextInput");
    // console.log({ counter });
    // console.log({ input: textInput });
    counter++;
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <h3 class="textFromInput">${textInput.value}</h3>
        <input type="number" name="randomNumber${counter}" value="${counter}" />
        <button onClick="removeText(this)">Remove</button>
    `;

    textAddDiv.appendChild(newDiv);
};

function removeText(event) {
    // console.log({ event });
    event.parentNode.remove();
}

document.querySelector("#totalOfInputs").addEventListener("click", () => {
    // console.log({ textAddDiv });
    const totalValueDisplay = document.querySelector("#totalValueNumber");
    let result = 0;

    for (let i = 0; i < textAddDiv.childElementCount; i++) {
        console.log({ textAddDiv: textAddDiv.children[i].children[1].value });

        result += Number(textAddDiv.children[i].children[1].value);
    }

    totalValueDisplay.innerHTML = `$${result}.00`;
});
