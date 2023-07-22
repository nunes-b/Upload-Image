const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zaepbqh.mongodb.net/?retryWrites=true&w=majority`
  );
}

console.log("Conectado com sucesso!");

module.exports = main;
