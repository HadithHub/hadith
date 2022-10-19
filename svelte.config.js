import adapter from "@sveltejs/adapter-static";
// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const dev = "development" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" : "/HadithHub",
        },
        // hydrate the <div id="svelte"> element in src/app.html
        // target: "#svelte"
    }
};

export default config;
