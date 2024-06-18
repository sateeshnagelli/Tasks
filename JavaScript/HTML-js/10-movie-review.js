function addReview() {
    const title = document.getElementById("titleInput").value;
    const review = document.getElementById("reviewTextarea").value;
  
    const contain = document.getElementById("reviewsContainer");
  
    let p1 = document.createElement("p");
    p1.textContent = `Movie: ${title}`;
  
    let p2 = document.createElement("p");
    p2.textContent = `Review: ${review}`;
  
    contain.appendChild(p1);
    contain.appendChild(p2);
  
    clearInputField();
  }
  
  function clearInputField() {
    const titleInput = document.getElementById("titleInput");
    const reviewTextarea = document.getElementById("reviewTextarea");
  
    titleInput.value = "";
    reviewTextarea.value = "";
  }