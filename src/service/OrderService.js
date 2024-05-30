import axios from "axios";

const API_URL = "http://localhost:3001/orders";

const createOrder = async (cart) => {
    const token = localStorage.getItem("token");
    try {
        await axios.post(API_URL , cart,
            {
                headers: {
                    authorization: token,
                },
            },);
    } catch (error) {
        console.error(error);
    }
};

const orderService = {
    createOrder
};

export default orderService;

