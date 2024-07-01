// 
// 2. Use the `async/await` syntax to fetch vehicle manufacturers’ data from the given API endpoint. After fetching,
//  filter the results and log to the console only manufacturers whose `Country` is equal to `"UNITED STATES (USA)"`   
//  The API endpoint you should use is: [`https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2`]
//  (https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2)

async function manufacturers(endpoint) {
  try{
   const response = await fetch(endpoint)
   const data = await response.json()
   console.log(data)
   const results = data.Results
   
   console.log(results.filter((el)=>el.Country=== "UNITED STATES (USA)"))
 
  }
  catch(error){
    console.log("error",error)
  }
}
manufacturers(`https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2`)