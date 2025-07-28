import React from "react";
import { TableHeaderProps, SortType } from "@/utils/types";
import styles from "./styles.module.css";

const TableHeader = ({ currentSort, onSortChange }: TableHeaderProps) => {
  const columns: {
    key: SortType;
    label: string;
    ariaLabel: string;
  }[] = [
    { key: "gold", label: "Gold", ariaLabel: "Sort by gold medals" },
    { key: "silver", label: "Silver", ariaLabel: "Sort by silver medals" },
    { key: "bronze", label: "Bronze", ariaLabel: "Sort by bronze medals" },
    { key: "total", label: "Total", ariaLabel: "Sort by total medals" },
  ];

  const dotStyles: Record<string, string> = {
    gold: styles.goldDot,
    silver: styles.silverDot,
    bronze: styles.bronzeDot,
  };

  return (
    <thead className={styles.header}>
      <tr>
        <th className={styles.rankCell} scope="col">
          <span className="sr-only">Rank</span>#
        </th>
        <th className={styles.countryCell} scope="col">
          Country
        </th>
        {columns.map(({ key, label, ariaLabel }) => {
          const isActive = currentSort === key;
          const isTotal = key === "total";

          return (
            <th
              key={key}
              scope="col"
              className={`${styles.medalCell} ${styles.sortable} ${
                isActive ? styles.active : ""
              }`}
            >
              <button
                className={styles.sortButton}
                type="button"
                aria-label={ariaLabel}
                aria-pressed={isActive}
                onClick={() => onSortChange(key)}
              >
                {/* show colored dots for medals, text for total */}
                {!isTotal ? (
                  <span
                    className={`${styles.dot} ${dotStyles[key]}`}
                    aria-hidden="true"
                  />
                ) : (
                  <span>{label}</span>
                )}

                {/* sort indicator arrow */}
                {isActive && (
                  <span className={styles.arrow} aria-hidden="true">
                    ▼
                  </span>
                )}
              </button>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
