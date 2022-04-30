import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import NotFound from "./components/notFound/NotFound";
import Curriculos from "./pages/curriculos/Curriculos";
import FormCurriculo from "./pages/formCandidato/FormCurriculo";
import Login from "./pages/login/Login";
import Vagas from "./pages/vagas/Vagas";
import Header from "./components/header/Header";
import GetReducedProvider from "./context/GetReducedContext";
import Footer from "./components/footer/Footer";
import CadastrarUsuarios from './pages/CadastrarUsuarios/CadastrarUsuarios'
function Routers() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GetReducedProvider>
          <Header />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/cadastrar-usuario" element={<CadastrarUsuarios />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Vagas />} />
            <Route path="/curriculos" element={<Curriculos />} />
            <Route path="/curriculos" element={<Curriculos />} />
            <Route path="/form-curriculo" element={<FormCurriculo />}>
              <Route path=":idCandidato" element={<FormCurriculo />} />
            </Route>
            {/*  <Route path="/detalhe-candidato" element={<CandidatoDetalhamento />}>
            <Route path=":idCandidato" element={<CandidatoDetalhamento />} />
          </Route> */}
          </Routes>
          <Footer />
        </GetReducedProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Routers;
