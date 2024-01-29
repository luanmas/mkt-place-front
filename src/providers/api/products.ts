import axios from "axios";



export const productAPI = {
    getAll: async () => {

        const response = await axios({
            method: "GET",
            url: "https://657f3bdd6ae0629a3f531552.mockapi.io/products2",
        })
        .then(function (response) {
            console.log(response);
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
    
        return response;
    },

    getById: async ({ id } : { id: string }) => {
        const response = await axios({
            method: "GET",
            url: `https://657f3bdd6ae0629a3f531552.mockapi.io/products2/${id}`,
        })
        .then(function (response) {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        })
    
        return response;
    }
}