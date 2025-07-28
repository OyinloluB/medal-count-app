"use client";

import React from "react";
import MedalTable from "@/components/MedalTable";
import ErrorMessage from "@/components/ErrorMessage";
import { useMedalData } from "@/hooks/useMedalData";
import { useURLParams } from "@/hooks/useURLParams";
import { sortMedals } from "@/utils/sorting";
import styles from "./page.module.css";

export default function Home() {
  const { medals, loading, error } = useMedalData();
  const { sortBy, setSortBy } = useURLParams();

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.loading}>Loading medal data...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.main}>
        <ErrorMessage message={error} />
      </main>
    );
  }

  const sortedMedals = sortMedals(medals, sortBy);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Olympic Medal Count</h1>
        <MedalTable
          medals={sortedMedals}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>
    </main>
  );
}
