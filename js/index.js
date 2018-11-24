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
$("#mainBTN").click(() => {
    runWeather();
});
let cityInput = $("#weatherInput");
function runWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("enter runweather");
            let currentCity = cityInput.val();
            console.log("trying to get info");
            let info = yield Service.getWeather(currentCity);
            console.log("got info");
            console.log(info);
        }
        catch (err) {
            console.log(err);
        }
    });
}
console.log("just loading the index.js");
