/**
 * Created by yeh on 15-2-6.
 */
var ani = ani || {};
ani.pj = ani.pj || {};
ani.pj.controller = ani.pj.controller || {};

ani.pj.controller.DocsCtrl = function($scope, $rootScope, $translate){
    $scope.docsIndex = ani.pj.config.docs.documents;
}