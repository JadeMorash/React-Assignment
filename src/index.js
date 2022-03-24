import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

/*imports for routes*/

import Contact from "./routes/contact";
import Projects from "./routes/projects";
import About from "./routes/about";
import Home from "./routes/home";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="About" element={<About />} />
            <Route path="Home" element={<Home />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
