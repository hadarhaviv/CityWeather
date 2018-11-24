import $ from "jquery";
export class Service {
}
Service.url = "http://api.openweathermap.org/data/2.5/weather?q=";
Service.appID = "be98303a003d83978bc91660581ea833";
Service.getWeather = (city) => {
    console.log("before ajax");
    return new Promise((resolve, reject) => {
        $.ajax({
            method: "GET",
            dataType: "json",
            url: Service.url + city + "&appid=" + Service.appID,
            success: (response) => {
                console.log("after ajax");
                resolve(response);
            }, error: (error) => {
                reject(error);
            }
        });
    });
};
