import renderWelcome from './lib/renderWelcome';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		/**
		 * Renders a React component to a string.
		 */
		return new Response(renderWelcome(), {
			headers: {
				'content-type': 'text/html',
			},
		});
	},
} satisfies ExportedHandler<Env>;
