import axios from "axios";
import { toaster } from "../toaster";
import _get from "lodash.get";

const baseURLs = {
    dummyJSON: "https://dummyjson.com/",
    jokeApi: "https://v2.jokeapi.dev/",
    recipeList: "https://tasty.p.rapidapi.com/recipes/"
};

const axiosInstances = Object.entries(baseURLs).reduce((instances, [key, value]) => {
    instances[key] = axios.create({ baseURL: value });
    return instances;
}, {});

export const axiosInterceptor = () => {
    Object.values(axiosInstances).forEach(instance => {
        instance.interceptors.request.use(async (request) => request);

        instance.interceptors.response.use(
            async response => (response.data ? response.data : response),
            (error) => {
                const { response } = error;
                const errorCode = _get(response, "data.code", "");
                let toastMessage = _get(
                    response,
                    "data.msg",
                    "Something went wrong! Please contact support team"
                );

                if (response) {
                    const { status, data } = response;

                    switch (status) {
                        case 400:
                        case 401:
                            break;
                    }
                }

                if (response && response.status !== 401) {
                    toaster.error(toastMessage);
                }

                return Promise.reject(error);
            }
        );
    });
};

export const { dummyJSON, jokeApi, recipeList } = axiosInstances;
