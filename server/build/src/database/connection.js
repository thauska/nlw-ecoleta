"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var path_1 = __importDefault(require("path")); // responsável por padronizar caminhos de arquivos
var connection = knex_1.default({
    client: 'sqlite3',
    connection: {
        filename: path_1.default.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
});
exports.default = connection;
// Migration = Histórico do BD
