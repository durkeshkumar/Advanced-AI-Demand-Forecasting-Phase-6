import { useState, useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

import api from '../services/api'

function Login() {

  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const response = await api.post(
        '/auth/login',
        formData
      )

      login(response.data.access_token)

      navigate('/dashboard')

    } catch (error) {

      alert(
        error.response.data.detail
      )
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950'>

      <div className='w-[420px] bg-white rounded-3xl shadow-2xl p-10'>

        <div className='text-center mb-8'>

          <h1 className='text-4xl font-bold text-slate-800'>
            Welcome Back
          </h1>

          <p className='text-slate-500 mt-2'>
            AI Demand Forecasting System
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className='space-y-5'
        >

          <div>

            <label className='block mb-2 text-slate-700 font-medium'>
              Email
            </label>

            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='w-full border border-slate-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
            />

          </div>

          <div>

            <label className='block mb-2 text-slate-700 font-medium'>
              Password
            </label>

            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter your password'
              className='w-full border border-slate-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-500'
            />

          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold'
          >
            Login
          </button>

        </form>

        <p className='text-center mt-6 text-slate-600'>

          Don't have an account?

          <Link
            to='/register'
            className='text-blue-600 font-semibold ml-2'
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Login