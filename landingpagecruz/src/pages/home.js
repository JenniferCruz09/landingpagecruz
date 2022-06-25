import React from "react";
import '../components/mystyles.css';
import img1 from '../components/jenny.png';

const About = () => {
return (
	<div>
		
	<h1><center className="box" className2="font2">HI! I'm Jennifer Cruz</center></h1>
	
	<h1 className="box" className2="font"><center><img className="img"src={img1}  alt="jenny"></img></center>
	BSIT-2A student from Pamantasan ng Lungsod ng Muntinlupa. Creating my final activity 1 the react landing page.
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	<br></br>
	You can reach me or contact me thru via Facebook, Instagram and Gmail.
	<br></br>
	<br></br>
	<h6>Facebook : jennifercruz.17
	<br></br>
	<br></br>
	Instagram : Its_me.jn
	<br></br>
	<br></br>
	Gmail : cruzjennifer091701@gmail.com
	</h6>
	</h1>

	</div>
);
};

export default About;
