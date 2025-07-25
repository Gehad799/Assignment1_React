import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import NotFound from "./components/NotFound/NotFound"
import Home from "./components/Home/home"
import About from "./components/About/about"
import PortFolio from "./components/Portfolio/portfolio"
import Contact from "./components/Contact/contact"

function App() {

  const router=createBrowserRouter([
    {
      errorElement: <NotFound />,
    },
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          index:true,
          element:<Home />
        },
        {
          path:"about",
          element:<About />
        },
        {
          path:"portfolio",
          element:<PortFolio />
        },
        {
          path:"contact",
          element:<Contact />
        },
       

      ]


    }
      
    ])
  return (
          <RouterProvider router={router} />

    
  )
}

export default App
