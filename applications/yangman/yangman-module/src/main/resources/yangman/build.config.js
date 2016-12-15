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
            'src/main.js',
            'src/yangman.module.js',
            'src/yangman.filters.js',
        ],
        less: [
            'src/*.less'
        ],
        img: [
            'src/assets/img/*.*',
        ],

        templates: [
            'src/*/**/*.tpl.html',
            'src/*.tpl.html',
        ],
    },

    assets_files: {
        less: ['src/assets/css/clusterconsole-custom.less'],
        css: ['src/assets/css/*.css'],
        data: ['src/assets/data/*.*'],
    },

    vendor_files: {
        js: [
            'angular-material/angular-material.min.js',
            'angular-animate/angular-animate.min.js',
            'angular-aria/angular-aria.min.js',
            'angular-messages/angular-messages.min.js',
            'angular-chart.js/dist/angular-chart.min.js',
            'chart.js/dist/Chart.min.js',
            'angular-material-data-table/dist/md-data-table.min.js',
            'angular-bind-notifier/dist/angular-bind-notifier.min.js',
            'angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.min.js',
        ],
        css: [
            'angular-material/angular-material.min.css',
            'roboto-fontface/css/roboto-fontface.css',
            'angular-material-data-table/dist/md-data-table.min.css',
            'bootstrap-material-design-icons/css/material-icons.min.css',
            'angular-bootstrap-colorpicker/css/colorpicker.min.css',
        ],
        fonts: [
            'roboto-fontface/fonts/*.*',
            'bootstrap-material-design-icons/fonts/*.*',
        ],
    },
};
