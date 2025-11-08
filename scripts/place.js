function calculateWindChill(tempC, windKmh) {
  if (tempC <= 10 && windKmh > 4.8) {
    const windChill = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
    return "Wind Chill: " + windChill.toFixed(1);
  } else {
    return "Wind Chill: N/A";
  }

}

document.getElementById("windchill").textContent = calculateWindChill(16, 6)
