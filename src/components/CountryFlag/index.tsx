import React from "react";
import styles from "./styles.module.css";
import { CountryFlagProps } from "@/utils/types";

// sprite dimensions (each flag in the sprite sheet is 28x17 pixels)
const FLAG_WIDTH = 28;
const FLAG_HEIGHT = 17;

// maps country codes to their vertical position in the sprite
const COUNTRY_ROW: Record<string, number> = {
  AUT: 0,
  BLR: 1,
  CAN: 2,
  CHN: 3,
  FRA: 4,
  GER: 5,
  ITA: 6,
  NED: 7,
  NOR: 8,
  RUS: 9,
  SUI: 10,
  SWE: 11,
  USA: 12,
};

const CountryFlag = ({ countryCode }: CountryFlagProps) => {
  const rowIndex = COUNTRY_ROW[countryCode];

  // show placeholder if country not in sprite
  if (rowIndex === undefined) {
    console.warn(`Flag: no sprite entry for "${countryCode}"`);
    return <div className={styles.placeholder}>{countryCode}</div>;
  }

  // calculate sprite position (single column, so x is always 0)
  const xOffset = 0;
  const yOffset = rowIndex * FLAG_HEIGHT;

  return (
    <span
      className={styles.flag}
      style={{
        width: `${FLAG_WIDTH}px`,
        height: `${FLAG_HEIGHT}px`,
        backgroundPosition: `-${xOffset}px -${yOffset}px`,
      }}
      role="img"
      aria-label={`${countryCode} flag`}
      title={countryCode}
    />
  );
};

export default CountryFlag;
