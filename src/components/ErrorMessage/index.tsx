import React from "react";
import { ErrorMessageProps } from "@/utils/types";
import styles from "./styles.module.css";

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Error Loading Data</h2>
      <p className={styles.message}>{message}</p>
      <button
        onClick={() => window.location.reload()}
        className={styles.retryButton}
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;
