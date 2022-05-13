import axios, { AxiosResponse } from "axios";

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.defaults.baseURL = 'https://localhost:7240/api/';
axios.defaults.withCredentials =true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use( async response => {
    await sleep();
    return response;
})

const requests = {
    get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(responseBody),
    post:(url:string, body:{}) => axios.post(url, body).then(responseBody),
    put: (url:string, body:{}) => axios.put(url,body).then(responseBody),
    delete: (url:string) => axios.delete(url).then(responseBody)
}

const Catalog = {
    list: (params: URLSearchParams) => requests.get('product',params),
    details: (id: number) => requests.get(`product/${id}`)
}


const Client = {
    login: (values: any) => requests.post('client/login', values),
    register:(values: any) => requests.post('client/register', values),
    currentClient:()=> requests.get('client/currentClient')

}



const agent = {
    Catalog,
    Client
}


export default agent;