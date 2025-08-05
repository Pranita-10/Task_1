// This line ensures the JavaScript code runs only after the entire HTML document is loaded.
document.addEventListener('DOMContentLoaded', function() {

    // 1. Get a reference to the button element using its ID
    // The ID 'myInteractiveButton' must match the ID in your index.html file.
    const myButton = document.getElementById('myInteractiveButton');

    // 2. Check if the button element was successfully found on the page
    if (myButton) {
        // 3. Add an event listener to the button
        // This tells the browser: "When a 'click' event happens on 'myButton',
        // execute the function that follows."
        myButton.addEventListener('click', function() {
            // This is the action that occurs when the button is clicked.
            alert('Hello! You clicked the interactive button!');
            console.log('Button was clicked and an alert was shown!'); // Also log to console for debugging
        });
    } else {
        // If the button is not found (e.g., ID mismatch in HTML/JS), log an error.
        console.error("Error: Button with ID 'myInteractiveButton' not found in the HTML!");
    }
});