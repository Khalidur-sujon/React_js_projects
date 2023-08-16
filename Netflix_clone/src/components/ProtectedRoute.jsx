import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
	const { user } = useAuth();
	const navigate = useNavigate();

	if (user) {
		return children;
	} else {
		navigate("/");
	}
}

export default ProtectedRoute;
