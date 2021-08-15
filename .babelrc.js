
module.exports = {
    presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
    plugins: [['styled-components', { ssr: true }]],
  }