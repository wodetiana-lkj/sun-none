/*
    webpack.config.js配置文件
*/

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build'),
        //webpack不主动使用箭头函数
        environment: {
            arrowFunction: false
        }
    },

    //loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    //创建style标签，将js中得样式资源出入添加到head中
                    'style-loader',
                    //css 变成 commonjs模块加载js
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                //url-loader file-loader
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 100 * 1024
                },
            },
            {
                test: /\.ts$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        //特别设置预环境
                        presets: [
                            "@babel/preset-env",
                            {
                                //需要兼容的浏览器
                                targets: {
                                    'chrome': '88',
                                    'firefox': '88'
                                },
                                //指定corejs版本
                                'corejs': '3',
                                //使用到了才适配
                                'useBuiltIns': 'usage'
                            }
                        ]
                    }
                },
                    'ts-loader'
                ]
            }
        ]
    },

    //plugins
    plugins: [
        //插件配置
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'heihie'
        }),
        new WebpackCleanPlugin(),
    ],
    mode: 'development',
    // mode: 'production'
    //设置模块引用类型
    resolve: {
        extensions: ['.ts', '.js']
    }
}