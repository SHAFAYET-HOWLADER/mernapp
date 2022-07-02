import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
const AdminRoutes = () => {
    let location = useLocation();
    const [admin] = useAdmin()
    if (!admin) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    return <Outlet/>;
}
export default AdminRoutes;

