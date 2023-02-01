import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      	<div className="main_container p-12  pt-20 pb-20 bg-white border-4  border-black text-2xl ">
      	  	<h3>Welcome to this UI showcase</h3>
      		<p  className="home-text-p">
      		 	You can browse other pages with the{" "}
      		 	<Link className="text-[#ffa580] underline hover:text-[#95a4ff]" to="/contacts">Contacts</Link>{" "}
      		 	or{" "}
      		 	<Link className="text-[#ffa580] underline hover:text-[#95a4ff]" to="/blog">Blog</Link>{" "}
      		 	links
      		</p>
      	</div>
    </>
  );
}
