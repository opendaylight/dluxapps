/*
 * Copyright (c) 2015 Cisco Systems, Inc. and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define([
    'app/${rootArtifactId}/${rootArtifactId}.service'
], function() {
    'use strict';

    angular.module('app.${rootArtifactId}').controller('${rootArtifactId}Controller', ${rootArtifactId}Controller);

    ${rootArtifactId}Controller.$inject = [
        '$scope', '$rootScope', '${rootArtifactId}Service'
    ];

    function ${rootArtifactId}Controller($scope, $rootScope, ${rootArtifactId}Service) {
        var main = this;

        $rootScope['section_logo'] = ''; // Add your topbar logo location here such as 'assets/images/logo_topology.gif'

        main.data = "${rootArtifactId}";
    };
});
