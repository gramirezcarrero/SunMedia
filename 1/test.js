var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
};

var wb = {
    white: "#FFFFFF",
    black: "#000000"
};

var colors_original = Object.assign(rgb, wb);
var colors = {...rgb, ...wb}

//For ie 11
var objs = [rgb, wb],
    result =  objs.reduce(function (r, o) {
        Object.keys(o).forEach(function (k) {
            r[k] = o[k];
        });
        return r;
    }, {});

 module.exports = { colors_original, colors, result };