import styles from "./CustomTooltipDailyActivity.module.css";
export default function CustomTooltipDailyActivity(props) {
  const { active, payload } = props;
  if (active && payload && payload.length) {
    return (
      <div className={styles["custom-tooltip"]}>
        <p className={styles.label}>{`${payload[1].value}kg`}</p>
        <p className={styles.label}>{`${payload[0].value}kcal`}</p>
      </div>
    );
  }
  return null;
}
