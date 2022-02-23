import { useEffect, useState } from "react";

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const FetchData = async () => {
      setIsPending(true);

      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();

        setIsPending(false);
        setData(data);
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
    FetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
};
