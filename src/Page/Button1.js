import React, { Component } from 'react';
import Father from '../HOC/Father';
import Child1 from '../HOC/Child1';
import Child2 from '../HOC/Child2';
const Modal = Father(Child1);
export default class Button1 extends Component {
	render() {
		return (
			<div>
				<button data-toggle="modal" type="button" class="btn btn-primary" data-target="#myModal">
					button1
				</button>
				<Modal />
			</div>
		);
	}
}
