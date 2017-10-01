import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import SectionHeader from './section-header';
import SectionContent from './section-content';

class Section extends Component {

	render() {
		return(
			<main className="main">
		        <Grid>
		        	<SectionHeader />
		        	<SectionContent />
		        </Grid>				
			</main>
		)
	}
	
}

export default Section;