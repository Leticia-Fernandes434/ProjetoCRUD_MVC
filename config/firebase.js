// CONFIGURAÇÃO FIREBASE REALTIME DATABASE
const admin = require("firebase-admin");
const path = require("path");
const fs = require("fs");

// Local: config/serviceAccountKey.json
// Render: /etc/secrets/serviceAccountKey.json
let serviceAccountPath;

if (fs.existsSync(path.join(__dirname, "serviceAccountKey.json"))) {
    serviceAccountPath = path.join(__dirname, "serviceAccountKey.json");
} else {
    serviceAccountPath = "/etc/secrets/serviceAccountKey.json";
}

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sistemasweb-6f9a6-default-rtdb.firebaseio.com/"
});

const db = admin.database();

module.exports = db;