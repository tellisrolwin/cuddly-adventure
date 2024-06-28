import "./App.css";
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Contact from "./Component/Contact.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Maps from "./Pages/Maps.jsx";
import Ternary from "./Pages/Ternary.jsx";
import Es6 from "./Component/Es6.jsx";
import Arrow1 from "./Pages/Arrow1.jsx";
import TabHW from "./Pages/TabHW.jsx";
import ParentC from "./Component/ParentC.jsx";
import Props from "./Component/Props.jsx";
import UseState from "./Pages/UseState.jsx";
import UseEffect from "./Pages/UseEffect.jsx";
import ParentB from "./Pages/ParentB.jsx";
import ChildB from "./Pages/ChildB.jsx";
import Mom1 from "./Component/Mom1.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/maps" element={<Maps></Maps>} />
          <Route path="/ter" element={<Ternary></Ternary>} />
          <Route path="/arr" element={<Arrow1></Arrow1>} />
          <Route path="/es6" element={<Es6></Es6>} />
          <Route path="/tab" element={<TabHW></TabHW>}></Route>
          <Route path="/props" element={<Props></Props>}></Route>
          <Route path="/par" element={<ParentC></ParentC>}></Route>
          <Route path="/chi" element={<UseState></UseState>}></Route>
          <Route path="/eff" element={<UseEffect></UseEffect>}></Route>
          <Route path="/parentB" element={<ParentB></ParentB>}></Route>
          <Route path="/ChildB" element={<ChildB></ChildB>}></Route>
          <Route path="/" element={<Mom1></Mom1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
