CwbNavController = () ->
  vm = @
  vm.tabs = ['BU Management','User Management','i18n']
  return

angular
  .module 'cwbApp'
  .controller 'CwbNavController', CwbNavController