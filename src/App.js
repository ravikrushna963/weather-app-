import React,{useState} from 'react'

const App = () => {
  
  const [city,setCity] = useState("");
  const [result,setResult] = useState("");
  const changeHandler = e =>{
    setCity(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response=> response.json()).then(
        data => {
          const kelvin = data.main.temp;
          const celcius = kelvin - 273.15;
          setResult("Temperature at "+city+"\n"+Math.round(celcius)+"°C");
        }
      ).catch(error => console.log(error))
      setCity("");
  }

  return (
    <div>
      <center>
        <div className="">
          <div className="">
            <h2 className="pt-4 pb-1">Weather App</h2>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="city" onChange={changeHandler} value={city} placeholder='Enter your city name'/> <br /><br />
              <input className='btn btn-primary' type="submit" value="Get Temperature" />
            </form><br /> <br />
            <div>
               <h3>{result}</h3> 
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App