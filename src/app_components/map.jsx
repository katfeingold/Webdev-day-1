function Map({lon=-81.0962, lat=32.053}){
//above sets up a default lat and lon.  change this later for savannah
//by including a lat and lon down here, it removes the need for the ones below
//https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/-122.4161,37.7772,12,0/400x400?access_token=pk.eyJ1Ijoid2lsbC1icmVpdGtyZXV0eiIsImEiOiJjbDBuN3VoOXoxZG1yM2NsNDh1c2M1bzd2In0.LhXTcbHImEtQR6N7w3Dpew

    const host ="https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/"
    const zoom = "12"
    const pitch = "0"
    const size = "400x400"
    const apiKey = "pk.eyJ1Ijoid2lsbC1icmVpdGtyZXV0eiIsImEiOiJjbDBuN3VoOXoxZG1yM2NsNDh1c2M1bzd2In0.LhXTcbHImEtQR6N7w3Dpew"
   
    const url =`${host}${lon},${lat},${zoom},${pitch}/${size}?access_token=${apiKey}`;

    return (
    <img src ={url} height="300" width="400"></img>
    )
}
export default Map