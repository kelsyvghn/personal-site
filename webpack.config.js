const path = require('path');

module.exports = {
  entry: {
    home: path.join(__dirname,'client/app.jsx'),
    about: path.join(__dirname,'client/pages/about/AboutMe.jsx'),
    projects: path.join(__dirname,'client/pages/projects/RecentProjects.jsx'),
    contributions: path.join(__dirname,'client/pages/contributions/Contributions.jsx'),
    writings: path.join(__dirname,'client/pages/writings/Writings.jsx'),
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          loader: 'style-loader',
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          query: {
            modules: true,
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
          {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/public/bundles'),
  },
};