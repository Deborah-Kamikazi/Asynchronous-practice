// https://restcountries.com/v3.1/name/{countryName}
// https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true

async function searching(countryName){
try{
  const p1 = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  const data1 = await p1.json()
  const capital = await data1[0]['capital'][0]
  const lat = await  data1[0]['latlng'][0]
  const lon = await data1[0]['latlng'][1]
  const p2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
  const data2 = await p2.json()
  const final = await Promise.all([data1,data2])
  const temp = await final[1].current_weather.temperature
 console.log(
    `country:${countryName}
     capital:${capital}
     Current Temperature:${temp}`
   
 )


}
catch(error){
    console.log("error",error)
}
}
searching('rwanda')
