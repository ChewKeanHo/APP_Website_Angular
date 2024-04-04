/* Copyright 2024 (Holloway) Chew, Kean Ho <hollowaykeanho@gmail.com>
 *
 *
 * (Holloway) Chew, Kean Ho Proprietary License 1.0
 *
 * Licensed under (Holloway) Chew, Kean Ho Proprietary License (the “License”);
 * you may ONLY use this file except in compliance with the License.
 *
 * All information contained herein is, and remains the property of
 * (Holloway) Chew, Kean Ho and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to
 * (Holloway) Chew, Kean Ho and its suppliers and may be covered by Malaysia
 * Patent Law, patents in process, and are protected by trade secret or
 * copyright law. Dissemination of this information or reproduction of this
 * material is strictly forbidden unless prior written permission is obtained
 * from (Holloway) Chew, Kean Ho.
 */
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './main.server';




// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
	const server = express();
	const serverDistFolder = dirname(fileURLToPath(import.meta.url));
	const browserDistFolder = resolve(serverDistFolder, '../browser');
	const indexHtml = join(serverDistFolder, 'index.server.html');
	const commonEngine = new CommonEngine();

	server.set('view engine', 'html');
	server.set('views', browserDistFolder);
	// Example Express Rest API endpoints
	// server.get('/api/**', (req, res) => { });
	// Serve static files from /browser
	server.get('*.*', express.static(browserDistFolder, {
		maxAge: '1y'
	}));
	// All regular routes use the Angular engine
	server.get('*', (req, res, next) => {
		const { protocol, originalUrl, baseUrl, headers } = req;

		commonEngine
			.render({
				bootstrap,
				documentFilePath: indexHtml,
				url: `${protocol}://${headers.host}${originalUrl}`,
				publicPath: browserDistFolder,
				providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
			})
			.then((html) => res.send(html))
			.catch((err) => next(err));
	});

	return server;
}




function run(): void {
	const port = process.env['PORT'] || 4000;

	// Start up the Node server
	const server = app();
	server.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}
run();
