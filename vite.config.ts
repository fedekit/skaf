import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      formats: ['es', 'cjs'],
    },
  },
  plugins: [
    dts({
      include: 'lib/**/*.ts',
      rollupTypes: true,
    }),
  ],
});
