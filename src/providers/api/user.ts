import axios from "axios";

type userCreate = {
    name: string;
    email: string;
    password: string;
}

type responsePost = {
    message: string;
    data?: userCreate;
}


export const postUser = async ({ name, email, password } : userCreate) => {
    const response = await axios<responsePost>({
        method: "POST",
        url: "http://localhost:8888/signup",
        data: {
            name,
            email,
            password
        }
    })
    .then(function (response) {
        return response.data;
    })
    .catch(error => {
        if(error.response && error.response.data) {
            return error.response;
        }else {
            return error.message;
        }
    })

    return response;
}