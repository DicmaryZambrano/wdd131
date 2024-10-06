document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

function calculateWindChill(temp, windSpeed) {
  return (temp <= 10 && windSpeed > 4.8)
    ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2)
    : "N/A";
}

const temp = 20;
const windSpeed = 10;

document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);
