import "./App.css";
import "./index.css";
import Home from "./Components/Home";
import Contacts from "./Components/Contacts";
import Blog from "./Components/Blog";
import Nav_bar from "./Components/Nav_bar";
//import { ReactComponent as Donut } from './svg/donut.svg';
import { Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <div className="bg-[#fff5b4] w-screen h-screen  flex flex-col">
        <Nav_bar className='' />
        <div className='w-full   grow  flex items-center justify-center' >
            <Routes>
                <Route exact path="/" element={<><Home /></>} />
                <Route path="/contacts" element={ <><Contacts /></>} />
                <Route path="/blog" element={<><Blog /></>} />
            </Routes>
        </div>
		<div className='absolute top-12 left-24'> 

		


		</div>
		<div className=''></div>
		<div className=''></div>
		<div className=''></div>
    </div>
  );
}

export default App;
