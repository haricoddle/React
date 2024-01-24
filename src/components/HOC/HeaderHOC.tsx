import React from "react";
import { useNavigate } from "react-router-dom";

const withTokenCheck = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const Navigate = useNavigate();

    const handleAuth = (path: string) => {
      if (localStorage.getItem('token')) {
        Navigate(path);
      } else {
        alert('Please login before using the services');
        Navigate('/');
      }
    };
    return <WrappedComponent {...props} handleAuth={handleAuth} />

  };
};

export default withTokenCheck;
