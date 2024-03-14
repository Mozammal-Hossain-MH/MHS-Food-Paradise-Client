import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/menu')
            .then(res => {
                setMenuData(res.data);
                setLoading(false);
            })
    }, [axiosPublic])
    return [menuData, loading];
};

export default useMenu;