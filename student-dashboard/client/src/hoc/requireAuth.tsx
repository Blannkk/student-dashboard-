import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store';

export const requireAuth = (WrappedComponent: React.ComponentType) => {
  return function WithAuthenticationCheck(props: any) {
    const isAuthenticated = useSelector(
      (state: RootState) => state.auth.isAuthenticated
    );

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default requireAuth;