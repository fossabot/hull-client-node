"use strict";
/* global require, console*/

var gulp = require("gulp");
var path = require("path");

var config = {
  src: "src",
  dest: "lib",
  spec: ["spec/*"]
};

require("./tasks/clean")(gulp, config.dest);
require("./tasks/build")(gulp, config.src, config.dest);
require("./tasks/test")(gulp, config.spec);

gulp.task("default", ["clean", "build", "tests:watch"]);
gulp.task("prepublish", ["clean", "build"]);

gulp.task("watch", function watch() {
  gulp.watch(config.src + "/**", ["build"]);
});
