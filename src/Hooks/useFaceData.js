import { useEffect, useState } from "react";

const useFetchData = (API) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => {
                return error.message;
            });
    }, [API]);

    return [data, setData];
};

export { useFetchData };
