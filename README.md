# AegisCovenant_Assignment

To retrieve flight prices between two cities using Node.js, you can make use of various flight search APIs or web scraping techniques. In this example, let's assume we'll use the Skyscanner API to fetch flight prices.

Before you begin, make sure you have an API key from Skyscanner. If you don't have one, you can sign up on their website and obtain the key. Once you have the API key, you can proceed with the following Node.js script

Make sure to replace 'YOUR_SKYSCANNER_API_KEY' with your actual API key from Skyscanner. The script uses the Axios library to make an HTTP GET request to the Skyscanner API endpoint. It then parses the response to extract the relevant flight prices and stores them in a JavaScript object (flightPrices).

Please note that the script uses the ISO 8601 date format for the date parameter (YYYY-MM-DD). Adjust the date format as required based on the API's specifications.

When you run the script, it will fetch the flight prices for the given source, destination, and date combination and display them in the console.

Remember to install the required dependencies by running npm install axios before executing the script.
