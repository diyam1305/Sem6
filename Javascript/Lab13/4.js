//(4) Write a Node.js program that fetched weather information for a given city and displays it in terminal.
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');
async function getWeather() {
    let rl = readline.createInterface({ input, output });
    let city = await rl.question('Enter city name: ');
    let apiKey = "b4d41169886643e384444150252412";
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`);
    let data = await response.json();
    if(response.status !== 200){
        console.log(data.error.message);
        return;
    }
    console.log(`City: ${data.location.name}`);
    console.log(`Temperature: ${data.current.temp_c} °C`);
    console.log(`Feels Like: ${data.current.feelslike_c} °C`);
    console.log(`Condition: ${data.current.condition.text}`);
    rl.close();
}
getWeather();