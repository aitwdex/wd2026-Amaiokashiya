// 天気を取得して表示する非同期関数
export async function getWeather() {
  // 名古屋の現在の天気を取得するURL
  const url = "https://api.open-meteo.com/v1/forecast?latitude=35.18&longitude=136.91&current_weather=true&timezone=Asia%2FTokyo";
  // ① URLにデータをお願いする（返事を待つ）
  const response = await fetch(url);
  // ② 返ってきたデータをJSONとして取り出す（これも待つ）
  const data = await response.json();
  console.log(data);
  // ③ JSONを返す
  return data;
}
//天気を表示する関数
export function showWeather(data){
    document.getElementById("weather").innerText=codeToText(data.weathercode);
    document.getElementById("temp").innerText=data.temperature+"°C";document.getElementById("wind").innerText=data.windspeed+"km/h";
    document.getElementById("weatherData").style.display="block";
}
//天気コードを文字に変換する関数
export function codeToText(code) {
  if (code === 0) return "快晴 ☀️";
  if (code <= 3) return "晴れ〜曇り ⛅";
  if (code <= 48) return "霧 🌫️";
  if (code <= 67) return "雨 🌧️";
  if (code <= 77) return "雪 ❄️";
  if (code <= 82) return "にわか雨 🌦️";
  return "雷雨 ⛈️";
}