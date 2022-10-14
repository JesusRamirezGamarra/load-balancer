module.exports = {
    apps: [
        {
            name: 'app01',
            script: 'src/index.js',
            watch: true,
            autorestart: true,
            // instances: 4,
            // args: '--PORT=8080',
        },
        {
            name: 'app02',
            script: 'src/index.js',
            watch: true,
            autorestart: true,
            instances: '4',
            increment_var : 'PORT',
            node_args: "--harmony",
            env: {
                "PORT": 8081,
                "MODE": "DEV"
            },
            env_production: {
                NODE_ENV: "PROD"
            }                        
            // args: '--PORT=8081',
        }//,
        // {
        //     script: './service-worker/',
        //     watch: ['./service-worker'],
        // },
    ],
};
