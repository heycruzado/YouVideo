//Configuracion del proyecto

/**
 * requerimos el path que es un modulo de node
 * Intanciamos el plugin que intalamos
 */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * modulo a exportar con la configuracion
 */
module.exports = {
    //entrada: haremos referencia al archivo principal
    entry: './src/index.js',
    //Es donde guardaremos los archivos resultantes cuando hagamos la compilacion
    output: {
        //path: donde se va a guardar (resolve nos permite detectar el directorio donde estamos)
        path: path.resolve(__dirname, 'dist'),
        //Damos un nombre al archivo principal
        filename: 'bundle.js',
        publicPath: '/',
    },
    //resolver las extensiones que utilizaremos en el proyecto
    resolve: {
        extensions: ['.js', '.jsx']
    },
    //modulo con la reglas necesarias para el proyecto
    module: {
        //creamos las reglas
        rules: [
            {
                /**
                 * La regla principal sería la identificacion 
                 * de nuestros archivos de js o jsx            
                 */
                test: /\.(js|jsx)$/,
                //Excluimos node_modules            
                exclude: /node_modules/,
                //Usaremos el loader (babel)
                use: {
                    loader: "babel-loader"
                }
            },
            /**
             * Regla que nos permitira trabajar con archivos de 
             * html
             */
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                /**
                 * tratar elementos multimedia
                 */
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        'loader': 'file-loader',
                        //Como llamaremos a nuestro archivo
                        options: {
                            name: 'assets/[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    //Configuracion de devserver
    devServer:{
        historyApiFallback: true,
    },
    //Añadimos los plugins que necesitamos
    plugins: [
        //creamos una nueva referencia de HtmlWebPackPlugin
        new HtmlWebPackPlugin({
            //Le pasamos un objeto con la configuracion que necesitamos
            //template (ubicacion)
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            //El primer parametro es el nombre del archivo resultante
            filename: 'assets/[name].css'
        }),
    ]
}