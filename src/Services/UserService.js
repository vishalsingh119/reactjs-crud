import axios from 'axios';
import configData from "../config.json"

export default {
	getUserList: async () => {
		try{
			const resp = await axios.get(configData.USER_API_URL);
			return resp.data;
		} catch(error){
			throw error;
		}
	},

	getUser: async (id) => {
		try{
			const resp = await axios.get(`http://localhost:3333/users/${id}`);
			return resp.data;
		} catch(error){
			throw error;
		}
	},
	createUser: async (user) => {
		try{
			const resp = await axios.post(`http://localhost:3333/users/`, user);
		} catch(error){
			throw error;
		}
	},

	deleteUser: async (id) => {
		try{
			const resp = await axios.delete(`http://localhost:3333/users/${id}`);
			return resp.data;
		} catch(error){
			throw error;
		}
	}
};