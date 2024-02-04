import axios from "axios";
import { useEffect, useState } from "react";
export const useFetch = (url, name='myanmar') => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setloading] = useState(true);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`${url}/api/${name}`);

      if (response.status === 200) {
        setData(response.data);
      } else {
        throw new Error("API request Failed");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, [url,name]);
  return [data, error, loading];
};
