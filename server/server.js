const express = require("express")
const bodyParser = require("body-parser")
const employeeRoute = require("./route/employeeRoute")
const cors = require('cors')

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: "true" }))

app.use(express.json());

app.use("/employee",employeeRoute);


app.listen(5000, () => {
    console.log("server is running on port 5000")
})














// app.get("/", (req, res) => {

    //     res.sendFile(__dirname + "/src/index.html")
    
    // })
    
    // app.post("/", (req, res) => {
    //     const apiKey = "5f2fe347e30d18064bb2ee140a205a0a"
    //     const query = req.body.cityName
    //     const unit = "metric"
    
    //     const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&q=" + query + "&units=" + unit
    
    
    //     https.get(url, (response) => {
    
    //         console.log(response)
    //         console.log(response.statusCode)
    //         response.on("data", function (data) {
    //             console.log(JSON.parse(data))
    //             const weatherData = JSON.parse(data)
    
    //             const description = weatherData.weather[0].description;
    //             const temp = weatherData.main.temp;
    //             const icon = weatherData.weather[0].icon;
    //             res.write("<p>the Desctiption of a temprature today is " + description + "</p>")
    //             res.write("<h1>Todays temprature in "+ query +" is " + temp + "</h1>")
    //             res.write("<img src=" + "http://openweathermap.org/img/wn/" + icon + "@2x.png>")
    //             res.send()
    //         })
    //     })
    // })
    
    