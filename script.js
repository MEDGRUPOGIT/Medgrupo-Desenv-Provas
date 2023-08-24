let isFlipped = false;

function flip() {
  const card = document.getElementById("component1");  

    
    
    if (isFlipped) {
      card.style.transform = "rotateX(1deg)";
    } else {
      card.style.transform = "rotateX(180deg)";
    }
    isFlipped = !isFlipped;  
}