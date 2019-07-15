const path = require('path');

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: 'vue-template-loader',
          exclude: /index.html/,
        },
        {
          test: /\.less$/,
          use: ['less-loader', {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                path.resolve(__dirname, './src/styleOptions/*.less'),
              ],
              injector: 'append'
            }
          }],
        }, {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
                transpileOnly: true // used with ForkTsCheckerWebpackPlugin
              },
            }
          ],
        }
      ]
    }
  },
};
