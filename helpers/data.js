let TopHotels = [{
    availableFrom: new Date("2020-01-10"),
    availableFromTo: new Date("2020-3-10"),
    city: "cairo",
    hotelName: "siva",
    rate: 1,
    fare: 8,
    amenities: ["aa", "aa", "aa", "aa", "aa", "aa"]
}, {
    availableFrom: new Date("2019-11-8"),
    availableFromTo: new Date("2019-11-18"),
    city: "cairo1",
    hotelName: "siva",
    rate: 5,
    fare: 8,
    amenities: ["aa", "aa", "aa", "aa", "aa", "aa"]
}, {
    availableFrom: new Date("2019-11-20"),
    availableFromTo: new Date("2019-11-31"),
    city: "cairo1",
    hotelName: "siva",
    rate: 5,
    fare: 8,
    amenities: ["aa", "aa", "aa", "aa", "aa", "aa"]
}];


let bestHotels = [{
    availableFrom: new Date("2019-11-20"),
    availableFromTo: new Date("2019-12-10"),
    city: "cairo",
    hotelName: "siva",
    rate: 5,
    fare: 8,
    amenities: "aa,aa,aa,aa,aa,aa"
}, {
    availableFrom: new Date("2019-12-7"),
    availableFromTo: new Date("2019-12-19"),
    city: "cairo1",
    hotelName: "siva",
    rate: 5,
    fare: 8,
    amenities: "aa,aa,aa,aa,aa,aa"
}, {
    availableFrom: new Date("2019-11-01"),
    availableFromTo: new Date("2019-11-31"),
    city: "cairo1",
    hotelName: "siva",
    rate: 5,
    fare: 8,
    amenities: "aa,aa,aa,aa,aa,aa"
}, {
    availableFrom: new Date("2019-11-15"),
    availableFromTo: new Date("2019-12-10"),
    city: "cairo1",
    hotelName: "siva",
    rate: 5,
    fare: 8,
    amenities: "aa,aa,aa,aa,aa,aa"
}, {
    availableFrom: new Date("2019-12-15"),
    availableFromTo: new Date("2019-12-31"),
    city: "cairo",
    hotelName: "siva",
    rate: 5,
    fare: 8,
    amenities: "aa,aa,aa,aa,aa,aa"
}, {
    availableFrom: new Date("2019-12-01"),
    availableFromTo: new Date("2020-01-10"),
    city: "cairo",
    hotelName: "siva",
    rate: 5,
    fare: 2,
    amenities: "aa,aa,aa,aa,aa,aa"
}, {
    availableFrom: new Date("2020-01-10"),
    availableFromTo: new Date("2020-3-10"),
    city: "cairo",
    hotelName: "siva",
    rate: 5,
    fare: 2,
    amenities: "aa,aa,aa,aa,aa,aa"
}, {
    availableFrom: new Date("2020-01-10"),
    availableFromTo: new Date("2020-3-10"),
    city: "cairo",
    hotelName: "siva",
    rate: 5,
    fare: 2,
    amenities: "aa,aa,aa,aa,aa,aa"
}, {
    availableFrom: new Date("2020-01-10"),
    availableFromTo: new Date("2020-3-10"),
    city: "cairo",
    hotelName: "siva",
    rate: 5,
    fare: 6,
    amenities: "aa,aa,aa,aa,aa,aa"
}, {
    availableFrom: new Date("2020-01-10"),
    availableFromTo: new Date("2020-3-10"),
    city: "cairo",
    hotelName: "siva",
    rate: 5,
    fare: 1,
    amenities: "aa,aa,aa,aa,aa,aa"
}];
let providers = { bestHotels, TopHotels };
module.exports = {providers} ;