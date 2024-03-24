import { Outlet } from 'react-router-dom';
import './index.scss';
import React from 'react';

type SolDesktopTemplateProps = {
	sidebar: JSX.Element;
	header: JSX.Element;
};

const SolDesktopTemplate = ({ sidebar, header }: SolDesktopTemplateProps) => {
	return (
		<div className="sol-desktop-template">
			{sidebar}
			<main className="sol-main">
				{header}
				<Outlet />
			</main>
		</div>
	);
};
export default SolDesktopTemplate;
