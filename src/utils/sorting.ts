import { Medal, SortType } from "./types";

export const sortMedals = (medals: Medal[], sortBy: SortType): Medal[] => {
  const sortedMedals = [...medals].sort((a, b) => {
    // sort by the selected medal type (descending)
    const primaryDiff = b[sortBy] - a[sortBy];

    // return the primary difference if there's no tie
    if (primaryDiff !== 0) {
      return primaryDiff;
    }

    // tiebreaker logic
    switch (sortBy) {
      case "total":
        // ties broken by most gold
        return b.gold - a.gold;

      case "gold":
        // ties broken by most silver
        return b.silver - a.silver;

      case "silver":
        // ties broken by most gold
        return b.gold - a.gold;

      case "bronze":
        // ties broken by most gold
        return b.gold - a.gold;

      default:
        return 0;
    }
  });

  // only return the top 10 countries
  return sortedMedals.slice(0, 10);
};
