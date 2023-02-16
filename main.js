//API Key: 3c00223405e840d88f8605fcd8f54b7c
//Site: https://app.ipgeolocation.io/

let API_KEY = "3c00223405e840d88f8605fcd8f54b7c";
// let IP_ADDRESS = "80.189.135.146";

async function getLocation() {
    const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`);
    let location = await response.json();
    console.log(location);
};

getLocation();

async function getComputerDetails() {
    const response = await fetch(`https://api.ipgeolocation.io/user-agent?apiKey=${API_KEY}`);
    let computerDetails = await response.json();
    console.log(computerDetails);

};

getComputerDetails();

async function getAstronomicalInfo () {
    const response = await fetch (`https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY}`);
    let astronomicalInfo = await response.json();
    console.log(astronomicalInfo);
}

getAstronomicalInfo();
