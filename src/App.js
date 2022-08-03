import { Routes, Route } from "react-router-dom";
import SignIn from "./components/pages/SignInUp/SignIn";
import SignUp from "./components/pages/SignInUp/SignUp";

import "./styles.scss";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<SignIn />}></Route>
                <Route path="/signUp" element={<SignUp />}></Route>
            </Routes>
        </div>
    );
}

export default App;
