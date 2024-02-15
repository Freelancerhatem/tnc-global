import axios from "axios";
import { useEffect, useState } from "react";


const useData = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get('https://dummyjson.com/users?limit=30')
            .then(res => setData(res.data));
    }, [])
    return data;
};

export default useData;