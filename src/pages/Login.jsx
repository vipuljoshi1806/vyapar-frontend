
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="text-3xl font-bold text-blue-700 text-center">
          Vyapar
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">
          Welcome Back!
        </h2>

        <p className="mt-2 text-gray-500">
          Login to manage your business.
        </p>

        <form className="mt-6 space-y-4">

          <div>
            <label className="block mb-2 text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-600"
            />
          </div>

          <div className="flex justify-between text-sm">
            <label className="flex gap-2 items-center">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-blue-600">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 p-3 font-semibold text-white hover:bg-blue-800"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-semibold text-blue-600">
            Create Account
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login
