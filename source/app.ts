import axios from "axios";

interface IID {
    id: string;
}

interface iComment extends IID {
    name: string;
    email: string;
    body: string;
    postId: string;
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments/?limit=10';

const getData = (url: string): Promise<axios.AxiosResponse> => {
    return axios.get(url);
}

getData(COMMENTS_URL)
    .then(response => {
        if (!Array.isArray(response.data)) throw new Error();

        response.data.forEach((comment: iComment) => {
            console.log(`ID: ${comment.id}, Email: ${comment.email}`);
        });
    })
    .catch(e => {
        alert('Something wrong!');
    })
