const path = require('path');
module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: [
    // '@storybook/addon-a11y',
    // '@storybook/addon-actions',
    // '@storybook/addon-backgrounds',
    // '@storybook/addon-cssresources',
    // '@storybook/addon-design-assets',
    '@storybook/addon-docs'
    // '@storybook/addon-controls',
    // '@storybook/addon-jest',
    // '@storybook/addon-centered',
    // '@storybook/addon-links',
    // '@storybook/addon-contexts/register',
    // '@storybook/preset-typescript',
    // '@storybook/addon-knobs/register'
    // {
    // 	name: '@storybook/addon-docs/register',
    // 	options: {
    // 		configureJSX: true,
    // 		babelOptions: {},
    // 		sourceLoaderOptions: null
    // 	}
    // }
  ],
  webpackFinal: async config => {
    const sassRegex = /\.(scss|sass)$/;
    const sassModuleRegex = /\.module\.(scss|sass)$/;
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            // Provide the path to your tsconfig.json so that your stories can
            // display types from outside each individual story.
            tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
            shouldExtractLiteralValuesFromEnum: true,
            savePropValueAsString: true
          }
        }
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: sassRegex,
      exclude: sassModuleRegex,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });
    config.module.rules.push({
      test: sassModuleRegex,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 2,
            esModule: true
          }
        },
        'sass-loader'
      ],
      include: path.resolve(__dirname, '../')
    });

    return config;
  }
};
