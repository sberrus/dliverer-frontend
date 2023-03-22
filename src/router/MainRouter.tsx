// imports
import { Route } from "react-router";
import { Routes, Navigate } from "react-router-dom";
// templates
import MainTemplate from "../templates/MainTemplate";
// pages
import Index from "../pages/index/Index";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ForgotPassword from "../pages/forgot-password/ForgotPassword";

const MainRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<MainTemplate />}>
				<Route index element={<Index />} />
				<Route path="auth">
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="forgot-password" element={<ForgotPassword />} />
				</Route>
			</Route>
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default MainRouter;
