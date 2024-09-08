import { createContext, useEffect, useState } from "react";

export const userverify = createContext();

export default function UserVerify({ children }) {
    const [token, settoken] = useState(null);

    // console.log(token);
    useEffect(
        () => {
            console.log('refresh');
        //hena h-check el localstorage feha token wla la 
        //3ashan my7slsh refresh f el data tter w ykon fe user auth
        const userToken = localStorage.getItem('tkn');
        if(userToken != null){
            settoken(userToken);
        }    
            
        },[]
    );

    return (
        <userverify.Provider value={{ token, settoken }}>
            {children}
        </userverify.Provider>
    );
}

