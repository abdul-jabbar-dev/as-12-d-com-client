import { useContext } from "react"
import { AuthContext } from "./AuthProvider/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;