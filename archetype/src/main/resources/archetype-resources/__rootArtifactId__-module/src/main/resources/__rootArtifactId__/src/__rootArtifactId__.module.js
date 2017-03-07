/*
 * Copyright (c) 2015 Cisco Systems, Inc. and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define([
    'angular',
    'app/routingConfig',
    'app/core/core.services',
    'common/config/env.module'
], function () {
    'use strict';

    angular.module('app.${rootArtifactId}', [
        'app.core',
        'ui.router.state',
        'config'
    ]);

    angular.module('app.${rootArtifactId}')
        .config(${rootArtifactId}Config);

    function ${rootArtifactId}Config ($stateProvider, NavHelperProvider, $translateProvider, $urlRouterProvider) {

        ${urlRouterProvider}.otherwise('/${rootArtifactId}');


        NavHelperProvider.addControllerUrl('app/${rootArtifactId}/${rootArtifactId}.controller');
        NavHelperProvider.addToMenu('${rootArtifactId}', {
            "link": "#/${rootArtifactId}",
            "active": "main.${rootArtifactId}",
            "title": "${rootArtifactId}",
            "icon": "",  // Add navigation icon css class here
            "page": {
                "title": "${rootArtifactId}",
                "description": "${rootArtifactId}"
            }
        });

        var access = routingConfig.accessLevels;

        ${stateProvider}.state('main.${rootArtifactId}', {
            url: '${rootArtifactId}',
            access: access.admin,
            views: {
                'content': {
                    templateUrl: 'src/app/${rootArtifactId}/${rootArtifactId}.tpl.html',
                    controller: '${rootArtifactId}Controller',
                    controllerAs: '${rootArtifactId}Controller'
                }
            }
        });

    };
});
