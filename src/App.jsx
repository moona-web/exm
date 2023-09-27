
import React, { useState } from 'react'
import './index.css'


// function App() {

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=15926baf1ced1ccf10628c3763ac0148`

//    useEffect(() => {
//     fetch(url)
//       .then(res => res.json())
//       .then(myData => {
//         console.log(myData);
//       })
//   }, [])



//   return (
//     <div className="container bg-gradient-to-r from-indigo-950 flex flex-col items-center m-auto h-[100vh]  to-100%">
//       <div className="search">
//         <input type="text" className="border bg-gradient-to-r from-sky-900 to-100% h-[40px] ps-4 w-[250px] text-lg mt-10 rounded-[20px] bg-slate-800" placeholder="Enter Location" />
//       </div>

//       <div className="city w-full ps-10 mt-20">
//         <h3>City Name</h3>
//       </div>
//       <div className="wheather-setuation flex justify-between w-[100%] ps-10 pe-10 text-white">
//         <p className="city-temp text-[30px] font-bold">30 <sup>o</sup> F</p>
//         <p className="sky-setuation text-black transform rotate-90">clear</p>
//       </div>
//       <div className='border flex w-[90%] mt-[350px]'>
//         <div className='border w-[30%] text-center'>
//           <p>30 <sup>o</sup>F</p>
//           <p className='capitalize'>feels like</p>

//         </div>

//         <div className='border w-[30%] text-center'>
//           <p>72%</p>
//           <p className='capitalize' >humidity</p>
//         </div>

//         <div className='border w-[30%] text-center'>
//           <p className='uppercase'>2 mph</p>
//           <p className='capitalize'>winds</p>
//         </div>

//       </div>
//     </div >

//   )
// }


function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=15926baf1ced1ccf10628c3763ac0148`

  const searchLocation = (event) => {

    if (event.key === 'Enter') {
      fetch(url)
      .then(res => res.json())
      .then(myData =>{
        setData({...myData})
      })
      // axios.get(url).then((response) => {
      //   setData(response.data)
      //   console.log(response.data);

      // })
      
      setLocation('')
    }
  }


  return (
    <div className="app">

      <div className="search">
        <input type="text" value={location} onKeyPress={searchLocation} onChange={(e) => setLocation(e.target.value)} placeholder="Enter Location" />

      </div>

      <div className="container ">
        <div className="top">

          <div className="location">
            <p className='capitalize'>{data.name}</p>
          </div>

          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}  <sup className='uppercase'>o</sup>
              f</h1> : null}

          </div>

          <div className="discription">
            {data.weather ? <p className='capitalize'>{data.weather[0].main} </p> : null}

          </div>

        </div>

        {data.name != undefined &&

          <div className="bottom">

            <div className="feels">

              {data.main ? <p className='bold'> {data.main.feels_like.toFixed()} <sup className='uppercase'>0</sup> f </p> : null}

              <p className='capitalize'>feels likes</p>
            </div>

            <div className="humidity">

              {data.main ? <p className='bold'> {data.main.humidity} % </p> : null}

              <p className='capitalize'>humidity</p>

            </div>

            <div className="wind">

              {data.wind ? <p className='uppercase bold'>{data.wind.speed.toFixed()} mph</p> : null}


              <p className='capitalize'>wind speed</p>
            </div>

          </div>

        }

      </div>
    </div>

  )
}
export default App
