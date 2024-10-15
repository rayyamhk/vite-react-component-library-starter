import { join, resolve } from "node:path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

import { peerDependencies } from "./package.json"
import * as path from "path"

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./lib")
		}
	},
	plugins: [react(), dts({ rollupTypes: true })],
	build: {
		target: "esnext",
		minify: false,
		lib: {
			entry: resolve(__dirname, join("lib", "index.ts")),
			fileName: "index",
			formats: ["es"]
		},
		rollupOptions: {
			external: ["react/jsx-runtime", ...Object.keys(peerDependencies)]
		}
	}
})
