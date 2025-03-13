alert("Welcome to the Cyber Shield Hub!");
// JavaScript for Typing Effect
const typingText = document.getElementById('effect'); // This is where the text will be typed out
const words = ["Welcome to the Cyber Shield Hub",
    "Unlocking Security with Cyber Consulting",
    "Where Cybersecurity Meets Innovation",
    "Cyber Consulting – Stay Ahead, Stay Secure",
    "Your Digital Security Starts Here"]; // List of words to type
let wordIndex = 0;
let charIndex = 0;

// Function to type the words
function type() {
    if (charIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex][charIndex]; 
        charIndex++;
        setTimeout(type, 100); 
    } else {
        setTimeout(deleteWord, 1000); 
    }
}

// Function to delete the typed word
function deleteWord() {
    if (charIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, charIndex - 1);  
        charIndex--;
        setTimeout(deleteWord, 50); 
    } else {
        wordIndex = (wordIndex + 1) % words.length; 
        setTimeout(type, 500); 
    }
}

// Start typing the first word
type();
