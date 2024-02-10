import { Login } from "./Pages/login/login";
import { Home } from "./Pages/home/home";
import { Signup } from "./Pages/signup/signup";

export const routes = [
    // {
    //     path: "/login",
    //     element: Login
    // },
    {
        path: "/signup",
        element: Signup
    },
    {
        path: "/home",
        element: Home
    }
]

export const Api_url = 'http://localhost:5000/api'