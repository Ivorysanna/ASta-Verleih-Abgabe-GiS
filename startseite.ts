

namespace Verleih {

    interface Produkt {
        name: string;
        beschreibung: string;
        bild: string;
        ausleihGebuehr: number;
        status: Status;
    }

    enum Status {
        FREI, AUSGELIEHEN, RESERVIERT
    }


    async function produkteAnzeigen() {
        let result: Response = await fetch("http://127.0.0.1:5001/Produkte");
        let produkte: Produkt[] = JSON.parse(await result.text());

        for (let i: number = 0; i < produkte.length; i++) {
            let produktDiv = document.createElement("div");
            produktDiv.classList.add("produktDiv");

            document.querySelector("#produkteContainer").appendChild(produktDiv);
            let nameDiv = produktDiv.appendChild(document.createElement("div"));
            nameDiv.classList.add("produktName");
            nameDiv.innerHTML = produkte[i].name;

            let bild = produktDiv.appendChild(document.createElement("img"));
            bild.classList.add("produktBild");
            bild.setAttribute("src", produkte[i].bild);
            
            let beschreibungDiv = produktDiv.appendChild(document.createElement("div"));
            beschreibungDiv.classList.add("produktBeschreibung");
            beschreibungDiv.innerHTML = produkte[i].beschreibung;

            let ausleihGebuehrDiv = produktDiv.appendChild(document.createElement("div"));
            ausleihGebuehrDiv.classList.add("gebuehrenDiv");
            ausleihGebuehrDiv.innerHTML = produkte[i].ausleihGebuehr.toString() + " €";
        }

    }

    produkteAnzeigen();
}