 /**
 * 
 * @param {*} providersObj 
 * @param {*} city 
 * @description collect data from providers 
 */
module.exports.collectData=(providersObj, city, fromDate, toDate) =>{
    let x = [];
    /* Iterate over the provider object with Key 
    to add the provider for the result */
    for (let key in providersObj) {
        let y = providersObj[key].map(hRes => {
            if (
                hRes.city == city &&
                hRes.availableFrom <= new Date(fromDate) &&
                hRes.availableFromTo >= new Date(toDate)
            ) {
                hRes.provider = key;
                this.providerMutation(hRes);
                return hRes;
            }
        })
        x.push(...y);
    }
    let filteredHotels = x.filter(Boolean);
    return filteredHotels;
};

/**
 * @description mutate the hole result according to its provider set options 
 * @param {*} hotel 
 */
module.exports.providerMutation=(hotel)=> {
    if (hotel.provider == "bestHotels") {
        let x = hotel.amenities.toString();
        hotel.amenities = x.split(",");
    }
};


