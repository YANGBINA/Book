define(["jquery", "handlebars"], function($, hand) {
    var sethtml = function(text, data, parent) {
        var fun = hand.compile(text);
        $(parent).append(fun(data));
    };
    return sethtml;
});