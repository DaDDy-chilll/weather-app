import axios from "axios";
import { useEffect, useState } from "react";
export   const useFetch =  (url) => {
    const [data,setData] = useState()
    const [name,setName] = useState();
    const fetchWeather = async () => {
        const response = await axios.get(`${url}/${name}`);
        setData(response.data)
        console.log(data);
    }
    useEffect(()=>{
        fetchWeather()
    },[])
    return [data,setName];
}