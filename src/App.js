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

		<svg fill="#000000" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" >
			<g id="XMLID_20_">
				<path id="XMLID_21_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300
					c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z"/>
				<path id="XMLID_24_" d="M165,100c-35.841,0-65,29.159-65,65s29.159,65,65,65s65-29.159,65-65S200.841,100,165,100z M165,200
					c-19.299,0-35-15.701-35-35s15.701-35,35-35s35,15.701,35,35S184.299,200,165,200z"/>
			</g>
		</svg>


		</div>
		<div className=''></div>
		<div className=''></div>
		<div className=''></div>
    </div>
  );
}

export default App;
