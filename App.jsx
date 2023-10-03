import React from 'react';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import {CTA, Brand, Navbar } from './components';
import './App.scss';
import CrudSelector from './components/crud/CrudSelector';


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Brand />
      <CrudSelector />
      <Footer />
      
    </div>
  );
}


export default App;

/*



<BrowserRouter>
<nav>
 <ul>
   <li>
     <Link to="/">List Users</Link>
   </li>
   <li>
     <Link to="user/create">Create User</Link>
   </li>
 </ul>

</nav>
<Routes>
 <Route index element={<ListUser />} />
 <Route path="user/create" element={<CreateUser />} />
 <Route path="user/:id/edit" element={<EditUser />} />
</Routes>
</BrowserRouter>
*/