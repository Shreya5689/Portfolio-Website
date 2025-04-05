document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  const introText = "I am a second-year BTech student specializing in Computer Science and Engineering with a deep passion for coding and problem-solving. My experience spans web technologies and competitive programming, where I have achieved a 2-star rating on CodeChef. Constantly eager to learn, I thrive on tackling challenges, improving my skills, and expanding my knowledge through real-world projects. I am always looking for new opportunities to grow as a developer and contribute to meaningful solutions.";
  let index = 0;
  
  function typeEffect() {
    if (index < introText.length) {
      document.getElementById('intro-text').innerHTML += introText.charAt(index);
      index++;
      setTimeout(typeEffect, 50); // Adjust typing speed here
    }
  }
  
  window.onload = typeEffect;

  const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
  ];
  
  function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
  }
  
  document.getElementById('new-quote').addEventListener('click', newQuote);
  
  // Display a quote when the page loads
  window.onload = function() {
    typeEffect();
    newQuote();
  };
  
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('form-message');

  if (name === '' || email === '') {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
  } else {
    message.textContent = 'Form submitted successfully!';
    message.style.color = 'green';
  }
});