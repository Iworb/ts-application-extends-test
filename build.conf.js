module.exports = {
    module: {
        name: 'application',
        styles: 'index',
        export: 'application',
        standalone: 'application'
    },
    build: {
        js: false,
        ts: false,
        tsd: true,
        bundle: true,
        html: true,
        sass: true,
        lib: true,
        images: true,
        dist: true
    },
    file: {
        lib: [
            '../ts-library-extends-test/dist/**/*'
        ]
    },
    samples: {
        port: 8197,
        https: false
    },
    api: {
        port: 8198
    },
    app: {
        port: 8900,
        https: false
    }
};
