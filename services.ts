import $ from "jquery";


export class Service {

    static url: string = "http://api.openweathermap.org/data/2.5/weather?q=";
    static appID: string = "be98303a003d83978bc91660581ea833";

    static getWeather = (city: string): any => {
        return new Promise((resolve: any, reject: any) => {
            $.ajax({
                method: "GET",
                dataType: "json",
                url: Service.url + city + "&appid=" + Service.appID,
                success: (response) => {
                    resolve(response);

                }, error: (error) => {
                    reject(error);
                }
            })

        })
    }
}
