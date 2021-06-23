"use strict";

System.register(["babel-polyfill"], function (_export, _context) {
    "use strict";

    var promise;
    return {
        setters: [function (_babelPolyfill) {}],
        execute: function () {
            promise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (Math.round(Math.random()) === 1) {
                        resolve("Success!");
                    } else {
                        reject("Fail!");
                    }
                }, 1000);
            });


            promise.then(function (successMessage) {
                console.log("Yes! " + successMessage);
            }).catch(function (failMessage) {
                console.log("No! " + failMessage);
            });
        }
    };
});