function ContactCtrl(ContactService, $scope) {
    'ngInject';

    // ViewModel
    const vm = this;
    vm.sent = false;
    vm.error = false;

    vm.send = function () {
        ContactService.send({
            name: vm.name,
            _replyto: vm.email,
            phone: vm.phone,
            comments: vm.comments
        }).then(function () {
            $scope.$apply(function(){
                vm.sent = true;
                vm.error = false
            });
        }, function () {
            $scope.$apply(function() {
                vm.sent = false;
                vm.error = true;
            });
        });
    };
}

export default {
    name: 'ContactCtrl',
    fn: ContactCtrl
};
