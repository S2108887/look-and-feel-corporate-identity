const FORMULIER = document.querySelector(".instellingen-formulier")
const BODY = document.querySelector("body")

stelInstellingenFormulierIn();


function stelInstellingenFormulierIn() {
    if (!FORMULIER) {
        return
    }

    for (const knop of FORMULIER.querySelectorAll("button")) {
        knop.addEventListener("click", () => toonOfVerbergInstellingen())
    }

    for (const radio of FORMULIER.querySelectorAll('input[type="radio"]')) {
        radio.addEventListener("input", radioknopActie)
    }


}

function radioknopActie(event) {
    const knop = event.target
    if (!knop.checked) {
        return
    }

    const gegeven = knop.name
    const waarde = knop.value

    BODY.dataset[gegeven] = waarde;
}

function toonOfVerbergInstellingen() {
    for (const kind of FORMULIER.children) {
        kind.classList.toggle("verborgen")
    }
}