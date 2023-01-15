import * as React from 'react';


const initialState = ({ initialValue }) => ({
    sincronizedItem: true,
    loading: true,
    error: false,
    item: initialValue,
});

const actionTypes = {
    error: 'ERROR',
    received: 'RECEIVED',
    saved: 'SAVED',
    sincronize: 'SINCRONIZED'
}


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.error:
            return { ...state, error: true }

        case actionTypes.received:
            return { ...state, error: false, loading: false, sincronizeItem: true, item: payload }

        case actionTypes.saved:
            return { ...state, item: payload }

        case actionTypes.sincronize:
            return { ...state, sincronizeItem: false, loading: true }

        default:
            return state
    }
}


export default function useLocalStorage(itenName, initialValue) {


    const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }))


    const {
        loading,
        error,
        item,
        sincronizeItem
    } = state;

    //ACTION CREATORS

    const onError = (error) => {
        dispatch({ type: actionTypes.error, payload: error })
    }

    const onReceived = (parsedTodos) => {
        dispatch({ type: actionTypes.received, payload: parsedTodos })
    }

    const onSave = (parsedTodos) => {
        dispatch({ type: actionTypes.saved, payload: parsedTodos })
    }

    const onSincronize = () => {
        dispatch({ type: actionTypes.sincronize })
    }

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

                onReceived(parsedTodos)

            }, 1000);

        } catch (error) {
            onError(error)
        }

    }, [sincronizeItem]);


    const saveItem = (newItem) => {

        try {
            const stringifiedTodos = JSON.stringify(newItem);
            localStorage.setItem(itenName, stringifiedTodos);
            onSave(newItem)
        } catch (error) {
            onError(error)
        }

    }


    const sincronize = () => {
        onSincronize()
    }

    return [item, saveItem, loading, error, sincronize]
        ;

}