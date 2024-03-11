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
}, 2000); // Simulated delay of 2 seconds
