const sqlite3  = require('sqlite3').verbose();
const db       = new sqlite3.Database('./backend/db/contacts.db');

module.exports = db;