import "./NutritionInfo.css";
export default function NutritionInfo(props) {
  const { url, value, unit, type } = props;
  return (
    <div className="nutrition-info">
      <img src={url} alt="" className="nutrition-info__img" />
      <div className="nutrition-info__texts">
        <div className="nutrition-info__texts__value">
          {value}
          {unit}
        </div>
        <div className="nutrition-info__texts__type">{type}</div>
      </div>
    </div>
  );
}
