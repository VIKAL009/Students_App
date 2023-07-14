"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const databaseConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3000,
    username: 'root',
    password: '',
    database: 'student_app',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
};
exports.default = databaseConfig;
//# sourceMappingURL=database.config.js.map