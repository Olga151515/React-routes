import React from 'react';
import { Route, Routes, Outlet} from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Expenses from './pages/Expenses';
import Invoices from './pages/Invoices';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Invoice from './pages/Invoice';


const App = () => {
  return (
    <Layout>
      <Outlet />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='expenses' element={<Expenses />} />
          <Route path='invoices' element={<Invoices />} />
          <Route path='invoice:id' element={<Invoice />} />
        </Route>
       <Route  path='/about' element={<About />}/>
       <Route  path='*' element={<NotFound />}/>
      </Routes>
    </Layout>
  );
};

export default App