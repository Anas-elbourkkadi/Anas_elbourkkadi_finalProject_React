import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import { Route, Routes } from "react-router-dom";
import { IndexHome } from "./pages/home";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IndexHome />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
