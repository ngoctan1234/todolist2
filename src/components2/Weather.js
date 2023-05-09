import { useEffect, useState } from "react"
import axios from 'axios';
export default function Weather(){
    const [data,setData]=useState(null)
    const [text,setText]=useState("Ha Noi")
    const [error,setError]=useState("")
    const getData=async()=>{
          const apikey='e0ddc538b3415427caeb7901218a30dd'
          
          const url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apikey}`
        //   fetch(url)
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(data => {
        //         setData(data)
        //         console.log(data)
        //         console.log("Meo")
        //     })
        //     .catch((error)=>{
        //         setData(null)
        //         console.log(error)
        //     })
        // }  
        axios.get(url).then(res=>{
            setData(res.data)
        }).catch((error)=>{
                    if(error.response.status=='404'){
                        setError("invalid city name")
                    }
        })
    }
    useEffect(()=>{
        getData();
    },[])
   return(
    <div >
       <input type="text" value={text} 
       onChange={(e)=>setText(e.target.value)} 
       onKeyPress={(e)=>{
        if(e.key=='Enter' && text){
            getData()
            setText("")
        }
       }

       }/>
       {
         error &&(
            <h1>{error}</h1>
        )
       }
    {
     
       
        data&&(
            <>
            <h1>Temp {data.main.temp}</h1>
            <h1>City {data.name}</h1>
            <h1>Country {data.sys.country}</h1>
            <h1>Temp {data.weather[0].description}</h1>
            <img  src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
            </>
        )
    }
    </div>
   )
}