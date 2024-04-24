
var reveals = document.querySelectorAll(".reveal");
const navButtons = document.querySelectorAll('.navbtn');
var buttonClicked = false;


function buttonClick() {
  navButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          buttonClicked = true;
      });
  });
}



// Function to handle reveal logic
function reveal() {
  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 120;

      if (!buttonClicked && elementTop < windowHeight - elementVisible) {
          // Check if the element already has the 'active2' class
          if (!reveals[i].classList.contains("active2")) {
              reveals[i].classList.add("active");
              reveals[i].classList.remove("active2"); // Ensure 'active2' is removed
          }
      } else if (buttonClicked && elementTop < windowHeight - elementVisible) {
          reveals[i].classList.remove("active");
          reveals[i].classList.add("active2");
      } else {
          reveals[i].classList.remove("active");
          reveals[i].classList.remove("active2");
      }
  }
}


// Scroll event listener to handle reveal on scroll
window.addEventListener("scroll", function() {
  reveal(); // Update reveal classes on scroll
  // Reset buttonClicked when the user starts scrolling again
  if (buttonClicked) {
      buttonClicked = false;
  }
});

// Button click event listener
navButtons.forEach(function(navButton) {
  navButton.addEventListener('click', function() {
      buttonClicked = true;
      reveal(); // Update reveal classes after button click
  });
});
