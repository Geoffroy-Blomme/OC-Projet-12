import MainHeader from "../components/Main_header";
import MainSideBar from "../components/Main_sidebar";
import userData from "./../assets/Userdata.json";
import WelcomeHeader from "./../components/Welcome_header";
import NutritionInfo from "../components/NutritionInfo";
import DailyActivity from "../components/DailyActivity";
import AverageSessionChart from "../components/AverageSessionChart";
import caloriesIcon from "./../assets/calories-icon.png";
import proteinIcon from "./../assets/protein-icon.png";
import carbsIcon from "./../assets/carbs-icon.png";
import fatIcon from "./../assets/fat-icon.png";
import TypeActivityChart from "../components/TypeActivityChart";
import ScoreChart from "../components/ScoreChart";

import { useParams } from "react-router";
import "./Home.css";
import { useEffect } from "react";
export default function Home() {
  const currentPath = useParams();
  console.log(userData);
  let currentUserData = null;

  const getCurrentUserData = () => {
    for (let i = 0; i < userData.users.length; i++) {
      if (userData.users[i].id === currentPath.id) {
        currentUserData = userData.users[i];
      }
    }
  };

  getCurrentUserData();

  console.log(currentUserData);

  return (
    <>
      <MainHeader />
      <main className="main-content">
        <MainSideBar />
        <WelcomeHeader
          name={currentUserData.userInfos.firstName}
          description="Félicitation ! Vous avez explosé vos objectifs hier 👏"
        />
        <div className="user-infos">
          <div className="charts-container">
            <DailyActivity data={currentUserData.sessions} />

            <div className="activity-container">
              <div className="activity-container__elt">
                <AverageSessionChart
                  data={currentUserData["sessions-average"]}
                />
              </div>

              <div className="activity-container__elt">
                <TypeActivityChart data={currentUserData["performance"]} />
              </div>

              <div className="activity-container__elt">
                <ScoreChart data={currentUserData["todayScore"]}></ScoreChart>
              </div>
            </div>
          </div>
          <div className="nutrition-info-container">
            <NutritionInfo
              url={caloriesIcon}
              value={currentUserData.keyData.calorieCount}
              unit={"kCal"}
              type={"Calories"}
            />
            <NutritionInfo
              url={proteinIcon}
              value={currentUserData.keyData.proteinCount}
              unit={"g"}
              type={"protéines"}
            />
            <NutritionInfo
              url={carbsIcon}
              value={currentUserData.keyData.carbohydrateCount}
              unit={"g"}
              type={"glucides"}
            />
            <NutritionInfo
              url={fatIcon}
              value={currentUserData.keyData.lipidCount}
              unit={"g"}
              type={"lipides"}
            />
          </div>
        </div>
      </main>
    </>
  );
}
