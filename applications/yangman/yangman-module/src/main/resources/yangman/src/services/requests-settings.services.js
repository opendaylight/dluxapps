define([
    'app/yangman/models/requests-settings.model',
],
    function (RequestsSettingsModel) {
        'use strict';

        angular.module('app.yangman').service('RequestsSettingsService', RequestsSettingsService);

        RequestsSettingsService.$inject = ['ParsingJsonService'];

        /**
         * Service for history settings, used for creating SettingsModel and dependency injection
         * @param ParsingJsonService
         * @returns {{}}
         * @constructor
         */
        function RequestsSettingsService(ParsingJsonService){

            var service = {};

            service.createHistorySettings = createHistorySettings;
            service.createCollectionsSettings = createCollectionsSettings;

            return service;

            /**
             * Service for creating collections settings object
             */
            function createCollectionsSettings() {
                var result = new RequestsSettingsModel('yangman_collectionsSettings', ParsingJsonService, service);
                return result;
            }


            /**
             * Service for creating settings object
             * @param name used as name in local storage
             * @returns {*}
             */
            function createHistorySettings(){
                var result = new RequestsSettingsModel('yangman_historySettings', ParsingJsonService, service);
                return result;
            }



        }

    });
