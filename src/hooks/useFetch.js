import { useEffect, useState } from "react";

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setIsPending(true);

      try {
        const response = await fetch(url, {
          signal: controller.signal,
          method: "GET",
          headers: {
            "x-rapidapi-host": "booking-com.p.rapidapi.com",
            "x-rapidapi-key":
              "a2bab0e7f1mshba65b16d9bca6a4p1fb290jsncdb7eb0d8f34",
          },
        });
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();

        setIsPending(false);
        // I had to take the data and move to the data that I needed which is in the result object and the just take 3 of the hotels to display.
        const hotels = data.result.slice(0, 3);
        setData(hotels);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
};
