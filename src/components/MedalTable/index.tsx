import React from "react";
import { MedalTableProps } from "@/utils/types";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import styles from "./styles.module.css";

const MedalTable = ({ medals, sortBy, onSortChange }: MedalTableProps) => {
  if (medals.length === 0) {
    return <div className={styles.noData}>No medal data available</div>;
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <TableHeader currentSort={sortBy} onSortChange={onSortChange} />
        <tbody>
          {medals.map((medal, index) => (
            <TableRow key={medal.code} medal={medal} rank={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedalTable;
