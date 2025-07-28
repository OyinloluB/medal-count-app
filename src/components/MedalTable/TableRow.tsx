import React from "react";
import { TableRowProps } from "@/utils/types";
import CountryFlag from "@/components/CountryFlag";
import styles from "./styles.module.css";

const TableRow = ({ medal, rank }: TableRowProps) => {
  return (
    <tr className={styles.row}>
      <td className={styles.rankCell}>{rank}</td>
      <td className={styles.countryCell}>
        <div className={styles.countryContent}>
          <CountryFlag countryCode={medal.code} />
          <span className={styles.countryName}>{medal.code}</span>
        </div>
      </td>
      <td className={`${styles.medalCell} ${styles.gold}`}>{medal.gold}</td>
      <td className={`${styles.medalCell} ${styles.silver}`}>{medal.silver}</td>
      <td className={`${styles.medalCell} ${styles.bronze}`}>{medal.bronze}</td>
      <td className={`${styles.medalCell} ${styles.total}`}>{medal.total}</td>
    </tr>
  );
};

export default TableRow;
