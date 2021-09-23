module.exports = {
    devServer: function(configFunction) {
      
        console.log("adding headers...")
        return function(proxy, allowedHost) {
            const config = configFunction(proxy, allowedHost)
            config.headers = {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            }
            return config
        }
    }
}