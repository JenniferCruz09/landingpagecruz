import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/about" activeStyle>
			Home
		</NavLink>
		<NavLink to="/contact" activeStyle>
			About Me
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
