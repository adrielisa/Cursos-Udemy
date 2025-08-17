"use strict";
(() => {
    class UT {
        age;
        name;
        realName;
        power(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
