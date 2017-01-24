define([], function (){
    'use strict';


    /**
     * List of settings for history requests
     * @constructor
     * @param ParsingJsonService
     */
    function RequestsSettingsModel(name, ParsingJsonService, RequestsSettingsService) {

        var self = this;

        self.name = name;
        self.data = {
            requestsCount: 10000,
            saveReceived: true,
            fillWithReceived: true,
            saveResponseData: true,
        };

        self.loadFromStorage = loadFromStorage;
        self.saveToStorage = saveToStorage;
        self.clone = clone;
        self.setData = setData;

        /**
         *
         */
        function setData(data) {
            angular.forEach(self.data, function (val, key){
                self.data[key] = data[key];
            });
        }

        /**
         * Create copy of this object
         */
        function clone() {
            var result = self.name === 'yangman_historySettings' ?
                RequestsSettingsService.createHistorySettings() :
                RequestsSettingsService.createCollectionsSettings();
            result.setData(self.data);
            return result;
        }


        /**
         * Loading from localStorage
         */
        function loadFromStorage(){
            var settings = localStorage.getItem(self.name);

            if (settings){
                angular.forEach(ParsingJsonService.parseJson(settings), function (value, key){
                    self.data[key] = value;
                });
            }

            return self;
        }

        /**
         * Saving to local storage
         */
        function saveToStorage(){
            console.debug('saving settings', self);

            try {
                localStorage.setItem(self.name, JSON.stringify(self.data));
            } catch (e) {
            }
        }

    }

    return RequestsSettingsModel;
});
