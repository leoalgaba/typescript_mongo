"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.HOST = exports.NODE_ENV = void 0;
exports.NODE_ENV = process.env.NODE_ENV || 'development';
exports.HOST = process.env.HOST || '127.0.0.1';
exports.PORT = process.env.PORT || '8000';
