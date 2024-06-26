const users = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                token: action.payload.token,
            };
        case "GET_INFO":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                token: ""
            };
        default:
            return state;
    }
};
export default users;