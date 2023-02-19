
import { useStoreActions } from 'easy-peasy';
import { useRouter } from 'next/router';
import { useState } from 'react';

const AuthUser = () => {
    const [error, setError] = useState(false);
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    // Global Action
    const authAction = useStoreActions((action) => action.auth);

    // handel from input change handler
    const changeHandler = (e) => {
        e.PreventDefault();
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    // Handel LogIn
    const handelLogIn = async () => {

        const [email, password] = state

        try {
            if (!email || !password) {
                setError("Email @ Password filed to required");
            };
            setError(false);

            const formData = {
                email: email,
                password: password
            };

            const response = await api.post("auth/login", formData);
            const token = response.data.data;
            const user = jwtDecode(token);
            authAction.login({
                user,
                token
            });
            router.push("/");
        }
        catch (e) {
            setError(error.response.data.massage);
            console.log("error", e);
        } finally {
            setError(false);
        }
    };

    // Logout Handler
    const handelLogout = () => {
        authAction.logout();
        router.push("/");
    };
    return {
        state,
        loading,
        error,
        handelLogIn,
        changeHandler,
        handelLogout
    }
}
export default AuthUser;