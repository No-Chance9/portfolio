import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  // Optionnel, mais prêt si tu rajoutes d'autres trucs plus tard
  extension: /\.mdx?$/,
});

const nextConfig = {
  // Indique à Next qu'il peut traiter les .mdx comme des pages/composants
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
};

export default withMDX(nextConfig);