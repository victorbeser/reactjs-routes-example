import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Auth from "../Auth/Auth";


// const PrivateRoute = ({element}) => {
//     return isAuth() ? element : <Navigate to="/" />
// }

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/test" element={<h2>Test Page!</h2>} />
                {/* <Route path="/priv" element={<PrivateRoute element={<h2>Logado!</h2>} />} /> */}
            </Routes>
        </BrowserRouter>
    );

};

export default AppRoutes;