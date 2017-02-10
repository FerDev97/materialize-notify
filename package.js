Package.describe({
  git: 'git://github.com/19peaches/materialize-notify.git',
  name: '19peaches:materialize-notify',
  summary: 'This plugin adds "Growl-like" notifications to Materialize CSS.',
  version: '1.0.1',
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');
  api.addFiles('materialize-notify.js', 'client');
});

Package.onTest(function (api) {
  api.use('19peaches:materialize-notify', 'client');
  api.use('tinytest', 'client');

  api.addFiles('test_meteor.js', 'client');
});
