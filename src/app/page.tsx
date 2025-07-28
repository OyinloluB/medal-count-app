"use client";

import React, { useMemo } from "react";
import MedalTable from "@/components/MedalTable";
import ErrorMessage from "@/components/ErrorMessage";
import { useMedalData } from "@/hooks/useMedalData";
import { useURLParams } from "@/hooks/useURLParams";
import { sortMedals } from "@/utils/sorting";
import styles from "./page.module.css";

export default function Home() {
  const { medals, loading, error } = useMedalData();
  const { sortBy, setSortBy } = useURLParams();

  const sortedMedals = useMemo(
    () => sortMedals(medals, sortBy),
    [medals, sortBy]
  );

  if (loading) {
    return (
      <main className={styles.main}>
        <div className={styles.loading} role="status" aria-live="polite">
          <span>Loading medal data...</span>
          <span className="sr-only">Please wait</span>
        </div>
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

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Medal Count</h1>
        <MedalTable
          medals={sortedMedals}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>
    </main>
  );
}
