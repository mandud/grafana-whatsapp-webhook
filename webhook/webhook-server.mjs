// webhook-server.mjs
//webhook-url = http://10.10.10.10:3100
import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3027;

app.use(bodyParser.json());

const apiKey = 'your api key'; // Replace with your actual API key (outside code)

app.post('/webhook/:phoneNumber', (req, res) => {
  try {
    const jsonData = req.body;
    const textData = extractMessage(jsonData);

    // Log raw JSON data
    console.log('Raw JSON Data:', JSON.stringify(jsonData, null, 2));

    // Extract "message" content excluding "Silence," "Source," "Dashboard," and "Panel"
    const formattedText = `*WhatsApp-Webhook Message:*\n${textData}`;

    const phoneNumber = req.params.phoneNumber; // Extract phone number from URL parameter
    const apiUrl = `http://grafana-url:3000/api/sendText?phone=${phoneNumber}&text=${encodeURIComponent(formattedText)}&session=default`;

    axios.get(apiUrl, {
    headers: {
      'X-Api-Key': apiKey,
       }
     })
      .then(response => {
        console.log('Response from the API:', response.data);
        res.status(200).send('Webhook received and processed successfully');
      })
      .catch(error => {
        console.error('Error making GET request:', error.message);
        res.status(500).send('Internal Server Error');
      });
  } catch (error) {
    console.error('Error processing webhook:', error.message);
    res.status(400).send('Bad Request');
  }
});

function extractMessage(jsonData) {
  // Create a copy of the original JSON to avoid modifying the input data
  const jsonCopy = JSON.parse(JSON.stringify(jsonData));

  // Remove "Silence," "Source," "Dashboard," and "Panel" properties and their values
  ['Silence', 'Source', 'Dashboard', 'Panel'].forEach(param => {
    if (jsonCopy.message && jsonCopy.message.includes(`${param}:`)) {
      jsonCopy.message = jsonCopy.message.replace(new RegExp(`${param}:[^\n]*\n`, 'g'), '');
    }
  });

  return jsonCopy.message || 'defaultText';
}

app.listen(PORT, () => {
  console.log(`Webhook server listening on port ${PORT}`);
});
