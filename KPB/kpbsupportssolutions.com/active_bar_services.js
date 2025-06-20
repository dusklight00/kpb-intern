// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.ull a');
  
  // Function to update active state
  function updateActiveState() {
      // Get current scroll position
      const scrollPosition = window.scrollY;
      
      // Get all main sections
      const sections = {
          home: document.getElementById('home').offsetTop,
          service: document.getElementById('service').offsetTop,
      };
      
      // Add offset for better transition
      const offset = 100;
      
      // Remove all active classes first
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Determine which section is in view and update active state
      if (scrollPosition < sections.service - offset) {
          document.querySelector('.ull a[href="#home"]').classList.add('active');
      } else if (scrollPosition >= sections.service - offset) {
          document.querySelector('.ull a[href="#service"]').classList.add('active');
      }
  }
  
  // Add click event listeners to navigation links
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          // Only handle internal links
          if (this.getAttribute('href').startsWith('#')) {
              e.preventDefault();
              
              // Get the target section
              const targetId = this.getAttribute('href');
              const targetSection = document.querySelector(targetId);
              
              if (targetSection) {
                  // Smooth scroll to section
                  targetSection.scrollIntoView({
                      behavior: 'smooth'
                  });
                  
                  // Update active state
                  navLinks.forEach(link => link.classList.remove('active'));
                  this.classList.add('active');
              }
          }
      });
  });
  
  // Add scroll event listener
  window.addEventListener('scroll', updateActiveState);
  
  // Initial call to set correct active state on page load
  updateActiveState();
});
