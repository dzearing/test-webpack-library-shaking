import { BaseComponent } from 'test-utils';

var Spinner = /** @class */ (function (_super) {
  function Spinner() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Spinner.prototype.render = function () {
    console.log('I am a Spinner');
  };

  return Spinner;
}(BaseComponent));

export { Spinner };