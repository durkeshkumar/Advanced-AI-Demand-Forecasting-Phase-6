function Navbar() {
  return (
    <div className='h-16 bg-white shadow-md flex items-center justify-between px-8 rounded-xl'>

      <h1 className='text-2xl font-bold text-slate-800'>
        Advanced AI Demand Forecasting
      </h1>

      <button className='bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition'>
        Logout
      </button>

    </div>
  )
}

export default Navbar