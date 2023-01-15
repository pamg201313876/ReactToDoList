import React from 'react'

export const useStorageListener = ({sincronizeFunction}) => {

    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            setStorageChange(true);
        }
    })

    const functionNueva = () => {
        setStorageChange(false);
        sincronizeFunction();
    }

    return {storageChange, functionNueva}

}
