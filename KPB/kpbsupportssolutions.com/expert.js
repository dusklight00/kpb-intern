// Description: This file contains the code for the expert form submission.
  document.getElementById('expertForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  console.log('Form submitted:', data);
  alert('Thank you for your message! We will contact you soon.');
  e.target.reset();
});