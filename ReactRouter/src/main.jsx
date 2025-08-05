import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/AboutUs.jsx'
import { Route } from 'react-router-dom'
import Contact from './Components/Contact/ContactUs.jsx'
import User from './Components/User/User.jsx'
import Github,{ GithubInfoLoader } from './Components/Github/Github.jsx'
 


// const router = createBrowserRouter([{
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {path:"home",
//       element:<Home/>
//     },
//     {path:"about",
//       element:<About/>
//     },{
//       path:"contact",
//       element:<Contact/>
//     }
//   ]
// }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/user/:userId" element={<User/>}/>
      <Route
       loader={GithubInfoLoader}
       path="/github" 
       element={<Github/>   }
      />
      
    </Route>
    
  )
)




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
