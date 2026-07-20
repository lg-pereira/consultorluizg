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
    let responseCity = await fetch(`https://ipapi.co/${ip}/city/`);
    let city = await responseCity.text();
    let responseRegion = await fetch(`https://ipapi.co/${ip}/region/`);
    let region = await responseRegion.text();
    data = [city, region];
  } catch (error) {
    console.error("Erro ao buscar endereço:", error);
    return null;
  }

  return data;
}
