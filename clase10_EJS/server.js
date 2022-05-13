const express = require("express");
const Producto = require("./productos.js");
const app = express();

const claseProducto = new Producto();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/layout", { data: [], statusList: false });
});

app.get("/productos", (req, res) => {
  const data = claseProducto.listarProductos();
  console.log(data);
  let statusL;

  if (data.length > 0) {
    statusL = true;
  }
  res.render("pages/productos", { datos: data, statusList: statusL });
});

app.post("/productos", (req, res) => {
  const prodFormData = req.body;
  claseProducto.agregarProducto(prodFormData);
  res.redirect("/");
});

app.listen(8080);