require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
    ]
  },
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || []     
    
    config.plugins = [                                                            
      ...config.plugins,                                                          
       new Dotenv({                                                                
           path: path.join(__dirname, '.env'),                                       
           systemvars: true                                                          
         })                                                               
     ]                                                                                     

    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
        path: false,
        os: false,
      }
    }

    return config
  },
  reactStrictMode: true,
}
