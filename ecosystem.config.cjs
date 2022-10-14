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
            instances: 'max',
            increment_var : 'PORT',
            env: {
                "PORT": 8081,
                "MODE": "DEV"
            }            
            // args: '--PORT=8081',
        }//,
        // {
        //     script: './service-worker/',
        //     watch: ['./service-worker'],
        // },
    ],
};
