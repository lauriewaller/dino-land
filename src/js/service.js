export default class DinoLand {
  static dinoParagraphs(paragraph, words) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      const url = `http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=${paragraph}&words=${words}`;
      

      console.log(url);
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
          console.log(request.response);

        } else {
          reject(request.response);
        }
      };
      console.log(request);

      request.open("GET", url, true);
      request.send();
    }); 
  }
}

//`http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=${paragraph}&words=${words}`;
// export default class WeatherService {  
//   static getWeather(city) {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(request.response);
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }