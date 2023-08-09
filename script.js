// JavaScript code for smooth scrolling to anchor links
document.addEventListener("DOMContentLoaded", function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const link of anchorLinks) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        const headerOffset = 100; // Adjust this value to offset the fixed header height
        
        if (target) {
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition - headerOffset;
  
          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      });
    }
  });
  
  // JavaScript code to handle the form submission
  document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
  
    if (contactForm) {
      contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
  
        // You can add your own logic here to handle form submission (e.g., sending an email)
        // Example: 
        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
  
        // Perform any validation or processing you need here before submitting the form
  
        // Example: Sending data to a server using fetch API
        fetch("your-server-endpoint", {
          method: "POST",
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server (e.g., show a success message)
          console.log(data);
        })
        .catch(error => {
          // Handle any errors that occur during form submission
          console.error("Error:", error);
        });
      });
    }
  });

// Get the hamburger menu and menu element
const hamburger = document.querySelector('.icon');
const menu = document.querySelector('.menu_mobile');

// Add a click event listener to the hamburger menu
hamburger.addEventListener('click', function() {
  // Toggle the 'active' class on the menu element
  menu.classList.toggle('active');
  //menu.style.display="block";
});

function closeSB(){
  menu.classList.toggle('active');
  console.log('!!!!')
}

  