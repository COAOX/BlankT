"use strict";
exports.__esModule = true;
var datastream_1 = require("../lib/datastream");
var Step = /** @class */ (function () {
    function Step(user, game) {
        this.user = user;
        this.game = game;
    }
    Step.fromStream = function (ds) {
        return new Step(ds.read(), ds.read());
    };
    Step.prototype.toStream = function () {
        var length = sizeof() + sizeof();
        var arr = new Uint8Array(length);
        var ds = new datastream_1.DataStream(arr.buffer, length);
        ds.write(this.user);
        ds.write(this.game);
        return ds;
    };
    return Step;
}());
exports.Step = Step;
var Book = /** @class */ (function () {
    function Book(title) {
        this.title = title;
    }
    Book.fromStream = function (ds) {
        return new Book(ds.readString());
    };
    Book.prototype.toStream = function () {
        var length = sizeof() + sizeof();
        var arr = new Uint8Array(length);
        return new datastream_1.DataStream(arr.buffer, length);
    };
    return Book;
}());
exports.Book = Book;
var Create = /** @class */ (function () {
    function Create(user, game, num_rows, num_cols, seed) {
        this.user = user;
        this.game = game;
        this.num_rows = num_rows;
        this.num_cols = num_cols;
        this.seed = seed;
    }
    Create.fromStream = function (ds) {
        return new Create(ds.read(), ds.read(), ds.read(), ds.read(), ds.read());
    };
    return Create;
}());
exports.Create = Create;
