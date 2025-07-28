import { useState, useEffect } from "react";
import { Medal } from "@/utils/types";
import { fetchMedals } from "@/services/api";

export const useMedalData = () => {
  const [medals, setMedals] = useState<Medal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMedals = async () => {
      try {
        setLoading(true);
        const data = await fetchMedals();
        setMedals(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setMedals([]);
      } finally {
        setLoading(false);
      }
    };

    loadMedals();
  }, []);

  return { medals, loading, error };
};
