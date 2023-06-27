import MainHeader from "../components/Main_header";
import MainSideBar from "../components/Main_sidebar";
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
import { useState } from "react";
import { getUserInformation } from "../services/ApiCalls";
import { useEffect } from "react";
import { useParams } from "react-router";
import "./Home.css";
export default function Home() {
  const currentPath = useParams();

  const [currentUserData, setCurrentUserData] = useState([]);


  const getData = async () => {
    const request = await getUserInformation(currentPath.id);
    setCurrentUserData(request);
  }

  useEffect(()=> {
    getData();
  },[])  
  if(currentUserData.length === 0){
    return <></>
  }

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
            <div className="daily-activity"><DailyActivity id={currentUserData.id} /></div>

            <div className="activity-container">
              <div className="activity-container__elt">
                <AverageSessionChart
                  id={currentUserData.id}
                />
              </div>

              <div className="activity-container__elt">
                <TypeActivityChart id={currentUserData.id} />
              </div>

              <div className="activity-container__elt">
                <ScoreChart id={currentUserData.id}></ScoreChart>
              </div>
            </div>
          </div>
          <div className="nutrition-info-container">
            <NutritionInfo
              url={caloriesIcon}
              value={currentUserData.keyData.calorieCount}
              unit={" kCal"}
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
