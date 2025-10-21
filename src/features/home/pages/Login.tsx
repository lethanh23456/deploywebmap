import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from "@tanstack/react-router";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = () => {
    
   
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm max-w-md w-full p-8">
        <button className="flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5" />
          <span className="ml-1">Back</span>
        </button>

      
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Account Login</h1>
          <p className="text-gray-500 text-sm">
            If you are already a member you can login with your email address and password.
          </p>
        </div>

     
        <div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder=""
            />
          </div>

       
          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder=""
            />
          </div>

        
          <div className="mb-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
          </div>

        
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
          >
            Login
          </button>
        </div>

       
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
             <Link to="/register"  className="text-blue-600 hover:text-blue-700 font-medium">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;