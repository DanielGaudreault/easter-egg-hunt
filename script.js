const eggContainer = document.getElementById('egg-container');
const messageDiv = document.getElementById('message');

// Array of Easter egg positions (x, y) and messages
const eggs = [
  { x: 50, y: 100, message: "You found Egg #1! 🥚" },
  { x: 200, y: 50, message: "Egg #2 is found! 🎉" },
  { x: 300, y: 200, message: "Egg #3 discovered! 🌟" }
];

// Create Easter eggs and add them to the container
eggs.forEach((egg, index) => {
  const eggElement = document.createElement('div');
  eggElement.classList.add('easter-egg');
  eggElement.style.left = `${egg.x}px`;
  eggElement.style.top = `${egg.y}px`;
  eggElement.dataset.message = egg.message;
  eggContainer.appendChild(eggElement);

  // Show the egg when clicked
  eggElement.addEventListener('click', () => {
    eggElement.style.display = 'none'; // Hide the egg
    messageDiv.textContent = egg.message; // Show the message
    setTimeout(() => {
      messageDiv.textContent = ''; // Clear the message after 2 seconds
    }, 2000);
  });
});

// Randomly show Easter eggs after a delay
function showEggs() {
  const eggElements = document.querySelectorAll('.easter-egg');
  eggElements.forEach(egg => {
    setTimeout(() => {
      egg.style.display = 'block';
    }, Math.random() * 3000); // Random delay up to 3 seconds
  });
}

// Start the Easter egg hunt
showEggs();
