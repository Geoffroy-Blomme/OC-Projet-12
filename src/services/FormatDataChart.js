export default class FormatDataChart {
  formatDataBarChart(data) {
    let dataArray = [];
    data.map((session, index) => {
      dataArray.push({
        name: index + 1,
        kilogram: session.kilogram,
        calories: session.calories,
      });
    });
    return dataArray;
  }
  formatDataAverageSessions(data) {
    let dataArray = [];
    let daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
    if (data) {
      data.map((averageSesssion, index) => {
        let formattedElt = {
          day: daysOfWeek[index],
          sessionLength: data[index].sessionLength,
        };
        dataArray.push(formattedElt);
      });
    }
    return dataArray;
  }

  formatActivityType(performanceData) {
    let dataArray = [];
    console.log(performanceData);
    let newKinds = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];
    if (performanceData) {
      performanceData.data.map((activityType) => {
        let formattedElt = {
          activityValue: activityType.value,
          activityType: newKinds[activityType.kind - 1],
        };
        dataArray.push(formattedElt);
      });
    }
    return dataArray.reverse();
  }

  formatTodayScore(todayScore) {
    return [{ value: todayScore * 100 }];
  }
}
