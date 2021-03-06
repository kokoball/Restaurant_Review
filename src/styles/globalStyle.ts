import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { theme } from '@styles';

const globalStyle = createGlobalStyle`
		@font-face {
		font-family: 'Apple SD Gothic Neo';
		font-style: normal;
		font-weight: 400;
		src: local('AppleSDGothicNeoM00')
	}

	${reset}
	* {
		box-sizing: border-box;
		margin: 0;
	}
	html, body {
		color: ${theme.colors.primary};
		background-color: #fff;
		font-family: 'Apple SD Gothic Neo',system-ui, Dotum,'돋움', Helvetica, sans-serif; 
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	ol, ul, li {
		list-style: none;
	}
	img {
		display: block;
		width: 100%;
		height: 100%;
	}
	button {
		display: inline-block;
		background: transparent;
		border: none;
		cursor: pointer;
	}	
`;

export default globalStyle;
