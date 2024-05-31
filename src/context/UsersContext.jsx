import { createContext, useReducer } from "react";
import axios from "axios";
import UsersReducer from "./UsersReducer";
import { notification } from "antd";

const token = localStorage.getItem('token') || ""
const initialState = {
    token: token,
    user: null
}

const API_URL = "http://localhost:3001/users"

export const UserContext = createContext(initialState);

export const UsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UsersReducer, initialState);

    const register = async (user) => {
        try {
            await axios.post(API_URL + "/register", user);
        } catch (error) {
            console.error(error)
        }
    };

    const login = async (user) => {
        try {
            const res = await axios.post(API_URL + "/login", user);
            dispatch({
                type: "LOGIN",
                payload: res.data,
            });
            if (res.data) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("User", JSON.stringify(res.data.user))
                notification.success({
                    message: 'Welcome'
                  });
            }else{
                notification.error({
                    message: 'User not found'
                  });
            }
        } catch (error) {
            console.error(error)
        }
    };

    const getUserInfo = async () => {
        let token = localStorage.getItem("token")
        try {
            const res = await axios.get(API_URL + "/user", {
                headers: {
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

    const logout = async () => {
        try {
            const token = localStorage.getItem("token")
            const res = await axios.delete(API_URL + "/logout", {
                headers: {
                    Authorization: token
                }
            })
            if (res.data) {
                localStorage.removeItem("token")
                localStorage.removeItem("Cart")
                dispatch({
                    type: "LOGOUT"
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                register,
                login,
                getUserInfo,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

