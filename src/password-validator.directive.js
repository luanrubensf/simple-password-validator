export default class AppPasswordValidator {
    constructor() {
        this.require = 'ngModel';
        this.restrict = 'A';
        this.scope = {
            password: '='
        };
    }

    link(scope, element, attributes, ngModel) {
        ngModel.$validators.passswordValidator = (modelValue) => {
            return modelValue && modelValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/g);
        };

        scope.$watch('ngModel', function() {
            ngModel.$validate();
        });
    }
}
