import styles from "./CustomTooltipAverageSession.module.css";
export default function CustomTooltipAverageSession(props) {
  const { active, payload } = props;
  if (active && payload && payload.length) {
    return (
      <div className={styles["custom-tooltip"]}>
        <p className={styles.label}>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
}
