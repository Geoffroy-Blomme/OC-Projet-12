import axios from "axios";
import mockData from "../assets/Userdata.json";

const baseURL ="http://localhost:3000/user/";
let isMock = true;
let mockDataUser = mockData.users[0];
export const getUserInformation = async (id) => {
	if(isMock){
		return mockDataUser;
	}else{
		try{
			const res = await axios.get(`${baseURL}${id}`);
			return res.data;
		} catch(e){
			console.log(e)
		}
	}
	
}

export const getAverageSessions = async (id) => {
	if(isMock){
		const averageSessions = {userId:mockDataUser.id,sessions:mockDataUser["sessions-average"]}
		return averageSessions;
	}else{
		try {
			const res = await axios.get(`${baseURL}${id}/average-sessions`);
			return res.data;
		} catch (e) {
			console.log(e);
		}
	}
    
}

export const getDailyActivity = async (id) => {
    if(isMock){
		const dailyActivity = {userId:mockDataUser.id, sessions:mockDataUser.sessions};
		return dailyActivity
	}else{
		try {
			const res = await axios.get(`${baseURL}${id}/activity`);
			return res.data;
		} catch (e) {
			console.log(e);
		}
	}
}

export const getPerformance = async (id) => {
	if(isMock){
		const performance = {userId:mockDataUser.id,kind:mockDataUser.performance.kind,data:mockDataUser.performance.data}
		return performance
	}else{
		try {
			const res = await axios.get(`${baseURL}${id}/performance`);
			return res.data;
		} catch (e) {
			console.log(e);
		}
	}
    
}

export const getTodayScore = async (id) => {
    if(isMock){
		const todayScore = {userId:mockDataUser.id,todayScore:mockDataUser.todayScore}
		return todayScore
	}else{
		try {
			const res = await axios.get(`${baseURL}${id}`);
			return res.data;
		} catch (e) {
			console.log(e);
		}
	}
}


