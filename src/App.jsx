import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import { Route, Routes } from "react-router-dom";
import { IndexHome } from "./pages/home";
import { IndexFeatuers } from "./pages/featuers";
import { IndexAbout } from "./pages/about";
import { Provider } from "./context";

function App() {

  return (
    <>
      <Provider>
        <Header />
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/pages/feauters" element={<IndexFeatuers />} />
          <Route path="/pages/about" element={<IndexAbout />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  )
}

export default App
