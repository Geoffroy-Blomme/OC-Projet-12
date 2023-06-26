import axios from "axios";
const baseURL ="http://localhost:3000/user/";

export const getUserInformation = async (id) => {
	try{
		const res = await axios.get(`${baseURL}${id}`);
		return res.data;
	} catch(e){
		console.log(e)
	}
}

export const getAverageSessions = async (id) => {
    try {
		const res = await axios.get(`${baseURL}${id}/average-sessions`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
}

export const getDailyActivity = async (id) => {
    try {
		const res = await axios.get(`${baseURL}${id}/activity`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
}

export const getPerformance = async (id) => {
    try {
		const res = await axios.get(`${baseURL}${id}/performance`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
}

export const getTodayScore = async (id) => {
    try {
		const res = await axios.get(`${baseURL}${id}`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
}


