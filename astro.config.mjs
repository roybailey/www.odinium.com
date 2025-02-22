// @ts-check
import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const ORIGIN_URL = process.env.VITE_ORIGIN || 'https://www.odinium.com';

// https://astro.build/config
export default defineConfig({
    site: ORIGIN_URL,
    trailingSlash: 'ignore',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        mdx(),
        react()
    ],
});
