var Label = /** @class */ (function (_super) {
  function Label() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Label.prototype.render = function () {
    console.log('I am a Label');
  };

  return Label;
})();

export { Label };