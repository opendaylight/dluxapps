/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
    build_dir: 'build',
    app_dir: 'app',

    app_files: {
        js: [
            'src/*/**/*.js',
            '!node/**/*.*',
            '!node_modules/**/*.*',
            '!src/vendor/**/*.*',
        ],
        root_js: [
            'src/yangvisualizer.controller.js',
            'src/yangvisualizer.module.js',
            'src/yangvisualizer.services.js',
        ],
        less: [
            'src/*.less'
        ],
        img: [
            'src/assets/images/*.*',
        ],
        templates: [
            'src/*/**/*.tpl.html',
            'src/*.tpl.html',
        ],
    },

    assets_files: {
        data: ['src/assets/data/*.*'],
    },

    vendor_files: {
        js: [

        ],
        css: [

        ],
        fonts: [

        ],
    },
};
