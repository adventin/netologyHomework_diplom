import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(url, options);

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();
        setResponse(data);
        setError(null);
      } catch (err) {
        console.log(err.message)
        setError(err.message);
      }
      
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading, options, url]);

  return [{ response, error, isLoading }, doFetch];
};
