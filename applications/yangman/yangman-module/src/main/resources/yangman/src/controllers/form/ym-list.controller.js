define([], function () {
    'use strict';

    angular.module('app.yangman').controller('YMListCtrl', YMListCtrl);

    YMListCtrl.$inject = ['$scope', 'ListFilteringService', 'NodeWrapperService', 'constants'];

    function YMListCtrl($scope, ListFilteringService, NodeWrapperService, constants){
        var yangList = this;

        $scope.actElement = null;
        $scope.showListFilter = false;
        $scope.filterListHover = 0;
        yangList.constants = constants;
        yangList.currentSelectedListItemIndex = 0;
        yangList.listItemsData = [];

        // methods
        $scope.activeFilter = activeFilter;
        $scope.applyFilter = applyFilter;
        $scope.clearFilterData = clearFilterData;
        $scope.createNewFilter = createNewFilter;
        $scope.getFilterData = getFilterData;
        $scope.showListFilterWin = showListFilterWin;
        $scope.showModalWin = showModalWin;
        $scope.switchFilter = switchFilter;

        yangList.addListElem = addListElem;
        yangList.getListItemName = getListItemName;
        yangList.init = init;
        yangList.isActionMenu = isActionMenu;
        yangList.removeListElem = removeListElem;
        yangList.toggleExpanded = toggleExpanded;
        yangList.changeNodeListItem = changeNodeListItem;

        function changeNodeListItem(i) {
            if ($scope.node.actElemStructure){
                $scope.node.changeActElementData(i);
            }
        }


        // WATCHERS
        $scope.$on(constants.EV_REFRESH_LIST_INDEX, function () {
            yangList.currentSelectedListItemIndex = 0;
        });

        $scope.$on(constants.YANGMAN_DISABLE_ADDING_LIST_ELEMENT, function() {
            yangList.init();
        });


        $scope.$watch('yangList.currentSelectedListItemIndex', changeNodeListItem);



        /**
         * Disable adding more then one element
         */
        function init() {
            yangList.disableAddingListElement = $scope.checkAddingListElement($scope.node);
            yangList.listItemsData = angular.copy($scope.node.listData);

            if (yangList.disableAddingListElement &&
                !$scope.node.listData.length &&
                $scope.selectedDatastore.label === constants.DATA_STORE_CONFIG) {

                yangList.addListElem();
            }

        }

        /**
         * Add element into list
         */
        function addListElem() {
            $scope.showListFilter = false;
            $scope.showModal = false;
            ListFilteringService.removeEmptyFilters($scope.node);
            $scope.node.addListElem();
            yangList.listItemsData = angular.copy($scope.node.listData);
        }

        /**
         * Remove element from list and broadcast message if it was the last one
         * @param elemIndex
         * @param fromFilter
         */
        function removeListElem(elemIndex, fromFilter) {
            $scope.node.removeListElem(elemIndex, fromFilter);

            if ($scope.node.listData.length === 0) {
                $scope.$broadcast('hideInfoBox');
            }

            yangList.listItemsData = angular.copy($scope.node.listData);
        }

        /**
         * Toggle node expanded
         */
        function toggleExpanded() {
            $scope.node.expanded = !$scope.node.expanded;
        }


        /**
         * Toggle $scope.showModal and set showListFilter to false
         */
        function showModalWin() {
            $scope.showModal = !$scope.showModal;
            if ($scope.showListFilter){
                $scope.showListFilter = !$scope.showListFilter;
            }
        }

        /**
         * Toggle showListFilter and set showModal to false and call showListFilterWin svc
         *
         */
        function showListFilterWin() {
            $scope.showListFilter = !$scope.showListFilter;
            if ($scope.showModal){
                $scope.showModal = !$scope.showModal;
            }
            ListFilteringService.showListFilterWin($scope.filterRootNode,$scope.node);
        }

        /**
         * Get filter data from ListFilteringService
         */
        function getFilterData() {
            ListFilteringService.getFilterData($scope.node);
        }

        /**
         * Switch ListFilteringService filter
         * @param showedFilter
         */
        function switchFilter(showedFilter) {
            ListFilteringService.switchFilter($scope.node, showedFilter);
        }

        /**
         * Create new ListFilteringService filter
         */
        function createNewFilter() {
            ListFilteringService.createNewFilter($scope.node);
        }

        /**
         * Apply ListFilteringService filter
         */
        function applyFilter() {
            ListFilteringService.applyFilter($scope.node);
            $scope.showListFilter = !$scope.showListFilter;
            yangList.currentDisplayIndex = 1;
            if ($scope.node.filteredListData.length){
                $scope.node.doubleKeyIndexes =
                    NodeWrapperService.checkKeyDuplicity($scope.node.filteredListData, $scope.node.refKey);
            } else {
                $scope.node.doubleKeyIndexes =
                    NodeWrapperService.checkKeyDuplicity($scope.node.listData, $scope.node.refKey);
            }
        }

        /**
         * Clear ListFilteringService data
         * @param changeAct
         * @param filterForClear
         * @param removeFilters
         */
        function clearFilterData(changeAct, filterForClear, removeFilters) {
            ListFilteringService.clearFilterData($scope.node, changeAct, filterForClear, removeFilters);
            if (changeAct){
                $scope.showListFilter = !$scope.showListFilter;
            }
            $scope.node.doubleKeyIndexes =
                NodeWrapperService.checkKeyDuplicity($scope.node.listData, $scope.node.refKey);
        }

        /**
         * Set filter.active to 2 if it is 1, else set to 1
         * @param filter
         */
        function activeFilter(filter) {
            if (filter.active === 1){
                filter.active = 2;
            } else {
                filter.active = 1;
            }
        }


        /**
         * Get list item name to use it in list
         * @param offset
         * @param config
         * @returns {*}
         */
        function getListItemName(index, config) {
            var createdListItemName = $scope.node.createListName(index);

            if (createdListItemName.length > 33 ) {
                return {
                    name: createdListItemName.substring(0, 30) + '...',
                    tooltip: createdListItemName,
                };
            }
            else {
                return {
                    name: config ? createdListItemName || '[' + (index) + ']' : createdListItemName,
                    tooltip: '',
                };
            }

        }

        /**
         * Check if it is action menu opened
         * @returns {boolean|*}
         */
        function isActionMenu() {
            return true;
        }
    }
});
