
const texts = [
    "Frontend developer",
    "Backend Developer (Python)",
    "UI/UX Designer"
];

let index = 0;
let charIndex = 0;
const typingSpeed = 80; // Speed of typing in milliseconds
const pauseDuration = 1000; // Pause duration between texts in milliseconds
const typingElement = document.getElementById("typed_text");

function type() {
    if (charIndex < texts[index].length) {
        typingElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(() => {
            erase();
        }, pauseDuration);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, typingSpeed);
    } else {
        // Move to the next text after erasing
        index = (index + 1) % texts.length; // Loop back to the first text
        setTimeout(type, typingSpeed); // Start typing again
    }
}

// Start the typing animation
type();


// JavaScript for toggling the navbar menu
// script.js

// Get the necessary elements by their IDs
const hamburger = document.getElementById('hamburger');
const cross = document.getElementById('cross');
const navLinks = document.getElementById('nav-links');
const navbar = document.getElementById('navbar'); // Get the navbar section

// Initially, show the hamburger icon, hide the cross icon, and set default styles
cross.style.display = 'none';

navbar.style.backgroundColor = 'white'; // Set background to white when navbar is closed
hamburger.style.color = 'black'; // Set hamburger color to black

// *** Highlighted Change: Set navbar border to none when closed ***
navbar.style.border = 'none'; // Remove border when navbar is closed

// When the hamburger icon is clicked
hamburger.addEventListener('click', () => {
    navLinks.style.display = 'flex'; // Show the navbar
    hamburger.style.display = 'none'; // Hide the hamburger icon
    cross.style.display = 'block'; // Show the cross icon
    navbar.style.backgroundColor = 'blue'; // Change navbar background to blue
    cross.style.color = 'white'; // Make the cross icon white

    // *** Highlighted Change: Ensure navbar has no border when open ***
    navbar.style.border = 'none'; // Ensure navbar has no border when open
});

// When the cross icon is clicked
cross.addEventListener('click', () => {
    navLinks.style.display = 'none'; // Hide the navbar
    cross.style.display = 'none'; // Hide the cross icon
    hamburger.style.display = 'block'; // Show the hamburger icon
    navbar.style.backgroundColor = 'white';
    hamburger.style.color = 'black'; 

  
    navbar.style.border = 'none'; 
});





