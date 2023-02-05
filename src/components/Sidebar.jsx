import React from 'react';
import { useSelector } from 'react-redux';

const links = ['Dashboard', 'Ecommerce', 'Super market', 'Long vision'];

const Sidebar = () => {
	const globalOptions = useSelector((state) => state.global);
	console.log(
		'🚀 ~ file: Sidebar.jsx:8 ~ Sidebar ~ globalOptions',
		globalOptions
	);
	const { showSidebar } = globalOptions;
	return (
		<div
			className={`w-[300px] bg-white rounded shadow fixed top-5 left-5 bottom-5 transition-all ${
				showSidebar ? '' : '-translate-x-[200%]'
			}`}
		>
			{links &&
				links.length > 0 &&
				links.map((link) => (
					<div className="p-4 cursor-pointer hover:bg-gray-50" key={link}>
						{link}
					</div>
				))}
		</div>
	);
};

export default Sidebar;