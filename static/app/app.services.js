(() => {
    'use strict';
    angular
        .module('app.services', [])
        .factory('services', services);

    function services() {


        function carbon() {
            $(document).ready(function() {
                /**
                 * Sidebar Dropdown
                 */
                $('.nav-dropdown-toggle').on('click', function(e) {
                    e.preventDefault();
                    $(this).parent().toggleClass('open');
                });

                // open sub-menu when an item is active.
                $('ul.nav').find('a.active').parent().parent().parent().addClass('open');

                /**
                 * Sidebar Toggle
                 */
                $('.sidebar-toggle').on('click', function(e) {
                    e.preventDefault();
                    $('body').toggleClass('sidebar-hidden');
                });

                /**
                 * Mobile Sidebar Toggle
                 */
                $('.sidebar-mobile-toggle, li.nav-item>a[ui-sref]').on('click', function() {
                    $('body').toggleClass('sidebar-mobile-show');
                    $('body').hasClass('sidebar-mobile-show') ? $('div#sidebar-dismiss').addClass('sidebar-dismiss') : $('div#sidebar-dismiss').removeClass('sidebar-dismiss');
                });

                $('div#sidebar-dismiss').on('click', function() {
                    // if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
                    if ($('body').hasClass('sidebar-mobile-show')) {
                        $('body').toggleClass('sidebar-mobile-show');
                        $('div#sidebar-dismiss').removeClass('sidebar-dismiss')
                    }
                    // }
                });
            });
        }

        return {
            carbon,
        }
    };
})();