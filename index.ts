import $ from "jquery";
import { Service } from "./services";

let cityInput = $("#weatherInput");

$("#mainBTN").click(() => {
    getCityInfo();
});

const CreateCard = (info: any) => {
    let card = `<div class="card ml-3" style="width: 10rem;">
    <img class="card-img-top" src="http://openweathermap.org/img/w/${info["weather"][0]["icon"]}.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${info["sys"]["country"]}</h5>
      <h5 class="card-title">${info["name"]}</h5>
      <p class="card-text">${info["weather"][0]["description"]}</p>
      <p class="card-text">Average Temp ${info.avg}</p>
    </div>
  </div>`;


    return card;
}



async function getCityInfo() {
    try {
        let currentCity: any = cityInput.val();
        let info: any = await Service.getWeather(currentCity);
        let tempArray: number[] = [info["main"]["temp_min"], info["main"]["temp_max"]]
        let sum: number = tempArray.reduce((previous, current) => current += previous);
        let avg: number = sum / tempArray.length;
        info.avg = avg;
        let currentCard: any = CreateCard(info)
        $("#cardsContainer").append(currentCard);
    }
    catch (err) {
        console.log(err);
    }
}





