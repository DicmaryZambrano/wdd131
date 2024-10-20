document.addEventListener('DOMContentLoaded', function () {
  let reviewCount = localStorage.getItem('reviewCount');
  reviewCount = reviewCount ? parseInt(reviewCount) : 0;

  // Increment the counter
  reviewCount++;

  // Save back to localStorage
  localStorage.setItem('reviewCount', reviewCount);

  // Display review count
  const reviewCounterDisplay = document.getElementById('reviewCount');
  if (reviewCounterDisplay) {
    reviewCounterDisplay.textContent = `Total reviews submitted: ${reviewCount}`;
  }
});