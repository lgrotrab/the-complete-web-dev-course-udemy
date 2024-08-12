import mongoose from "mongoose";

const uri =
  "mongodb+srv://lgrotrab:Pyb2ln820QZ8Z6VJ@cluster0.6flrkbv.mongodb.net/fruitsDB?retryWrites=true&w=majority";

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nome é obrigatório"],
  },
  rating: {
    type: Number,
    min: [0, "Nota mínima é 0"],
    max: [10, "Nota máxima é 10"],
  },
  review: String,
});

//por padrão o mongodb cria uma coleção no plural, ou seja o nome dado deve ser no singular.
const Fruit = mongoose.model("Fruit", fruitSchema);
const banana = new Fruit({
  name: "Banana",
  rating: 10,
  review: "Best fruit ever",
});

const melancia = new Fruit({
  name: "Melancia",
  rating: 11,
  review: "Best fruit ever",
});
const melao = new Fruit({
  name: "Melao",
  rating: -3,
  review: "Ruim demaize",
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Best fruit ever",
});

const orange = new Fruit({
  name: "Orange",
  rating: 10,
  review: "Best fruit ever",
});

function insereUm(fruit) {
  mongoose.connect(uri, { useNewUrlParser: true });
  fruit
    .save()
    .then((fruit) => {
      console.log("Fruta inserido com sucesso:", fruit);
      mongoose.connection.close();
    })
    .catch((erro) => {
      console.error("Erro ao inserir fruta:", erro);
    });
}

async function insereVarios(arrayFruits) {
  try {
    // Inserir vários usuários no banco de dados
    mongoose.connect(uri, { useNewUrlParser: true });
    const frutas = await Fruit.insertMany(arrayFruits);
    console.log("Frutas inseridos com sucesso:", frutas);
  } catch (erro) {
    console.error("Erro ao inserir frutas:", erro);
  } finally {
    mongoose.connection.close();
  }
}

mongoose.connect(uri, { useNewUrlParser: true });
//const res = Fruit.updateOne({ name: "batata" }, { name: "Banana" });
await Fruit.deleteOne({ name: "Banana" });
const frutas = await Fruit.find();
frutas.forEach((fruit) => {
  console.log(fruit.name);
});
mongoose.disconnect();
