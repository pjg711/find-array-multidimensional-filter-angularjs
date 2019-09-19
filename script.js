var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $filter) {
    $scope.menuses = [{"id_menu":0,"activo":1,"plantilla":"original","texto_menu":"menu_parent","texto_menu2":"menu_parent2","submenus":[{"id_menu":10,"activo":1,"texto_menu":"menu_principal","submenus":[{"id_menu":11,"activo":1,"texto_menu":"menu_inicio","submenus":[],"texto_menu2":"menu_inicio2"},{"activo":12,"id_menu":3,"texto_menu":"menu_instituto","submenus":[{"activo":1,"id_menu":4,"submenus":[],"texto_menu":"mision","texto_menu2":"mision2"},{"activo":1,"id_menu":5,"submenus":[],"texto_menu":"organizacion","texto_menu2":"organizacion2"},{"activo":1,"id_menu":5,"texto_menu":"enlaces","submenus":[{"activo":1,"id_menu":6,"submenus":[],"texto_menu":"enlace1","link":"http://www.enlace1.com.ar","texto_menu2":"enlace1a"},{"activo":1,"id_menu":7,"submenus":[],"texto_menu":"enlace2","link":"http://www.enlace2.com.ar","texto_menu2":"enlace2a"}],"texto_menu2":"enlaces2"}],"texto_menu2":"menu_instituto2"},{"id_menu":13,"activo":1,"texto_menu":"menu_videos","submenus":[],"texto_menu2":"menu_videos2"}],"texto_menu2":"menu_principal2"},{"id_menu":20,"activo":1,"texto_menu":"menu_secundario","submenus":[{"id_menu":21,"activo":1,"texto_menu":"menu_personal","submenus":[],"texto_menu2":"menu_personal2"},{"activo":1,"id_menu":22,"texto_menu":"menu_contacto","submenus":[],"texto_menu2":"menu_contacto2"},{"id_menu":23,"activo":1,"texto_menu":"menu_webmail","submenus":[],"texto_menu2":"menu_webmail2"}],"texto_menu2":"menu_secundario2"}]}];
});
app.filter('buscar_clave', ['$filter',function ($filter) {
    return function(array,valor) {
        var resultado = "";
        angular.forEach(array, function(item) {
            if( angular.isDefined( item.texto_menu ) ) {
                if( item.texto_menu == valor ) {
                    resultado = item.texto_menu;
                }
            }
            if( angular.isDefined(item.submenus) ) {
                $filter('buscar_clave')(item.submenus,valor);
            }
        });
        return resultado;
    };
}]);
