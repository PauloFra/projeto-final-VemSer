import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import AuthProvider from './context/AuthContext'
import NotFound from './components/notFound/NotFound'
import Curriculos from './pages/curriculos/Curriculos'
import FormCurriculo from './pages/curriculos/FormCurriculo'
import Login from './pages/login/Login'
import Vagas from './pages/vagas/Vagas'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
function Routers() {
  return (
    
      <BrowserRouter>      
      <AuthProvider>
          <Header />
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/login' element={<Login />} />
            <Route  path='/' element={<Vagas />} />
            <Route  path='/curriculos' element={<Curriculos />} />
            <Route path='/form-curriculo' element={<FormCurriculo />}>
              <Route path=':idCandidato' element={<FormCurriculo/>} />
            </Route>
        </Routes>
        <Footer />
        </AuthProvider>
  </BrowserRouter>

  )
}

export default Routers