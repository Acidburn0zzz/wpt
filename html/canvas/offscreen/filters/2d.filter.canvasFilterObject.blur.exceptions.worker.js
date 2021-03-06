// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.filter.canvasFilterObject.blur.exceptions
// Description:Test exceptions on CanvasFilter() blur.object
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Test exceptions on CanvasFilter() blur.object");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

assert_throws_js(TypeError, function() { ctx.filter = new CanvasFilter({blur: null}); });
assert_throws_js(TypeError, function() { ctx.filter = new CanvasFilter({blur: {}}); });
assert_throws_js(TypeError, function() { ctx.filter = new CanvasFilter({blur: {stdDevation: null}}); });
assert_throws_js(TypeError, function() { ctx.filter = new CanvasFilter({blur: {stdDeviation: "foo"}}); });
t.done();

});
done();
