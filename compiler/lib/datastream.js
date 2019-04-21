"use strict";
// Credits to EOSArgentina
// https://github.com/EOSArgentina/eostypescript
exports.__esModule = true;
var string_1 = require("~lib/internal/string");
var DataStream = /** @class */ (function () {
    function DataStream(buffer, len) {
        this.buffer = buffer;
        this.len = len;
        this._pos = 0;
    }
    Object.defineProperty(DataStream.prototype, "currentPos", {
        get: function () {
            return this._pos;
        },
        enumerable: true,
        configurable: true
    });
    DataStream.prototype.skip = function (value) {
        this._pos += value;
    };
    DataStream.prototype.length = function () {
        return this.len;
    };
    DataStream.prototype.readVarint32 = function () {
        var value = 0;
        var shift = 0;
        do {
            var b = this.read();
            value |= (b & 0x7f) << (7 * shift++);
        } while (b & 0x80);
        return value;
    };
    DataStream.prototype.writeVarint32 = function (value) {
        do {
            var b = value & 0x7f;
            value >>= 7;
            b |= ((value > 0 ? 1 : 0) << 7);
            this.store(b);
        } while (value);
    };
    DataStream.prototype.store = function (value) {
        store(this.buffer + this._pos, value);
        this._pos += sizeof();
    };
    DataStream.prototype.read = function () {
        var value = load(this.buffer + this._pos);
        this._pos += sizeof();
        return value;
    };
    DataStream.prototype.readVector = function () {
        var len = this.readVarint32();
        if (len == 0)
            return [];
        var arr = new Array(len);
        for (var i = 0; i < len; i++) {
            arr[i] = read();
        }
        return arr;
    };
    DataStream.prototype.readString = function () {
        var len = this.readVarint32();
        if (len == 0)
            return "";
        var s = string_1.allocateUnsafe(len);
        var i = 0;
        while (i < len) {
            var b = this.read();
            store(s + (i << 1), b, string_1.HEADER_SIZE);
            i++;
        }
        return s;
    };
    DataStream.prototype.writeString = function (str) {
        var len = str.length;
        this.writeVarint32(len);
        if (len == 0)
            return;
        var ptr = str.toUTF8();
        len = str.lengthUTF8 - 1;
        move_memory(this.buffer + this._pos, ptr, len);
        this._pos += len;
    };
    DataStream.prototype.writeData = function (data) {
        var len = data.size();
        var ds = data.to_ds();
        move_memory(this.buffer + this._pos, changetype(ds.buffer), len);
        this._pos += len;
    };
    DataStream.prototype.reset = function () {
        this._pos = 0;
    };
    return DataStream;
}());
exports.DataStream = DataStream;
;
