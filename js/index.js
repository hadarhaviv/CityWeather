var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import $ from "jquery";
import { Service } from "./services";
let cityInput = $("#weatherInput");
$("#mainBTN").click(() => {
    getCityInfo();
});
const CreateCard = (info) => {
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
};
function getCityInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let currentCity = cityInput.val();
            let info = yield Service.getWeather(currentCity);
            let tempArray = [info["main"]["temp_min"], info["main"]["temp_max"]];
            let sum = tempArray.reduce((previous, current) => current += previous);
            let avg = sum / tempArray.length;
            info.avg = avg;
            let currentCard = CreateCard(info);
            $("#cardsContainer").append(currentCard);
        }
        catch (err) {
            console.log(err);
        }
    });
}
