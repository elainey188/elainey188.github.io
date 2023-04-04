module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        options: { plugins: ['transform-class-properties']},
        exclude: /node_modules/
      }
    ]
  }
