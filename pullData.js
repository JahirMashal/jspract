// Problem 12
// Write a javascript function to pull data from the url https://api.ipify.org/?format=json
// The returned Json will have a key named 'ip'. Return the value of that key
// NOTE: Use the requests library

async function getMyIp() {
    try {
      const response = await fetch('https://api.ipify.org/?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Error fetching IP:', error);
      return null;
    }
  }
  
  getMyIp().then(ip => console.log(ip));
  
