"use strict";
exports.__esModule = true;
var slug_1 = require("./slug");
window.slugify = function (title) {
    return slug_1.create_slug(title);
};
