async function getTravelPrice(city1, city2) {
    function toRad(x) {
        return x * Math.PI / 180;
    }

    const c1 = await getCoordinatesFromAddress(city1)
    const c2 = await getCoordinatesFromAddress(city2)
    const lat1 = c1.lat
    const lat2 = c2.lat
    const lng1 = c1.lng
    const lng2 = c2.lng
    const R = 6371; // km
    const x1 = lat2 - lat1;
    const dLat = toRad(x1);
    const x2 = lng2 - lng1;
    const dLon = toRad(x2)
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c / 200 * 189;
}

async function getCoordinatesFromAddress(address) {
    const coordinates = await fetch("https://api-adresse.data.gouv.fr/search?" + new URLSearchParams({
        q: address,
        limit: "1"
    })).then(res => res.json()).then(data => data.features[0].geometry.coordinates)

    return {lat: coordinates[1], lng: coordinates[0]}

}

async function getMyConsole () {
    const result = await getTravelPrice("Paris", "Deauville")
    console.log(`votre tarif est de ${result.toFixed(2)}`) //164.86
}

function submitForm () {
    document.getElementById('add--play').addEventListener('click', function(event){
        event.preventDefault()
        // event.target.value
        // je recup les valeurs des inputs (input1 = ville aller, inputs2 = ville retour)

        // const result = await getTravelPrice(input1, input2)

        // écouter la checkbox et multiplier le tarif par 2 si checked
        // revoyer le prix à l'utilisateur
        // document.getElementById("tarif").textContent = result;

        // ...
    });
}