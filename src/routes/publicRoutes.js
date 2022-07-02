
import Home from '../pages/home/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Service from '../pages/Service'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
export const publicRoute = [
    {path:"/", name : "Home", Component: Home},
    // {path:"/service", name : "Service", Component: Service},
    // {path:"/about", name : "About", Component: About},
    {path:"/login", name : "Login", Component: Login},
    {path:"/signUp", name : "SignUp", Component: SignUp},
    {path:"/contact", name : "Contact", Component: Contact}
  ]
