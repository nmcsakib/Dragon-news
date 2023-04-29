import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const ProtectedRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return (
           <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
             <Spinner  animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
           </div>
        )
    }
    if(user){
        return children
    }
    return <Navigate to="/login" replace state={{from: location}}></Navigate>
};

export default ProtectedRoute;