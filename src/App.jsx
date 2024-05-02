import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import JobsPages from './component/pages/JobsPages';
import MainLayouts from './component/layouts/MainLayouts';
import Homepages from './component/pages/Homepages';
import NotFound from './component/pages/NotFound';
import Jobpage from './component/pages/Jobpage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayouts />}>
  <Route index element={<Homepages />}/>
  <Route path='/jobs' element={<JobsPages />}/>
  <Route path='/jobs/:id' element={<Jobpage />}/>
  <Route path='*' element={<NotFound />}/>
  </Route>
  )
  
);

const App = () => {
  return (
    <RouterProvider router={router}/>
   
  )
}

export default App