import $ from "jquery";
import { Service } from "./services";
$("#mainBTN").click(() => {
    runWeather();
});
let cityInput = $("#weatherInput");

async function runWeather() {
    try {
        console.log("enter runweather")
        let currentCity: any = cityInput.val();
        console.log("trying to get info")
        let info: any = await Service.getWeather(currentCity);
        console.log("got info")
        console.log(info);
    }
    catch (err) {
        console.log(err);
    }
}


console.log("just loading the index.js")


