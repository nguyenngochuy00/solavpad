// import SolLogo from 'src/components/molecules/logo';
// import SolSidebarItem from 'src/components/molecules/sidebar-item';
import SolLogo from '../../../molecules/logo';
import SolSidebarItem from '../../../molecules/sidebar-item';
import './index.scss';

type Menu = {
	disabled?: boolean;
	icon?: JSX.Element;
	text?: string;
	url?: string;
};

type Props = {
	expanded?: boolean;
	siteUrl?: string;
	siteTitle?: string;
	logoImage?: string;
	menus?: Menu[];
	activeMenu?: string;
	isDarkMode?: boolean;
	onMenuClick: (menu: Menu) => void;
	onToggleMode?: () => void;
	onLogoClick?: () => void;
	onOverlayClick?: () => void;
};

const { version } = require('../../../../../package.json');

const SolSidebar = ({
	expanded,
	siteUrl,
	siteTitle,
	logoImage,
	menus = [],
	activeMenu = '',
	isDarkMode,
	onMenuClick,
	onToggleMode,
	onLogoClick,
	onOverlayClick
}: Props) => {
	return (
		<>
			<div className={`sol-sidebar ${expanded ? 'show' : ''}`}>
				<SolLogo
					onClick={onLogoClick}
					siteUrl={siteUrl}
					siteTitle={siteTitle}
					logoImage={logoImage}
				/>
				<div className="sol-sidebar-menu">
					{menus.map((menu, index) => (
						<SolSidebarItem
							key={index}
							disabled={menu.disabled}
							icon={menu.icon}
							text={menu.text}
							active={menu.url === activeMenu}
							onClick={() => onMenuClick(menu)}
						/>
					))}
				</div>

				<SolSidebarItem
					icon={
						isDarkMode ? (
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12 19.25C8 19.25 4.75 16 4.75 12C4.75 8 8 4.75 12 4.75C16 4.75 19.25 8 19.25 12C19.25 16 16 19.25 12 19.25ZM12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 15.17 8.83 17.75 12 17.75C15.17 17.75 17.75 15.17 17.75 12C17.75 8.83 15.17 6.25 12 6.25Z"
									fill="currentColor"
								/>
								<path
									d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z"
									fill="currentColor"
								/>
							</svg>
						) : (
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2.03003 12.42C2.39003 17.57 6.76003 21.76 11.99 21.99C15.68 22.15 18.98 20.43 20.96 17.72C21.78 16.61 21.34 15.87 19.97 16.12C19.3 16.24 18.61 16.29 17.89 16.26C13 16.06 9.00003 11.97 8.98003 7.13996C8.97003 5.83996 9.24003 4.60996 9.73003 3.48996C10.27 2.24996 9.62003 1.65996 8.37003 2.18996C4.41003 3.85996 1.70003 7.84996 2.03003 12.42Z"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						)
					}
					onClick={onToggleMode}
				/>
				<div style={{marginLeft: '7px', marginBottom: '7px'}}>
					<span className="text-white">Version: {version}</span>
				</div>
			</div>
			<div onClick={onOverlayClick} className="sol-sidebar-overlay">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M23.7072 0.293153C23.5196 0.105682 23.2653 0.000366211 23.0002 0.000366211C22.735 0.000366211 22.4807 0.105682 22.2932 0.293153L12.0002 10.5862L1.70715 0.293153C1.51963 0.105682 1.26532 0.000366211 1.00015 0.000366211C0.734988 0.000366211 0.48068 0.105682 0.293153 0.293153C0.105682 0.48068 0.000366211 0.734988 0.000366211 1.00015C0.000366211 1.26532 0.105682 1.51963 0.293153 1.70715L10.5862 12.0002L0.293153 22.2932C0.105682 22.4807 0.000366211 22.735 0.000366211 23.0002C0.000366211 23.2653 0.105682 23.5196 0.293153 23.7072C0.48068 23.8946 0.734988 23.9999 1.00015 23.9999C1.26532 23.9999 1.51963 23.8946 1.70715 23.7072L12.0002 13.4142L22.2932 23.7072C22.4807 23.8946 22.735 23.9999 23.0002 23.9999C23.2653 23.9999 23.5196 23.8946 23.7072 23.7072C23.8946 23.5196 23.9999 23.2653 23.9999 23.0002C23.9999 22.735 23.8946 22.4807 23.7072 22.2932L13.4142 12.0002L23.7072 1.70715C23.8946 1.51963 23.9999 1.26532 23.9999 1.00015C23.9999 0.734988 23.8946 0.48068 23.7072 0.293153Z"
						fill="#fff"
					/>
				</svg>
			</div>
		</>
	);
};
export default SolSidebar;
