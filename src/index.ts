/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
}

import { getDate } from './date';

import { Router } from 'itty-router'

// Create a new router
const router = Router()

/*
Our index route, a simple hello world.
*/
router.get("/", () => {
	return new Response("Hello, world! This is the root page of your Worker template.")
})




router.get('/date', ({ }) => {
	return new Response(getDate());
})
/*
This shows a different HTTP method, a POST.
Try send a POST request using curl or another tool.
Try the below curl command to send JSON:
$ curl -X POST <worker> -H "Content-Type: application/json" -d '{"abc": "def"}'
*/
router.post("/post", async request => {
	// Create a base object with some fields.
	let fields = {
		"asn": request.cf.asn,
		"colo": request.cf.colo,
		"json": request.cf.json,
	}

	// If the POST data is JSON then attach it to our response.
	if (request.headers.get("Content-Type") === "application/json") {
		fields["json"] = await request.json()
	}

	// Serialise the JSON to a string.
	const returnData = JSON.stringify(fields, null, 2);

	return new Response(returnData, {
		headers: {
			"Content-Type": "application/json"
		}
	})
})

/*
This is the last route we define, it will match anything that hasn't hit a route we've defined
above, therefore it's useful as a 404 (and avoids us hitting worker exceptions, so make sure to include it!).
Visit any page that doesn't exist (e.g. /foobar) to see it in action.
*/
router.all("*", () => new Response("404, not found!", { status: 404 }))

/*
This snippet ties our worker to the router we deifned above, all incoming requests
are passed to the router where your routes are called and the response is sent.
*/
addEventListener('fetch', (e) => {
	e.respondWith(router.handle(e.request))
})
