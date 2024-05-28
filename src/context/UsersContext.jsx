import { createContext, useReducer } from "react";
import axios from "axios";
import UsersReducer from "./UsersReducer";

const token = localStorage.getItem('token') || ""

const initialState = {
    token: token,
    user: null
}

const API_URL = "http://localhost:3001/users"

export const UserContext = createContext(initialState);

export const UsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UsersReducer, initialState);

    const login = async (user) => {
        try {
            const res = await axios.post(API_URL + "/login", user);
            dispatch({
                type: "LOGIN",
                payload: res.data,
            });
            if (res.data) {
                localStorage.setItem("token", res.data.token);
            }
        } catch (error) {
            console.error(error)
        }
    };

    const getUserInfo = async () => {
        try {
            const res = await axios.get(API_URL + "/user", {
                headers:{
                    Authorization: token
                }
            })
            dispatch({
                type: "GET_INFO",
                payload: res.data
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                login,
                getUserInfo
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

