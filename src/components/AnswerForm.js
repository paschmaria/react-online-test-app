import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class AnswerForm extends Component {

	render() {
		return(
			<form action="" method="POST" className="test__answer">
				<label className="form-label form-label_selected">
					<input type="radio" name="answer" className="form-label__input" />
					<div className="form-label__content-wrapper">
						<div className="form-label__key">A</div>
						<p className="form-label__value">23 pupils</p>
						<div></div>
					</div>
				</label>
				<label className="form-label form-label_selected">
					<input type="radio" name="answer" className="form-label__input" />
					<div className="form-label__content-wrapper">
						<div className="form-label__key">B</div>
						<p className="form-label__value">13 pupils</p>
						<div></div>
					</div>
				</label>
				<label className="form-label form-label_selected">
					<input type="radio" name="answer" className="form-label__input" />
					<div className="form-label__content-wrapper">
						<div className="form-label__key">C</div>
						<p className="form-label__value">8 pupils</p>
						<div></div>
					</div>
				</label>
				<label className="form-label form-label_selected">
					<input type="radio" name="answer" className="form-label__input" />
					<div className="form-label__content-wrapper">
						<div className="form-label__key">D</div>
						<p className="form-label__value">6 pupils</p>
						<div></div>
					</div>
				</label>
				<Row>
					<Col xs={12} md={6} className="text-left">
						<Button bsSize="large" className="form-label__button button"><span className="pull-left"><i className="fa fa-angle-left"></i></span> Previous</Button>
					</Col>
					<Col xs={12} md={6} className="text-right">
						<Button bsSize="large" type="submit" className="form-label__button brand-bg">Next Question <span className="pull-right"><i className="fa fa-angle-right"></i></span></Button>
					</Col>
				</Row>
			</form>
		)
	}
	
}

export default AnswerForm;