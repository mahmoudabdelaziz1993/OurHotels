require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const {collectData,providerMutation}=  require("./helpers/dataSearch")
const {providers} = require("./helpers/data")


const app = express();
// let TopHotels = [{
//     availableFrom: new Date("2020-01-10"),
//     availableFromTo: new Date("2020-3-10"),
//     city: "cairo",
//     hotelName: "siva",
//     rate: 1,
//     fare: 8,
//     amenities: ["aa", "aa", "aa", "aa", "aa", "aa"]
// }, {
//     availableFrom: new Date("2019-11-8"),
//     availableFromTo: new Date("2019-11-18"),
//     city: "cairo1",
//     hotelName: "siva",
//     rate: 5,
//     fare: 8,
//     amenities: ["aa", "aa", "aa", "aa", "aa", "aa"]
// }, {
//     availableFrom: new Date("2019-11-20"),
//     availableFromTo: new Date("2019-11-31"),
//     city: "cairo1",
//     hotelName: "siva",
//     rate: 5,
//     fare: 8,
//     amenities: ["aa", "aa", "aa", "aa", "aa", "aa"]
// }];


// let bestHotels = [{
//     availableFrom: new Date("2019-11-20"),
//     availableFromTo: new Date("2019-12-10"),
//     city: "cairo",
//     hotelName: "siva",
//     rate: 5,
//     fare: 8,
//     amenities: "aa,aa,aa,aa,aa,aa"
// }, {
//     availableFrom: new Date("2019-12-7"),
//     availableFromTo: new Date("2019-12-19"),
//     city: "cairo1",
//     hotelName: "siva",
//     rate: 5,
//     fare: 8,
//     amenities: "aa,aa,aa,aa,aa,aa"
// }, {
//     availableFrom: new Date("2019-11-01"),
//     availableFromTo: new Date("2019-11-31"),
//     city: "cairo1",
//     hotelName: "siva",
//     rate: 5,
//     fare: 8,
//     amenities: "aa,aa,aa,aa,aa,aa"
// }, {
//     availableFrom: new Date("2019-11-15"),
//     availableFromTo: new Date("2019-12-10"),
//     city: "cairo1",
//     hotelName: "siva",
//     rate: 5,
//     fare: 8,
//     amenities: "aa,aa,aa,aa,aa,aa"
// }, {
//     availableFrom: new Date("2019-12-15"),
//     availableFromTo: new Date("2019-12-31"),
//     city: "cairo",
//     hotelName: "siva",
//     rate: 5,
//     fare: 8,
//     amenities: "aa,aa,aa,aa,aa,aa"
// }, {
//     availableFrom: new Date("2019-12-01"),
//     availableFromTo: new Date("2020-01-10"),
//     city: "cairo",
//     hotelName: "siva",
//     rate: 5,
//     fare: 2,
//     amenities: "aa,aa,aa,aa,aa,aa"
// }, {
//     availableFrom: new Date("2020-01-10"),
//     availableFromTo: new Date("2020-3-10"),
//     city: "cairo",
//     hotelName: "siva",
//     rate: 5,
//     fare: 2,
//     amenities: "aa,aa,aa,aa,aa,aa"
// }, {
//     availableFrom: new Date("2020-01-10"),
//     availableFromTo: new Date("2020-3-10"),
//     city: "cairo",
//     hotelName: "siva",
//     rate: 5,
//     fare: 2,
//     amenities: "aa,aa,aa,aa,aa,aa"
// }, {
//     availableFrom: new Date("2020-01-10"),
//     availableFromTo: new Date("2020-3-10"),
//     city: "cairo",
//     hotelName: "siva",
//     rate: 5,
//     fare: 6,
//     amenities: "aa,aa,aa,aa,aa,aa"
// }, {
//     availableFrom: new Date("2020-01-10"),
//     availableFromTo: new Date("2020-3-10"),
//     city: "cairo",
//     hotelName: "siva",
//     rate: 5,
//     fare: 1,
//     amenities: "aa,aa,aa,aa,aa,aa"
// }];
// let providers = { bestHotels, TopHotels };
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// validator for search body 
let searchReqBody = [
    check("fromDate", " date must be yyyy-mm-dd ").isISO8601('yyyy-mm-dd'),
    check("toDate", " date must be yyyy-mm-dd ").isISO8601('yyyy-mm-dd'),
    check('city', "plz enter a ci").not().isEmpty(),
    check('adult_number', 'require to enter number of adult going ').not().isEmpty()
]
// main route for Search Hotels 
app.post("/", searchReqBody, (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array().map(err => {
                let { param, msg } = err
                return { Field: param, msg }
            })
        });
    }
    let { fromDate, toDate, city, adult_number } = req.body
    let data = collectData(providers, city, fromDate, toDate);
    let cleanSortedData =
        data.sort(function (a, b) { return a.rate - b.rate })
            .map(hotel => {
                let { provider, hotelName, fare, amenities } = hotel
                return { provider, hotelName, fare, amenities }
            })
    if (cleanSortedData.length < 1 || cleanSortedData == undefined) {
        res.sendStatus(204);
    } else {
        res.status(200).send({ cleanSortedData });
    }
});


// /**
//  * 
//  * @param {*} providersObj 
//  * @param {*} city 
//  * @description collect data from providers 
//  */
// function collectData(providersObj, city, fromDate, toDate) {
//     let x = [];
//     /* Iterate over the provider object with Key 
//     to add the provider for the result */
//     for (let key in providersObj) {
//         let y = providersObj[key].map(hRes => {
//             if (
//                 hRes.city == city &&
//                 hRes.availableFrom <= new Date(fromDate) &&
//                 hRes.availableFromTo >= new Date(toDate)
//             ) {
//                 hRes.provider = key;
//                 providerMutation(hRes);
//                 return hRes;
//             }
//         })
//         x.push(...y);
//     }
//     let filteredHotels = x.filter(Boolean);
//     return filteredHotels;
// };




// /**
//  * @description mutate the hole result according to its provider set options 
//  * @param {*} hotel 
//  */
// function providerMutation(hotel) {
//     if (hotel.provider == "bestHotels") {
//         let x = hotel.amenities.toString();
//         hotel.amenities = x.split(",");
//     }
// };



app.listen(process.env.PORT,
    () =>
        console.log(`server Starts on  http://localhost:${process.env.PORT}/  Ctrl + Click to follow`
        ));