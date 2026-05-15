import Sidebar from './Sidebar'
import Navbar from './Navbar'

function MainLayout({ children }) {
  return (
    <div className='flex'>

      <Sidebar />

      <div className='ml-64 w-full min-h-screen bg-slate-100 p-6'>

        <Navbar />

        <div className='mt-6'>
          {children}
        </div>

      </div>
    </div>
  )
}

export default MainLayout