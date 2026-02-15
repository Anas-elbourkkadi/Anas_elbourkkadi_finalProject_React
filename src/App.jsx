import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import { Route, Routes } from "react-router-dom";
import { IndexHome } from "./pages/home";
import { IndexFeatuers } from "./pages/featuers";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IndexHome />} />
        <Route path="/pages/feauters" element={<IndexFeatuers/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
