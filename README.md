# simple-password-validator

[![Build Status](https://travis-ci.org/luanrubensf/simple-password-validator.svg?branch=master)](https://travis-ci.org/luanrubensf/simple-password-validator)

Simple password validator module to AngularJs.

The password validator is implemented to require at least:
    - 1 uppercase character
    - 1 lowercase character
    - 1 digit

## How to use

Import the simple-password-validator module:

```javascript

import passwordValidator from 'simple-password-validator';

angular.module('myModule', [
    passwordValidator
]);

```

Use in the inputs tags:

```html

<input name="password" app-password-validator type="password" ng-model="vm.user.password" minlength="8" maxlength="30" required>

<input type="password" name="matchPassword" app-password-match password="vm.user.password" ng-model="vm.user.matchPassword" maxlength="30" required>

```

## Future work

- Allow the developer to pass another regex to the validator, in order to change the rules
