Package.describe({
  summary: "Timezone support for moment.js, packaged for Meteor. See http://momentjs.com/timezone. Currently includes all timezone data files."
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  api.use("moment", where);
  if (api.imply) {
    api.imply("moment", where);
  }
  api.add_files('require-shim.js', 'server');
  api.add_files('lib/moment-timezone/moment-timezone.js', where);
  api.add_files('load_tz_data.js', where);
  api.add_files('revert-require-shim.js', 'server');
});
