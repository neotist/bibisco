/*
 * Copyright (C) 2014-2017 Andrea Feccomandi
 *
 * Licensed under the terms of GNU GPL License;
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.gnu.org/licenses/gpl-2.0.html
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY.
 * See the GNU General Public License for more details.
 *
 */
angular.
  module('bibiscoApp').
  component('buttonwithconfirm', {
    templateUrl: 'components/common/forms/button-with-confirm/button-with-confirm.html',
    controller: ButtonWithConfirmController,
    bindings: {
      buttonfunction: '&',
      buttonlabel: '@',
      buttonstyle: '@',
      confirmmessage: '@',
      enableconfirm: '<'
    }
  });


function ButtonWithConfirmController(LoggerService, PopupBoxesService) {

  LoggerService.debug('Start ButtonWithConfirmController...');

  var self = this;

  self.click = function() {
    if (self.enableconfirm) {
      PopupBoxesService.confirm(self.buttonfunction, self.confirmmessage);
    } else {
      self.buttonfunction();
    }
  };

  LoggerService.debug('End ButtonWithConfirmController...');
}
