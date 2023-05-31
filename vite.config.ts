import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from '@svgr/rollup';
import virtual from 'rollup-plugin-virtual';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  plugins: [
    reactRefresh(),
    svgr(),
    react(),
    virtual({
      'react/jsx-runtime': 'export default {}',
    }),
    nodeResolve(),
  ],
};
