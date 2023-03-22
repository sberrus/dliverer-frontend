// import
import { Outlet } from "react-router-dom";

const AuthTemplate = () => {
	return (
		<>
			<header style={{ textAlign: "center", padding: "1.5em 0", borderBottom: "1px solid #d1d1d1" }}>
				[AUTH HEADER DECORATION]
			</header>
			<Outlet />
		</>
	);
};

export default AuthTemplate;
