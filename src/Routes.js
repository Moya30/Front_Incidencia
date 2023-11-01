import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import AuthLayout from "./components/Layout/AuthLayout";
import GuestLayout from "./components/Layout/GuestLayout";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import RegisterIndex from "./pages/auth/Register";

import { DetailsUser } from "./pages/DetailsUser";
import User from "./pages/Usuario/User";

function AppRouter() {
    return (
        <Routes>
            <Route  path="/auth/login" element={<Login />}></Route>
                <Route path="/auth" element={<GuestLayout />}>
                <Route path="/auth/register" element={<RegisterIndex />}></Route>
            </Route>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/table" element={<Table />}></Route>
                <Route path="/Usuario/User" element={<User />}></Route>
                <Route path="/DetailsUser" element={<DetailsUser />}></Route>
                <Route path="/404" element={<NotFound />}></Route>
                <Route path="/form" element={<Form />}></Route>
            </Route>
            
      </Routes>
    )
}

export default AppRouter;