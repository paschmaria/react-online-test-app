import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';

import logo from '../images/logo.png';

class Header extends Component {

	render() {
		return(
			<Navbar className="brand-bg-lite" fluid={true}>
            	<Navbar.Header>
              		<Navbar.Brand>
                		<a href="/">
							<img src={logo} alt="[LOGO]" className="img-responsive" />
                		</a>
              		</Navbar.Brand>
              		<Navbar.Text>
              			General Mathematics Test
              		</Navbar.Text>
            	</Navbar.Header>
	        </Navbar>
		)
	}
	
}

export default Header;