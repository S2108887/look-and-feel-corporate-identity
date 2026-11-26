const FORMULIER = document.querySelector(".instellingen-formulier")
const BODY = document.querySelector("body")

const INSTELLINGSNAMEN = ["kleurenschema", "contrast"]

haalInstellingenOp()
stelInstellingenFormulierIn()

function haalInstellingenOp() {
    for (const naam of INSTELLINGSNAMEN) {
        const waarde = localStorage.getItem(naam)
        if (waarde) {
            BODY.dataset[naam] = waarde
        }
    }
}


function stelInstellingenFormulierIn() {
    if (!FORMULIER) {
        return
    }

    for (const knop of FORMULIER.querySelectorAll("button")) {
        knop.addEventListener("click", () => toonOfVerbergInstellingen())
    }

    for (const radio of FORMULIER.querySelectorAll('input[type="radio"]')) {
        let gegeven = radio.name
        let waarde = radio.value
        let opgeslagenWaarde = localStorage.getItem(gegeven)
        if (opgeslagenWaarde === waarde) {
            radio.checked = true
        }

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

    BODY.dataset[gegeven] = waarde
    localStorage.setItem(gegeven, waarde)
}

function toonOfVerbergInstellingen() {
    for (const kind of FORMULIER.children) {
        kind.classList.toggle("verborgen")
    }
}