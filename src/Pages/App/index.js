import './style.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../Home'
import Blog from '../Blog'
import Works from '../Works'
import Contact from '../Contact'

import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import WorkDetail from '../WorkDetail';

import SuccessForm from '../../Organisms/SuccessForm';

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Header></Header>

        <Routes>
          <Route exact path='/' element={<Home></Home>} />
          <Route exact path='/home' element={<Home></Home>} />
          <Route exact path='/blog' element={<Blog></Blog>} />
          <Route exact path='/works' element={<Works></Works>} />
          <Route exact path={'/contact'} element={<Contact></Contact>} />
          <Route path={`/work/:id`} element={<WorkDetail></WorkDetail>} />
          <Route exact path ="/success" element={<SuccessForm />}></Route>
        </Routes>

        <Footer></Footer>

      </div>
    </BrowserRouter >
  );
}

export default App;
