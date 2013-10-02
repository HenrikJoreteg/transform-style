// figure out what the right transform name is and cache it
var style = document.createElement('div').style;
var res;

['transform', 'webkitTransform', 'MozTransform', 'oTransform', 'msTransform'].some(function (name) {
    if (name in style) {
        res = name;
        return true;
    }
});

// take an element and apply the style
module.exports = function (el, style, additive) {
    if (additive) {
        el.style[res] += ' ' + style;
    } else {
        el.style[res] = style;
    }
    return el;
};
