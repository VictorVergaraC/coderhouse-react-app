import { useEffect, useState } from "react";

export const useFetch = (url, options = {}) => {
    const [dataFetch, setDataFetch] = useState({
        data: null,
        isLoading: true
    });

    const getData = async () => {
        try {
            const response = await fetch(url, options);
            const respData = await response.json();
            setDataFetch({
                data: respData,
                isLoading: false
            });
        } catch (err) {
            console.error(err);
            setDataFetch({
                data: null,
                isLoading: true
            });
        }
    };

    useEffect(() => {
        if (url) {
            getData();
        }
    }, [url]);

    return {
        data: dataFetch.data,
        isLoading: dataFetch.isLoading
    };
};