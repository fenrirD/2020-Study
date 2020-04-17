// eslint-disable-next-line no-undef
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development', // 개발용 production 최적화   development 빠른 빌드
    entry: './src/index.js', // 빌드할 파일
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }, // 컴파일 + 번들링된  js 파일이 저장할 경로와 이름 지정
    module: {
        rules: [
            //html - loader
            {
                test: /\.html$/, // 가져올 파일 정규식.
                use: {
                    loader: 'html-loader', // 사용할 로더
                    options: {
                        minimize : true
                    }
                }
            },
            {
                test: /\.js$/, // 가져올 파일 정규식.
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_moudles/,
                use: {
                    loader: 'babel-loader', // 사용할 로더
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react",],
                        plugins: ["@babel/plugin-proposal-class-properties"]

                    }
                },

            },
            {
                test: /\.scss$/,
                use: [ 'style-loader','css-loader',

                    'sass-loader',]
            }

        ],

    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        }),
       /* new MiniCssExtractPlugin({
            filename: 'style.css'
        }),*/


    ]
}
