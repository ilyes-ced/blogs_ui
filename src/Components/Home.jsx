import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      	<div className="main_container p-12 bg-white border-4  border-black ">
      	  	<h3>I am Ahmed Kechicheb, Welcome to My Homepage</h3>
      		<p>
      		 	You can browse my page with the{" "}
      		 	<Link className="text-[#ffa580] underline hover:text-[#95a4ff]" to="/contacts">Contacts</Link>{" "}
      		 	or{" "}
      		 	<Link className="text-[#ffa580] underline hover:text-[#95a4ff]" to="/blog">Blog</Link>{" "}
      		 	links
      		</p>
      	</div>
    </>
  );
}
