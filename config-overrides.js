const { alias } = require('react-app-rewire-alias');

module.exports = function override(config){
  alias({
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@containers': 'src/containers',
    '@hoc-helpers': 'src/hoc-helpers',
    '@services': 'src/services',
    '@utils': 'src/utils',
    '@hooks': 'src/hooks',
    '@UI': 'src/UI',
    '@PersonPage': 'src/containers/PersonPage',
    '@store': 'src/store',
    '@context': 'src/context'

  })(config);

  return config;
}