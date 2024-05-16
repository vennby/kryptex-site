// Get the reference to the text container element and options container element
const textElement = document.getElementById('text-container');
const optionsContainer = document.querySelector('.options-container');

// Define the texts to be typed
const text1 = "Hey there, I'm Kryptex.";
const text2 = "Wanna destroy GDSC with me?";

// Initialize index to keep track of the current position in the text
let index = 0;

// Function to start typing when the window loads
window.onload = function() {
    typeWriter();
};

// Function to type the first text ("Hey there, I'm Kryptex!")
function typeWriter() {
    // If there are still characters to type
    if (index < text1.length) {
        // Add the next character to the text container
        textElement.textContent += text1.charAt(index);
        // Move to the next character
        index++;
        // Schedule the next character to be typed after a delay
        setTimeout(typeWriter, 75);
    } 
    // If all characters in the first text are typed
    else if (index === text1.length) {
        // Schedule the erasing of the text after a delay
        setTimeout(eraseText, 1000);
    }
}

// Function to erase the typed text
function eraseText() {
    // Get the current length of the text
    const textLength = textElement.textContent.length;
    // If there are still characters to erase
    if (textLength > 0) {
        // Remove the last character from the text container
        textElement.textContent = textElement.textContent.slice(0, textLength - 1);
        // Schedule the next character to be erased after a delay
        setTimeout(eraseText, 50);
    } 
    // If all characters are erased
    else {
        // Reset the index
        index = 0;
        // Schedule the typing of the second text after a delay
        setTimeout(typeSecondText, 500);
    }
}

// Function to type the second text ("Wanna destroy GDSC with me?")
function typeSecondText() {
    // If there are still characters to type
    if (index < text2.length) {
        // Add the next character to the text container
        textElement.textContent += text2.charAt(index);
        // Move to the next character
        index++;
        // Schedule the next character to be typed after a delay
        setTimeout(typeSecondText, 75);
    } 
    // If all characters in the second text are typed
    else if (index === text2.length) {
        // Schedule the display of options after a delay
        setTimeout(showOptions, 1000);
    }
}

// Function to show options after typing is complete
function showOptions() {
    // Make the options container visible
    optionsContainer.style.visibility = 'visible';
    // Get all options
    const options = document.querySelectorAll('.option');
    // Iterate through each option
    options.forEach(option => {
        // Set opacity and transform properties for animation
        option.style.opacity = '1';
        option.style.transform = 'translateY(-20px)';
    });
}

// Function to handle button click
function onButtonClick() {
    // Navigate to home page
    navigateToHome();
}

// Function to navigate to home page
function navigateToHome() {
    // Redirect to home.html
    window.location.href = 'home.html';
}
