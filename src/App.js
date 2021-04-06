import React from 'react';
import Routes from './routes/Routes';
import { ProvideAuth } from "./hooks/use-auth";

function App() {
    return (
        <ProvideAuth>
            {
                <div className="App">
                    <Routes></Routes>
                </div>
            }
        </ProvideAuth>
    );
}
export default App;
