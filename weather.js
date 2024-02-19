
// Call the geo function and pass the use function as an argument

var today = new Date();
var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var formattedDate =
  year +
  "-" +
  (month < 10 ? "0" : "") +
  month +
  "-" +
  (day < 10 ? "0" : "") +
  day;
// console.log("Today's date is: " + formattedDate);
date.innerHTML = formattedDate;

const check = async () => {
    weather.style.display = "block"
    card.style.height = "420px";
    card2.style.display = "block";
    let apiKey = "266d1f090d27cccaba37efae4a9ce246";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.name.common}&appid=${apiKey}`;
    let response = await fetch(url);
    let convertedResponse = await response.json();
    // console.log(convertedResponse.name);
    // console.log(convertedResponse);
    Humidity.innerHTML =
      convertedResponse.main.humidity +
      "" +
      ` <img width="16" height="16" src="https://img.icons8.com/ios-filled/50/wet.png" alt="wet"/>`;
    pressure.innerHTML =
      convertedResponse.main.pressure +
      `  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="boat"><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M7.992 1a.5.5 0 0 0-.492.508V2a.5.5 0 0 0 0 1v1.049a3.957 3.957 0 0 0-1.94.805l-.74-.739.004-.004a.5.5 0 0 0-.363-.857.5.5 0 0 0-.344.15l-.004.004-.351-.351a.5.5 0 0 0-.358-.153.5.5 0 0 0-.35.86l.352.351a.5.5 0 1 0 .707.707l.74.739A3.958 3.958 0 0 0 4.052 7.5H3.008a.5.5 0 0 0-.508-.506.5.5 0 0 0-.492.506h-.5a.5.5 0 1 0 0 1h.5a.5.5 0 1 0 1 0H4.05c.092.726.376 1.386.804 1.938l-.742.742a.5.5 0 0 0-.353-.149.5.5 0 0 0-.354.856l-.351.351a.5.5 0 1 0 .707.707l.351-.351.004.004a.5.5 0 1 0 .707-.707l-.004-.004.74-.74c.552.428 1.214.71 1.94.802V13a.5.5 0 0 0 0 1v.494a.5.5 0 1 0 1 0V14h.008a.5.5 0 1 0 0-1H8.5v-1.05a3.958 3.958 0 0 0 1.94-.804l.748.749a.5.5 0 1 0 .705.705l.345.345a.5.5 0 1 0 .707-.707l-.343-.343.002-.004a.5.5 0 0 0-.364-.86.5.5 0 0 0-.344.153l-.001.004-.75-.75a3.955 3.955 0 0 0 .804-1.938h1.059a.5.5 0 1 0 1 0h.484a.5.5 0 1 0 0-1h-.484a.5.5 0 0 0-.508-.506.5.5 0 0 0-.492.506h-1.059a3.958 3.958 0 0 0-.803-1.94l.747-.746.003.004a.5.5 0 1 0 .708-.707l-.004-.004.345-.343a.5.5 0 0 0-.363-.86.5.5 0 0 0-.344.153l-.345.343a.5.5 0 0 0-.356-.146.5.5 0 0 0-.351.853l-.747.747A3.957 3.957 0 0 0 8.5 4.049V3h.008a.5.5 0 1 0 0-1H8.5v-.492A.5.5 0 0 0 7.992 1zM7.5 5.05v1.022A2.005 2.005 0 0 0 6.072 7.5H5.051A2.977 2.977 0 0 1 7.5 5.05zm1 0a2.977 2.977 0 0 1 2.45 2.45H9.927A2.005 2.005 0 0 0 8.5 6.072V5.051zm-.516 1.956a.5.5 0 0 0 .032 0c.539.008.961.428.978.965a.5.5 0 0 0 0 .06.986.986 0 0 1-.965.963.5.5 0 0 0-.037 0 .5.5 0 0 0-.017 0 .986.986 0 0 1-.97-.963.5.5 0 0 0 0-.062.987.987 0 0 1 .98-.963zM5.051 8.5h1.021A2.005 2.005 0 0 0 7.5 9.926v1.023A2.978 2.978 0 0 1 5.05 8.5zm4.877 0h1.021A2.978 2.978 0 0 1 8.5 10.95V9.925A2.005 2.005 0 0 0 9.928 8.5z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible"></path></svg>`;
    cityName.innerHTML = convertedResponse.name;
    speed.innerHTML =
      convertedResponse.wind.speed +
      "" +
      `  <i class="fa-solid fa-wind" style="color: #000000;"></i>`;
    last.innerHTML =
      convertedResponse.wind.deg +
      `  <i class="fa-solid fa-temperature-three-quarters"></i>`;

    // console.log(convertedResponse.weather);
    // console.log(convertedResponse.main.temp);
    temp.innerHTML = (convertedResponse.main.temp - 273).toFixed(0) + "℃";
    for (let index = 0; index < convertedResponse.weather.length; index++) {
      const element = convertedResponse.weather[index];
      // console.log(element);
      deg.innerHTML = `<div class="temp-scale"> 
                        ${convertedResponse.weather[index].main}
                        </div>`;
    }
  }
