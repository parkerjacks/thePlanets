
 






    let solarSystem = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Planet Nine"]
    let ogPaletteColors = ["#DFFF00", "#FFBF00", "#FF7F50", "#DE3163", "#9FE2BF", "#40E0D0", "#6495ED", "#CCCCFF"]
    console.log(`Blue rain ${solarSystem}`) 


    let solarSystem1 = document.getElementById("solarSystem1")
    
  

    function createPlanetCards(x){
        for (i = 0; i < x.length; i++) {
            let planetCard = document.createElement("DIV")
            planetCard.innerHTML = x[i]
            planetCard.className="planet_Card"
            if(ogPaletteColors[i]){ 
                planetCard.style.backgroundColor = ogPaletteColors[i]
               
             
            }
            else { 
             
                let x = (ogPaletteColors.length-1)/i
              
                x = Math.trunc(x)
               
                planetCard.style.backgroundColor = ogPaletteColors[x]
              
               
            }
            solarSystem1.appendChild(planetCard)
           
    
    
        }
 
    }



// window.onload = createPlanetCards(solarSystem);
