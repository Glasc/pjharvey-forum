import NavbarBottom from '../navbar-bottom/NavbarBottom'
import Navbar from '../navbar/Navbar'

const Layout = ({ children }: any) => {
  return (
    <div className='w-full min-h-screen bg-base-300 flex flex-col'>
      <Navbar />
      {children}
      <NavbarBottom />
    </div>
  )
}
export default Layout
