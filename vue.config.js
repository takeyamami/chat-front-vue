module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  
  outputDir: '../backend/chat/src/main/resources/static',
  indexPath: '/index.html',
  devServer: {
       host: 'localhost',
       port: 8080
   }
}
