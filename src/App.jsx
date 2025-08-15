import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NotFound } from "@/pages/notFound";
import { Home } from "@/pages/Home";


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound />}/> 
        
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
