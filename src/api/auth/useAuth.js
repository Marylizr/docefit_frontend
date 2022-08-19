import {useEffect, useState} from "react";
import {getUserToken} from "./index";
import fetchResource from "../index";


const useAuth = () => {
    const [isSessionValid, setIsSessionValid] = useState(false);
    const [loading, setLoading] = useState(true);
    const token = getUserToken();

    useEffect(()=> {
        if(token){
            setLoading(true);
            fetchResource("GET", "users")
                .then(userData => {
                    setIsSessionValid(true);
                    setTimeout(() => setLoading(false), 1000)

                }).catch(error => {
                setLoading(false);
                setIsSessionValid(false);
            })
        }else{
            setLoading(false);
        }

    }, [token])

    return {
        loading,
        authenticated: token && isSessionValid
    }

}

export default useAuth;