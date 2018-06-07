const DEFAULT_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/g;

export default class AppPasswordValidator {
    constructor() {
        this.require = 'ngModel';
        this.restrict = 'A';
        this.scope = {
            password: '=',
            passwordRegex: '=?'
        };
    }

    link(scope, element, attributes, ngModel) {
        ngModel.$validators.passswordValidator = (modelValue) => {
            return modelValue && modelValue.match(scope.passwordRegex || DEFAULT_REGEX);
        };

        scope.$watch('ngModel', function() {
            ngModel.$validate();
        });
    }
}
