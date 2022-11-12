import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();

    setData(null);
    setIsPending(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Could not fetch the data.");
        }
        const result = await response.json();
        setData(result.results);
        setIsPending(false);
        setError(null);
      } catch {
        setIsPending(false);
        if (error.name === "AbortError") {
          console.log(error.message);
          setError(error.message);
        } else {
          setError(error.message);
        }
      }
    };
    fetchData();
    return () => controller.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
