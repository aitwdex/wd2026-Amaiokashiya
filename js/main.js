//自作モジュールのインポート
import{getWeather,showWeather}from"./rib.js";

// ボタンを押したら天気を取りに行く
document.getElementById("getBtn").addEventListener("click",async()=>{ //awaitを利用するためasync
  const data =await getWeather(); //APIを利用するためawait
  showWeather(data.current_weather);
});