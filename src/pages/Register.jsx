
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="text-3xl font-bold text-blue-700 text-center">
          Vyapar
        </h1>

        <h2 className="mt-6 text-2xl font-semibold">
          Create Your Account
        </h2>

        <form className="mt-6 space-y-4">

          <input type="text" placeholder="Full Name"
            className="w-full rounded-lg border p-3" />

          <input type="text" placeholder="Business Name"
            className="w-full rounded-lg border p-3" />

          <input type="tel" placeholder="Mobile Number"
            className="w-full rounded-lg border p-3" />

          <input type="email" placeholder="Email Address"
            className="w-full rounded-lg border p-3" />

          <input type="password" placeholder="Create Password"
            className="w-full rounded-lg border p-3" />

          <input type="password" placeholder="Confirm Password"
            className="w-full rounded-lg border p-3" />

          <button type="submit"
            className="w-full rounded-lg bg-blue-700 p-3 font-semibold text-white hover:bg-blue-800">
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-blue-600">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register
