import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
  // const { isAuthenticated } = useContext(AuthContext);
  const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated)

  return isAuthenticated ?
    <>{children}</>
    :
    <Screen />
}

export default PrivateRoute;

const Screen = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-lg text-gray-600 mb-8">Please sign in or sign up to continue.</p>
      <div className="flex space-x-4">
        <Link to="/signin" className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
          Sign In
        </Link>
        <Link to="/signup" className="px-6 py-3 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
          Sign Up
        </Link>
      </div>
    </div>
  )
}