import { resolve } from "path"
import {defineConfig} from 'vite'


export default defineConfig({
	plugins: [],
	build: {
		rollupOptions: {
		  input: {
			main: resolve(__dirname, 'portfolio/index.html'),
			nested: resolve(__dirname, 'portfolio/project-1.html'),
			nested: resolve(__dirname, 'portfolio/project-2.html'),
			nested: resolve(__dirname, 'portfolio/project-3.html'),
			nested: resolve(__dirname, 'portfolio/project-4.html'),
			nested: resolve(__dirname, 'portfolio/project-5.html'),
			nested: resolve(__dirname, 'portfolio/project-6.html'),
		  },
		},
	  },
})