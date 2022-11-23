import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export const Home = () => {
	return (
		<div>
			<header>
				<nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
					<div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
						<Link to='https://flowbite.com' className='flex items-center'>
							<img
								src='https://flowbite.com/docs/images/logo.svg'
								className='mr-3 h-6 sm:h-9'
								alt='Flowbite Logo'
							/>
							<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
								Flowbite
							</span>
						</Link>
						<div className='flex items-center lg:order-2'>
							<Link
								to='/'
								className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
							>
								Log in
							</Link>
							<Link
								to='/'
								className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
							>
								Get started
							</Link>
							<button
								data-collapse-toggle='mobile-menu-2'
								type='button'
								className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
								aria-controls='mobile-menu-2'
								aria-expanded='false'
							>
								<span className='sr-only'>Open main menu</span>
								<svg
									className='w-6 h-6'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
										clipRule='evenodd'
									></path>
								</svg>
								<svg
									className='hidden w-6 h-6'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'
									></path>
								</svg>
							</button>
						</div>
						<div
							className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
							id='mobile-menu-2'
						>
							<ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
								<li>
									<Link
										to='/'
										className='block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white'
										aria-current='page'
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to='/'
										className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
									>
										Company
									</Link>
								</li>
								<li>
									<Link
										to='/'
										className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
									>
										Features
									</Link>
								</li>
								<li>
									<Link
										to='/'
										className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			<section className='bg-white dark:bg-gray-900'>
				<div className='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
					<div className='mr-auto place-self-center lg:col-span-7'>
						<h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
							Payments tool for software companies
						</h1>
						<p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
							From checkout to global sales tax compliance, companies around the
							world use Flowbite to simplify their payment stack.
						</p>
						<Link
							to='/'
							className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
						>
							Get started
							<svg
								className='w-5 h-5 ml-2 -mr-1'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
						</Link>
						<Link
							to='/'
							className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
						>
							Speak to Sales
						</Link>
					</div>
					<div className=' lg:mt-0 lg:col-span-5 lg:flex'>
						<img
							src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png'
							alt='mockup'
						/>
					</div>
				</div>
			</section>
			<section className='bg-white dark:bg-gray-900'>
				<div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
					<div className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
						<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
							We didn't reinvent the wheel
						</h2>
						<p className='mb-4'>
							We are strategists, designers and developers. Innovators and
							problem solvers. Small enough to be simple and quick, but big
							enough to deliver the scope you want at the pace you need. Small
							enough to be simple and quick, but big enough to deliver the scope
							you want at the pace you need.
						</p>
						<p>
							We are strategists, designers and developers. Innovators and
							problem solvers. Small enough to be simple and quick.
						</p>
					</div>
					<div className='grid grid-cols-2 gap-4 mt-8'>
						<img
							className='w-full rounded-lg'
							src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
							alt='office content 1'
						/>
						<img
							className='mt-4 w-full lg:mt-10 rounded-lg'
							src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png'
							alt='office content 2'
						/>
					</div>
				</div>
			</section>
			<section className='bg-white dark:bg-gray-900'>
				<div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
					<div className='max-w-screen-md mb-8 lg:mb-16'>
						<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
							Designed for business teams like yours
						</h2>
						<p className='text-gray-500 sm:text-xl dark:text-gray-400'>
							Here at Flowbite we focus on markets where technology, innovation,
							and capital can unlock long-term value and drive economic growth.
						</p>
					</div>
					<div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
						<div>
							<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
								<svg
									className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z'
										clipRule='evenodd'
									></path>
								</svg>
							</div>
							<h3 className='mb-2 text-xl font-bold dark:text-white'>
								Marketing
							</h3>
							<p className='text-gray-500 dark:text-gray-400'>
								Plan it, create it, launch it. Collaborate seamlessly with all
								the organization and hit your marketing goals every month with
								our marketing plan.
							</p>
						</div>
						<div>
							<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
								<svg
									className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z'></path>
								</svg>
							</div>
							<h3 className='mb-2 text-xl font-bold dark:text-white'>Legal</h3>
							<p className='text-gray-500 dark:text-gray-400'>
								Protect your organization, devices and stay compliant with our
								structured workflows and custom permissions made for you.
							</p>
						</div>
						<div>
							<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
								<svg
									className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z'
										clipRule='evenodd'
									></path>
									<path d='M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z'></path>
								</svg>
							</div>
							<h3 className='mb-2 text-xl font-bold dark:text-white'>
								Business Automation
							</h3>
							<p className='text-gray-500 dark:text-gray-400'>
								Auto-assign tasks, send Slack messages, and much more. Now power
								up with hundreds of new templates to help you get started.
							</p>
						</div>
						<div>
							<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
								<svg
									className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z'></path>
									<path
										fillRule='evenodd'
										d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z'
										clipRule='evenodd'
									></path>
								</svg>
							</div>
							<h3 className='mb-2 text-xl font-bold dark:text-white'>
								Finance
							</h3>
							<p className='text-gray-500 dark:text-gray-400'>
								Audit-proof software built for critical financial operations
								like month-end close and quarterly budgeting.
							</p>
						</div>
						<div>
							<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
								<svg
									className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z'></path>
								</svg>
							</div>
							<h3 className='mb-2 text-xl font-bold dark:text-white'>
								Enterprise Design
							</h3>
							<p className='text-gray-500 dark:text-gray-400'>
								Craft beautiful, delightful experiences for both marketing and
								product with real cross-company collaboration.
							</p>
						</div>
						<div>
							<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
								<svg
									className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
										clipRule='evenodd'
									></path>
								</svg>
							</div>
							<h3 className='mb-2 text-xl font-bold dark:text-white'>
								Operations
							</h3>
							<p className='text-gray-500 dark:text-gray-400'>
								Keep your company’s lights on with customizable, iterative, and
								structured workflows built for all efficient teams and
								individual.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='bg-white dark:bg-gray-900'>
				<div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'>
					<img
						className='w-full dark:hidden'
						src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg'
						alt='dashboard image'
					/>
					<img
						className='w-full hidden dark:block'
						src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg'
						alt='dashboard image'
					/>
					<div className='mt-4 md:mt-0'>
						<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
							Let's create more tools and ideas that brings us together.
						</h2>
						<p className='mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400'>
							Flowbite helps you connect with friends and communities of people
							who share your interests. Connecting with your friends and family
							as well as discovering new ones is easy with features like Groups.
						</p>
						<Link
							to='#'
							className='inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900'
						>
							Get started
							<svg
								className='ml-2 -mr-1 w-5 h-5'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
						</Link>
					</div>
				</div>
			</section>
			<section className='bg-white dark:bg-gray-900'>
				<div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
					<div className='mx-auto max-w-screen-sm text-center'>
						<h2 className='mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white'>
							Start your free trial today
						</h2>
						<p className='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
							Try Flowbite Platform for 30 days. No credit card required.
						</p>
						<Link
							to='/'
							className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
						>
							Free trial for 30 days
						</Link>
					</div>
				</div>
				<section className='text-gray-600 body-font'>
					<div className='container px-5 py-24 mx-auto flex flex-wrap items-center'>
						<div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0'>
							<h1 className='title-font font-medium text-3xl text-white'>
								Subscribe to hear about our amazing offers
							</h1>
						</div>
						<div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
							<h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
								Fill Form To Subscribe
							</h2>
							<div className='relative mb-4'>
								<label
									htmlFor='full-name'
									className='leading-7 text-sm text-gray-600'
								>
									Full Name
								</label>
								<input
									type='text'
									id='full-name'
									name='full-name'
									className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								/>
							</div>
							<div className='relative mb-4'>
								<label
									htmlFor='email'
									className='leading-7 text-sm text-gray-600'
								>
									Email
								</label>
								<input
									type='email'
									id='email'
									name='email'
									className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								/>
							</div>
							<button className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
								Submit
							</button>
							<p className='text-xs text-gray-500 mt-3'>
								Get amazing offers in your inbox
							</p>
						</div>
					</div>
				</section>
			</section>
			<footer className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
					<div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
						<Link className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
								viewBox='0 0 24 24'
							>
								<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
							</svg>
							<span className='ml-3 text-xl'>Tailblocks</span>
						</Link>
						<p className='mt-2 text-sm text-gray-500'>
							Air plant banjo lyft occupy retro adaptogen indego
						</p>
					</div>
					<div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
						<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
							<h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
								CATEGORIES
							</h2>
							<nav className='list-none mb-10'>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										First Link
									</Link>
								</li>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										Second Link
									</Link>
								</li>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										Third Link
									</Link>
								</li>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										Fourth Link
									</Link>
								</li>
							</nav>
						</div>
						<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
							<h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
								CATEGORIES
							</h2>
							<nav className='list-none mb-10'>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										First Link
									</Link>
								</li>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										Second Link
									</Link>
								</li>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										Third Link
									</Link>
								</li>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										Fourth Link
									</Link>
								</li>
							</nav>
						</div>
						<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
							<h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
								CATEGORIES
							</h2>
							<nav className='list-none mb-10'>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										First Link
									</Link>
								</li>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										Second Link
									</Link>
								</li>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										Third Link
									</Link>
								</li>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										Fourth Link
									</Link>
								</li>
							</nav>
						</div>
						<div className='lg:w-1/4 md:w-1/2 w-full px-4'>
							<h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
								CATEGORIES
							</h2>
							<nav className='list-none mb-10'>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										First Link
									</Link>
								</li>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										Second Link
									</Link>
								</li>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										Third Link
									</Link>
								</li>
								<li>
									<Link className='text-gray-600 hover:text-gray-800'>
										Fourth Link
									</Link>
								</li>
							</nav>
						</div>
					</div>
				</div>
				<div className='bg-gray-100'>
					<div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
						<p className='text-gray-500 text-sm text-center sm:text-left'>
							© 2020 Tailblocks —
							<Link
								to='https://twitter.com/knyttneve'
								rel='noopener noreferrer'
								className='text-gray-600 ml-1'
								target='_blank'
							>
								@knyttneve
							</Link>
						</p>
						<span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
							<Link className='text-gray-500'>
								<svg
									fill='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-5 h-5'
									viewBox='0 0 24 24'
								>
									<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
								</svg>
							</Link>
							<Link className='ml-3 text-gray-500'>
								<svg
									fill='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-5 h-5'
									viewBox='0 0 24 24'
								>
									<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
								</svg>
							</Link>
							<Link className='ml-3 text-gray-500'>
								<svg
									fill='none'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-5 h-5'
									viewBox='0 0 24 24'
								>
									<rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
									<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
								</svg>
							</Link>
							<Link className='ml-3 text-gray-500'>
								<svg
									fill='currentColor'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='0'
									className='w-5 h-5'
									viewBox='0 0 24 24'
								>
									<path
										stroke='none'
										d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
									></path>
									<circle cx='4' cy='4' r='2' stroke='none'></circle>
								</svg>
							</Link>
						</span>
					</div>
				</div>
			</footer>
		</div>
	);
};
