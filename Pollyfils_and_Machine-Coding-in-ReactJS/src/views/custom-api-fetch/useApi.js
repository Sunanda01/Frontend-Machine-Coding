import { useCallback, useEffect, useState } from "react";

const useApi = (url, options = {}) => {
  const { method = "GET", headers = {}, body = null, manual = false } = options;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        ...(body ? { body: JSON.stringify(body) } : {}),
      });
      if (!res.ok) throw new Error(`HTTP Error! status: ${res.status}`);
      const result = await res.json();
      setData(result);
    } catch (error) {
      setError(error.message || "Something Went Wrong");
    } finally {
      setLoading(false);
    }
  }, [url, method, JSON.stringify(headers), JSON.stringify(body)]);

  useEffect(() => {
    if (!manual) {
      console.log("Refetched");
      fetchData();
    }
  }, [fetchData, manual]);

  return { data, error, loading, refetch: fetchData };
};
export default useApi;
