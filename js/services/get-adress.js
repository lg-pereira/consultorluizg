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
    let response = await fetch(`https://api.ipapi.is?q=${ip}`);
    let database = await response.json();
    let city = database.location.city;
    let state = database.location.state;
    data = [city, state];
  } catch (error) {
    console.error("Erro ao buscar endereço:", error);
    return null;
  }

  return data;
}
