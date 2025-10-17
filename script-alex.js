function konvertiereZahlInBruchzahl(number) {
    if (Number.isInteger(number)) {
        return number.toString(); // Ganze Zahl bleibt so
    }

    const tolerance = 1.0E-6; // Genauigkeit
    let h1 = 1, h2 = 0;
    let k1 = 0, k2 = 1;
    let b = number;

    do {
        let a = Math.floor(b);
        let aux = h1;
        h1 = a * h1 + h2;
        h2 = aux;
        aux = k1;
        k1 = a * k1 + k2;
        k2 = aux;
        b = 1 / (b - a);
    } while (Math.abs(number - h1 / k1) > number * tolerance);

    let numerator = h1;
    let denominator = k1;

    // Ganze Zahlanteile herausziehen
    let whole = Math.floor(numerator / denominator);
    numerator = numerator % denominator;

    if (whole > 0 && numerator > 0) {
        return `${whole} ${numerator}/${denominator}`;
    } else if (whole > 0 && numerator === 0) {
        return `${whole}`;
    } else {
        return `${numerator}/${denominator}`;
    }
}

const zutatenProPortion = [
    {
        initialValue: 0.5,
        text: function(anzahlDerPortionen) {
            return 'Aubergine (ca. '
                + (anzahlDerPortionen * 125)
                + ' g)'
        },
        calculateValue: function(anzahlDerPortionen) {
            return this.initialValue * anzahlDerPortionen
        },
        renderValue: function(anzahlDerPortionen) {
            return konvertiereZahlInBruchzahl(this.calculateValue(anzahlDerPortionen))
        }
    },
    {
        initialValue: 0.5,
        text: 'Zwiebel',
        calculateValue: function(anzahlDerPortionen) {
            return this.initialValue * anzahlDerPortionen
        },
        renderValue: function(anzahlDerPortionen) {
            return konvertiereZahlInBruchzahl(this.calculateValue(anzahlDerPortionen))
        }
    },
    {
        initialValue: 0.5,
        text: 'Knoblauchzehe',
        calculateValue: function(anzahlDerPortionen) {
            return this.initialValue * anzahlDerPortionen
        },
        renderValue: function(anzahlDerPortionen) {
            return konvertiereZahlInBruchzahl(this.calculateValue(anzahlDerPortionen))
        }
    },
    {
        initialValue: 0.5,
        text: 'Rote Peperoni',
        calculateValue: function(anzahlDerPortionen) {
            return this.initialValue * anzahlDerPortionen
        },
        renderValue: function(anzahlDerPortionen) {
            return konvertiereZahlInBruchzahl(this.calculateValue(anzahlDerPortionen))
        }
    },
    {
        initialValue: 50,
        text: 'Chili-Cabanossi',
        calculateValue: function(anzahlDerPortionen) {
            return this.initialValue * anzahlDerPortionen
        },
        renderValue: function(anzahlDerPortionen) {
            return this.calculateValue(anzahlDerPortionen) + ' g'
        }
    },
    {
        initialValue: 3,
        text: function (anzahlDerPortionen) {
            return 'Stiele Oregano (ersatzweise ' 
                + konvertiereZahlInBruchzahl(Math.min(0.25 * anzahlDerPortionen, 1.75)) 
                + ' Tl getrockneter Oregano)'
        },
        calculateValue: function(anzahlDerPortionen) {
            return Math.min(this.initialValue * anzahlDerPortionen, 21)
        },
        renderValue: function(anzahlDerPortionen) {
            return this.calculateValue(anzahlDerPortionen)
        }
    },
    {
        initialValue: 1.5,
        text: 'El Olivenöl',
        calculateValue: function(anzahlDerPortionen) {
            return this.initialValue * anzahlDerPortionen
        },
        renderValue: function(anzahlDerPortionen) {
            return konvertiereZahlInBruchzahl(this.calculateValue(anzahlDerPortionen))
        }
    },
    {
        initialValue: 210,
        text: 'geschälte Tomaten (1 Dose)',
        calculateValue: function(anzahlDerPortionen) {
            const map = {
                1: 210,
                2: 425
            }

            if (anzahlDerPortionen > 2) {
                return anzahlDerPortionen * 212.5;
            }

            return map[anzahlDerPortionen]
        },
        renderValue: function(anzahlDerPortionen) {
            return this.calculateValue(anzahlDerPortionen) + ' g'
        }
    },
    {
        initialValue: 100,
        text: 'Nudeln (z.B. Spaghetti oder Linguine)',
        calculateValue: function(anzahlDerPortionen) {
            return this.initialValue * anzahlDerPortionen
        },
        renderValue: function(anzahlDerPortionen) {
            return this.calculateValue(anzahlDerPortionen) + ' g'
        }
    }
]

function getZutaten(anzahlDerPortionen) {
    // const result = []
    // for(let i = 0; i < zutatenProPortion.length; i++) {
    //     const zutat = zutatenProPortion[i]
    //     result.push({
    //         value: zutat.renderValue(anzahlDerPortionen),
    //         text: typeof zutat.text === 'function' 
    //             ? zutat.text(anzahlDerPortionen)
    //             : zutat.text
    //     })
    // }

    // result -> ARRAY mit Value und Texten -> [ { value, text }, { value, text }, ... ]
    return zutatenProPortion.map(function (zutat) {
        return {
            value: zutat.renderValue(anzahlDerPortionen),
            text: typeof zutat.text === 'function' 
                ? zutat.text(anzahlDerPortionen)
                : zutat.text
        }
    })
}

function updateZutaten(anzahlDerPortionen) {
    const zutaten = getZutaten(anzahlDerPortionen)
    const ingredientElements = document.querySelectorAll('.ingredient')
    ingredientElements.forEach(function (ingredientElement, index) {
        const zutat = zutaten[index]
        ingredientElement.querySelector('span.ingredient-value').innerText = zutat.value
        ingredientElement.querySelector('span.ingredient-text').innerText = zutat.text
    })
}

const minimaleAnzahlAnPortionen = 1
const maximaleAnzahlAnPortionen = 12

function werterhöhen() {    
    let plus1 = document.getElementById("person-input").value;
    plus1 = Math.min(parseInt(plus1) + 1, maximaleAnzahlAnPortionen);
    document.getElementById("person-input").value = plus1;     
    updateZutaten(plus1)
}
function wertverringern() {
    let minus1 = document.getElementById("person-input").value;
    minus1 = Math.max(parseInt(minus1) - 1, minimaleAnzahlAnPortionen);
    document.getElementById("person-input").value = minus1;  
    updateZutaten(minus1)
}
