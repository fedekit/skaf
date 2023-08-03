import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import shebang from 'rollup-plugin-preserve-shebang';

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
    shebang({
      shebang: '#!/usr/bin/env node',
    }),
  ],
});
