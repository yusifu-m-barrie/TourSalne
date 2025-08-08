import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "";
const normalize = (u) => {
  if (/^https?:\/\//i.test(u)) return u;
  // Prepend /api if calling resource directly (e.g., /hotels, /rooms, etc.)
  if (u.startsWith("/api/")) return API_BASE + u;
  if (u.startsWith("/hotels") || u.startsWith("/rooms") || u.startsWith("/auth") || u.startsWith("/users")) {
    return API_BASE + "/api" + u;
  }
  return API_BASE + u;
};

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(normalize(url));
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(normalize(url));
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;