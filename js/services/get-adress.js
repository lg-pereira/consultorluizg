export async function getAdressByIP() {
  let ip = null;
  let data = [];

  try {
    let responseIp = await fetch("https://api.ipify.org?format=json");
    let dataIp = await responseIp.json();
    ip = dataIp.ip;
  } catch (error) {
    console.error("Erro ao buscar IP:", error);
  }

  if (!ip) return;

  try {
    let responseCity = await fetch(`https://ip-api.com/json/${ip}?fields=city`);
    let city = await responseCity.json();
    city = city.city;
    let responseRegion = await fetch(
      `https://ip-api.com/json/${ip}?fields=regionName`,
    );
    let region = await responseRegion.json();
    region = region.regionName;
    data = [city, region];
  } catch (error) {
    console.error("Erro ao buscar endereço:", error);
    return null;
  }

  return data;
}
