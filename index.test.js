const expect = require('expect');
const { collectData, providerMutation } = require("./helpers/dataSearch")
const { providers } = require("./helpers/data")



it('should collect data from two providers', () => {
    let res = collectData(providers, "cairo", "2020-02-02", "2020-03-01");
    expect(res).toHaveLength(5);
});

it("should mutate amenities for bestHotels provider into array of strings ", () => {
    const hotel = {
        city: 'cairo',
        hotelName: 'siva',
        rate: 5,
        fare: 1,
        amenities: 'aa,aa,aa,aa,aa,aa',
        provider: 'bestHotels'
    };
    providerMutation(hotel);
    expect(hotel).toStrictEqual(
        {
            city: 'cairo',
            hotelName: 'siva',
            rate: 5,
            fare: 1,
            amenities: [
                "aa",
                "aa",
                "aa",
                "aa",
                "aa",
                "aa"
            ],
            provider: 'bestHotels'
        })

})