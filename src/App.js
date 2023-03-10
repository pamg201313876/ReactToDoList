import * as React from 'react';

import { TodoModal } from './Components/TodoModal'
import "./Styles/main.css"
import { TodoHome } from './Components/TodoHome';
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {




    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<TodoHome />} />
                <Route path="/edit">
                    <Route path=":slug" element={<TodoModal />} />
                </Route>
                <Route
                    path="/create"
                    element={<TodoModal />}
                />
                <Route path="*" element={<p>Not Found</p>} />
            </Routes>
        </HashRouter>
    );
}

export default App;
