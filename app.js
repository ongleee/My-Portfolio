// Simulate delay (remove this in a real scenario)
setTimeout(() => {
    // Hide loading text after 0.5 seconds
    document.querySelector('.loading-text').classList.add('hide-loading');
    // Show main content after 1 second (transition delay)
    document.querySelector('.container').classList.add('show-content');
    // Hide loading page after 1.7 seconds (transition duration + delay)
    setTimeout(() => {
      document.querySelector('.loading-page').classList.add('hide-loading-page');
    }, 500);
}, 700); // Simulated delay of 2 seconds


document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.services').classList.toggle('active');
});

// JavaScript for smooth scroll และ mobile menu
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          // ปิด mobile menu หลังจากคลิก
          services.classList.remove('active');

          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
});

