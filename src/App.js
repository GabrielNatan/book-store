import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./globalStyle";
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
