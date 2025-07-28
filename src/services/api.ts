import { Medal } from "@/utils/types";

export const fetchMedals = async (): Promise<Medal[]> => {
  try {
    // simulate API call with small delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const response = await fetch("/medals.json");

    if (!response.ok) {
      throw new Error("Failed to fetch medal data");
    }

    const data = await response.json();

    // add total count
    return data.map((medal: Medal) => ({
      ...medal,
      total: medal.gold + medal.silver + medal.bronze,
    }));
  } catch (error) {
    console.error("Error fetching medals:", error);
    throw new Error("Unable to load medal data. Please try again later.");
  }
};
