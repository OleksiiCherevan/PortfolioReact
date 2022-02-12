import "./style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home";
import Blog from "../Blog/";
import Works from "../Works";
import WorkDetail from "../WorkDetail";
import Contact from "../Contact";

import Header from "../../Organisms/Header";
import Footer from "../../Organisms/Footer";

import Success from "../../Organisms/SuccessForm/index";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="app-content">
                <Header></Header>

                <Routes>
                    <Route exact path="/" element={<Home></Home>} />
                    <Route exact path="/home" element={<Home></Home>} />
                    <Route exact path="/blog" element={<Blog></Blog>} />
                    <Route exact path="/works" element={<Works></Works>} />
                    <Route exact path={"/contact"} element={<Contact />} />
                    <Route path={`/work/:id`} element={<WorkDetail />} />
                    <Route exact path="/success" element={<Success />}></Route>
                </Routes>

                <Footer></Footer>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
