import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ currentPage, handlePageChange }) {
	return (
		<nav
			className='navbar navbar-dark navbar-expand-md sticky-top py-3'
			id='mainNav'
			style={{ cursor: 'pointer', background: 'var(--bs-body-bg)' }}>
			<div className='flex-nowrap container'>
				<button
					data-bs-toggle='collapse'
					className='navbar-toggler'
					data-bs-target='#navcol-1'>
					<span className='visually-hidden'>Toggle navigation</span>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse'
					id='navcol-1'
					style={{ transform: 'translate(-191)' }}>
					<ul className='navbar-nav mx-auto'>
						<li className='nav-item'>
							<Link className='nav-link active' to='/'>
								<span style={{ fontWeight: 'normal !important' }}>Home</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-link'
								to='/creations'>
								Creations
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/resume'
								target='blank'
								className='nav-link'>
								Resume
							</Link>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								onClick={() => handlePageChange('Contact')}>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className='d-flex flex-wrap flex-column'>
					<span>Brahm Van Houzen</span>
					<span id='subtitle'>Full-Stack Developer</span>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
