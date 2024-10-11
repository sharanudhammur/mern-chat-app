import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault(); 	
    await login(username, password);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100' style={{backgroundColor:"transparent"}}>
      <div className='w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-white'>
        <h1 className='text-4xl font-bold text-center text-gray-800'>
          Login to <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Username
            </label>
            <input
              type='text'
              placeholder='Enter username'
              className='w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              placeholder='Enter password'
              className='w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='flex items-center justify-between'>
            <Link
              to='/signup'
              className='text-sm text-blue-500 hover:underline'
            >
              Don't have an account? Sign up
            </Link>
          </div>

          <div>
            <button
              className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed'
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
