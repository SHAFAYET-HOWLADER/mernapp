
import Home from '../pages/home/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Service from '../pages/Service'
import Login from '../pages/Login'
export const publicRoute = [
    {path:"/", name : "Home", Component: Home},
    {path:"/service", name : "Service", Component: Service},
    {path:"/about", name : "About", Component: About},
    {path:"/Login", name : "Login", Component: Login},
    {path:"/contact", name : "Contact", Component: Contact}
  ]
