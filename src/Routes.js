import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import AuthLayout from "./components/Layout/AuthLayout";
import GuestLayout from "./components/Layout/GuestLayout";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import RegisterIndex from "./pages/auth/Register";
import User from "./pages/User";
import { DetailsUser } from "./pages/DetailsUser";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/table" element={<Table />}></Route>
                <Route path="/User" element={<User />}></Route>
                <Route path="/DetailsUser" element={<DetailsUser />}></Route>
                <Route path="/404" element={<NotFound />}></Route>
                <Route path="/form" element={<Form />}></Route>
            </Route>
            <Route exact path="/profile" element={<User />}></Route>
                <Route path="/auth" element={<GuestLayout />}>
                <Route path="/auth/login" element={<Login />}></Route>
                <Route path="/auth/register" element={<RegisterIndex />}></Route>
            </Route>
      </Routes>
    )
}

export default AppRouter;