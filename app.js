const axios = require('axios');

async function getFlightPrices(source, destination, date) {
  try {
    const apiKey = 'YOUR_SKYSCANNER_API_KEY';
    const url = `https://partners.api.skyscanner.net/apiservices/browseroutes/v1.0/US/USD/en-US/${source}-sky/${destination}-sky/${date}?apiKey=${apiKey}`;

    const response = await axios.get(url);
    const data = response.data;

    if (data.Quotes.length === 0) {
      console.log('No flight prices found for the given details.');
      return;
    }

    const flightPrices = {};

    for (const quote of data.Quotes) {
      const carrierId = quote.OutboundLeg.CarrierIds[0];
      const carrier = data.Carriers.find(c => c.CarrierId === carrierId);
      const airlineName = carrier.Name;
      const price = `₹${quote.MinPrice}`;

      flightPrices[airlineName] = price;
    }

    console.log(flightPrices);
  } catch (error) {
    console.error('An error occurred while fetching flight prices:', error.message);
  }
}

// Example usage
const source = 'Delhi';
const destination = 'Jaipur';
const date = '2023-04-15';

getFlightPrices(source, destination, date);
