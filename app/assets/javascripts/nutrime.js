App = angular.module('Nutrime', ['mobile-angular-ui']);

App.config(function($httpProvider) {
  var csrfToken = document.getElementsByName('csrf-token')[0];
  if (csrfToken) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = csrfToken.content;
  }

  $httpProvider.defaults.headers.common.Accept = 'application/json';
});
