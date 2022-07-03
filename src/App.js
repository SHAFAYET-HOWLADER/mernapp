import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {publicRoute} from "./routes/publicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import RequireAuth from "./shared/RequireAuth";
import { PrivateRoutes } from "./routes/PrivateRuotes";
import Dashboard from "./pages/dashboard/Dashboard";
import AdminRoutes from "./routes/AdminRoutes";
import AddAdimin from "./pages/dashboard/AddAdimin";
import AdService from "./pages/dashboard/AdService";
function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <Navbar>
          <Routes>
            {
              publicRoute.map(({path, Component}, index)=>(
                <Route key={index} path={path} element={<Component/>}/>
              ))}
             <Route element={<RequireAuth/>}>
             {
              PrivateRoutes.map(({path, Component}, index)=>(
                <Route key={index} path={path} element={<Component/>}/>
              ))}
             </Route>    
             <Route element={<AdminRoutes/>}>
                <Route path="/dashboard" element={<Dashboard/>}>
                  <Route path="addAdmin" element={<AddAdimin/>}></Route>
                  <Route path="addService" element={<AdService/>}></Route>
                </Route>
              </Route>   
          </Routes>
    </Navbar>
  );
}

export default App;
