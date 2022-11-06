import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import GlobalStyle from "./globalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>Home</div>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
