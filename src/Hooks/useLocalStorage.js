import * as React from 'react';

export default function useLocalStorage(itenName, initialValue) {

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);

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
            }, 1000);

        } catch (error){
            setError(true)
        }

    }, []);


    const saveItem = (newItem) => {
        
        try{
            const stringifiedTodos = JSON.stringify(newItem);
            localStorage.setItem(itenName, stringifiedTodos);
            setItem(newItem);
        }catch(error){
            setError(true)
        }

    }

    return [item, saveItem, loading, error]
    ;

}