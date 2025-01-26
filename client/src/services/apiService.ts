import axios from "axios";
import { User } from "../interfaces";

const apiUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: `${apiUrl}`,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getAllUsers = async () => {
    try {
        const response = await api.get("/usuarios");
        return response.data;

    } catch (error) {
        console.error("Error fetching persons:", error);
    }
}

export const createUser = async (user: User) => {
    try {
        const response = await api.post("/usuarios", user);
        return response.data;

    } catch (error) {
        console.error("Error fetching persons:", error);
    }
}