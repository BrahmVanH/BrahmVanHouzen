import React from 'react';

export default function Home() {
	return (
		<div style={{ padding: '20' }}>
			<header className='bg-dark'>
				<div className='container pt-4 pt-xl-5'>
					<div className='row pt-5'>
						<div className='col-md-8 col-xl-6 text-center text-md-start mx-auto'>
							<div className='text-center'>
								<h1 className='fw-bold'>Welcome</h1>
							</div>
						</div>
					</div>
				</div>
			</header>
			<section className='py-5 d-flex justify-content-center' id='bioContainer'>
				<p
					className='d-flex w-75'
					style={{ padding: '5 5', fontSize: '1.25em' }}>
					I'm Brahm, welcome to my world of boundless possibilities! I am a
					passionate professional who thrives on creative problem solving. With
					a wealth of experience in a diverse range of web development
					technologies, I bring a versatile skill set to the table.
					<br />
					When I'm not immersed in the tech realm, you'll find me embarking on
					thrilling adventures in the world of endurance sports, constantly
					seeking new challenges. This sense of adventure fuels my drive to
					approach each project with enthusiasm and a fresh perspective.
					<br />
					My true passion lies in helping individuals like you execute their
					vision. I am dedicated to empowering you to transform your ideas into
					reality. By harnessing my expertise in various web development
					technologies, we can work together to bring your vision to life in the
					most remarkable and impactful ways.
					<br />
					With an unwavering commitment to excellence and a deep love for
					problem-solving, I am here to collaborate with you. Together, we can
					leverage the necessary tools and strategies to turn your dreams into
					tangible success. Let's embark on this exciting journey together and
					make your vision a reality!
				</p>
			</section>
		</div>
	);
}
