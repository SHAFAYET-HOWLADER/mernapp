import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

    function RequireAuth({ children }) {
        let location = useLocation();
        const user = true;
        if (!user) {
          return <Navigate to="/login" state={{ from: location }} replace />;
        }
      
        return children;
      }
export default RequireAuth