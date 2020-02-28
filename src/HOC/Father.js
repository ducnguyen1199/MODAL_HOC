import React from 'react';

export default function Father(Component) {
	return function(props) {
		return (
			<div>
				<div>
					<div>
						{/* Button trigger modal */}

						{/* Modal */}
						<div
							className="modal fade"
							id="myModal"
							tabIndex={-1}
							role="dialog"
							aria-labelledby="modelTitleId"
							aria-hidden="true"
						>
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header">
										<h5 className="modal-title">Modal title</h5>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">×</span>
										</button>
									</div>
									<div className="modal-body">
										{/* Chỗ thay đổi */}
										<Component />
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Close
										</button>
										<button type="button" className="btn btn-primary">
											Save
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
}
