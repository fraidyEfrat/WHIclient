const axios = require('axios'); // נצטרך להתקין את הספריה axios, ניתן להתקין עם npm install axios

async function getTimeZoneInfo(latitude, longitude, apiKey) {
  try {
    // שליפת מידע על נקודת המפה באמצעות Geocoding
    const geoResponse = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`);
    
    // בדיקה שהבקשה בוצעה בהצלחה
    if (geoResponse.data.status === 'OK') {
      // שליפת מידע על TimeZone מתוך התוצאות
      const addressComponents = geoResponse.data.results[0].address_components;
      const timeZoneId = addressComponents.find(component => component.types.includes('time_zone'))?.short_name;

      if (timeZoneId) {
        // שליפת מידע נוסף על TimeZone
        const timeZoneResponse = await axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=${Math.floor(Date.now() / 1000)}&key=${apiKey}`);

        // בדיקה שהבקשה בוצעה בהצלחה
        if (timeZoneResponse.data.status === 'OK') {
          const timeZoneInfo = timeZoneResponse.data;
          console.log('TimeZone Information:', timeZoneInfo);
        } else {
          console.error('Error retrieving TimeZone information:', timeZoneResponse.data.status);
        }
      } else {
        console.error('Error: TimeZone information not found in Geocoding response');
      }
    } else {
      console.error('Error retrieving Geocoding information:', geoResponse.data.status);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// קלוט קואורדינטות גאוגרפיות ומפתח API של Google Maps
const latitude = 37.7749;
const longitude = -122.4194;
const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

// הפעלת הפונקציה
getTimeZoneInfo(latitude, longitude, apiKey);
