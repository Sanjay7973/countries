
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import Countries from './component/countries/Countries.jsx'
import Contact from './component/Contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='/countries' element={<Countries/>}/>
       <Route path='/contact' element={<Contact/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <RouterProvider  router={router}>
    <App />
  </RouterProvider >
)
