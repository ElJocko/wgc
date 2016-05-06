'use strict';

module.exports = {
    server: {
        port: process.env.PORT || 3000,
        hostname: process.env.HOSTNAME
    },
    app: {
        name: 'wgc',
        env: process.env.NODE_ENV || 'development'
    },
    security: {
        adminToken: process.env.APP_ADMIN_TOKEN
    }
};
