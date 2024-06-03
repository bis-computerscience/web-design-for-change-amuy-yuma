// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Create the div element with the formsappId attribute
    const formDiv = document.createElement('div');
    formDiv.setAttribute('formsappId', '665cc96ef6f2e115a2c74ebf');

    // Append the div element to the body or a specific container
    document.body.appendChild(formDiv);

    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://forms.app/static/embed.js';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;

    // Set up the onload event to initialize the formsapp after the script is loaded
    script.onload = function() {
        new formsapp('665cc96ef6f2e115a2c74ebf', 'standard', {
            width: '100vw',
            height: '600px'
        });
    };

    // Append the script element to the body
    document.body.appendChild(script);
});
