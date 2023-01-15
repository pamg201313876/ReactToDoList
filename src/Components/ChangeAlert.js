import React from 'react'
import { useStorageListener } from './withStorageListener'


const ChangeAlert = ({sincronizeFunction}) => {

    const  {storageChange, functionNueva} = useStorageListener(sincronizeFunction={sincronizeFunction});

    if(storageChange){
        return <div> <p>Hubo cambios</p> 
            <button onClick={ () => functionNueva()}> VOlver a cargar</button>
        </div>
    }else{
        return <></>
    }
}


export {ChangeAlert}