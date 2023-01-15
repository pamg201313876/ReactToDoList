import * as React from 'react';

export default function useLocalStorage(itenName, initialValue) {

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    const [sincronizeItem, setSincronizeItem] = React.useState(true);

    React.useEffect(() => {

        try {

            setTimeout(() => {

                var localStorageTodos = localStorage.getItem(itenName);
                let parsedTodos;


                if (!localStorageTodos) {
                    localStorage.setItem(itenName, JSON.stringify(initialValue));
                    localStorageTodos = [];
                } else {
                    parsedTodos = JSON.parse(localStorageTodos);
                }

                setItem(parsedTodos);
                setLoading(false);
                setSincronizeItem(true)
            }, 1000);

        } catch (error){
            setError(true)
        }

    }, [sincronizeItem]);


    const saveItem = (newItem) => {
        
        try{
            const stringifiedTodos = JSON.stringify(newItem);
            localStorage.setItem(itenName, stringifiedTodos);
            setItem(newItem);
        }catch(error){
            setError(true)
        }

    }


    const sincronize = () => {
        setLoading(true);
        setSincronizeItem(false)
    }

    return [item, saveItem, loading, error, sincronize]
    ;

}