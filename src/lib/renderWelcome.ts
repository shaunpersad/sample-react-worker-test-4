import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import Welcome from '../views/Welcome';

export default function renderWelcome() {
	const html = renderToString(createElement(Welcome));
	return `
		<!doctype html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>Welcome</title>
			</head>
			<body>
				${html}
			</body>
		</html>
	`;
}
