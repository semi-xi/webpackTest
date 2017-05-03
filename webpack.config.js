module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[name].js',
        path:'./dist/'
    },
    //一定要写到module里面
    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader?limit=10240&name=./img/[name].[ext]'
                //不会自动创建文件夹。如果没有img则不会创建
            },
            // {test: /\.(tpl|ejs)$/, loader: 'ejs'},
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
            // { test: /\.scss$/, loader: 'style!css!sass'}
        ]
    }
}
