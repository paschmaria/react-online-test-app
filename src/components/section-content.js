import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import TestChart from './TestChart';
import AnswerForm from './AnswerForm';

class SectionContent extends Component {

	render() {
		return(
			<section className="card">
				<Row>
					<Col md={5} mdPush={7}>
						<TestChart />
					</Col>
					<Col md={7} mdPull={5}>
						<div className="test clearfix">
							<div className="test__number"></div>
							<div className="test__content">
								<p className="test__text">In the diagram to the <span>right</span> <span>top</span>, what's the average number of pupils that loved the Bacon flavour and Cheese &#38; Onion flavour? <i className="test__text_light">(press A - D to answer)</i></p>
								<AnswerForm />
							</div>
						</div>
					</Col>
				</Row>
			</section>
		)
	}
	
}

export default SectionContent;