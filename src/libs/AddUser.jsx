import React from 'react'
import axios from 'axios';

export const AddUser = () => {
    try {

        const result = axios.post('http://incidencias-fiisi.up.railway.app/api/usuario',
                {
                    // nombUsua,
                    // passUsua,
                    // nombPers,
                    // appaPers,
                    // apmaPers,
                    // dniPers,
                    // telfPers,
                    // emailPers,
                    // nombRol,
                }
        )
        
        return {user:result.data};
        
    } catch (error) {

        return {mensaje:error.response.data.mensaje}
        
    }
}
