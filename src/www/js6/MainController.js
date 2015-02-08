"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var MainController = (function () {
    function MainController(searchService) {
        _classCallCheck(this, MainController);

        this.searchService = searchService;
    }

    _prototypeProperties(MainController, null, {
        search: {
            value: function search() {
                var _this = this;
                this.searchService.fetch(this.searchTerm).then(function (response) {
                    _this.items = response.data.items;
                });
            },
            writable: true,
            configurable: true
        }
    });

    return MainController;
})();

exports.MainController = MainController;
Object.defineProperty(exports, "__esModule", {
    value: true
});