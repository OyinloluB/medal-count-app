// medal data structure
export interface Medal {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

// sort option
export type SortType = "gold" | "silver" | "bronze" | "total";

// main table props
export interface MedalTableProps {
  medals: Medal[];
  sortBy: SortType;
  onSortChange: (sort: SortType) => void;
}

// table header props
export interface TableHeaderProps {
  currentSort: SortType;
  onSortChange: (sort: SortType) => void;
}

// table rows props
export interface TableRowProps {
  medal: Medal;
  rank: number;
}

// country flag props
export interface CountryFlagProps {
  code: string;
}

// error message props
export interface ErrorMessageProps {
  message: string;
}
