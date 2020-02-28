import React, { Component } from 'react';
import Father from '../HOC/Father';
import Child1 from '../HOC/Child1';
import Child2 from '../HOC/Child2';

const Modal = Father(Child2);
export default class Button2 extends Component {
	render() {
		return (
			<div>
				<button data-toggle="modal" type="button" class="btn btn-primary" data-target="#myModal">
					button2
				</button>
				<Modal />
			</div>
		);
	}
}
