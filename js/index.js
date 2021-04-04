
 






    let solarSystem = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Planet Nine"]
    console.log(`Blue rain ${solarSystem}`) 


    let heart5 = document.getElementById("solarSystem1")
    let planetCardsArea = document.createElement("DIV")
    heart5.appendChild(planetCardsArea)

    function createPlanetCards(x){
        for (i = 0; i < x.length; i++) {
            let planetCard = document.createElement("DIV")
            planetCard.innerHTML = x[i]
            planetCardsArea.appendChild(planetCard)
            console.log(i)
    
    
        }
 
    }



// window.onload = createPlanetCards(solarSystem);
