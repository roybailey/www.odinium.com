document.getElementById('fetchButton').addEventListener('click', fetchData);

function fetchData() {
    // The URL of the API endpoint
    const apiUrl = 'https://api.example.com/data';

    // Make the API call using fetch
    fetch(apiUrl)
        .then(response => {
            // Check if the response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Handle the data (success case)
            console.log('Success:', data);
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            // Handle any errors (network or other)
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('output').textContent = 'Error: ' + error.message;
        });
}
