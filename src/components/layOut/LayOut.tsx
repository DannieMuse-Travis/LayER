
import Footer from '../static/Footer'
import Header from '../static/Header'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayOut