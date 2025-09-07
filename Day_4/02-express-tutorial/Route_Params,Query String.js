// always rememper to put a return before any (res.)respone
import express from "express";
import { products, people } from "./data.js";
const app = express();
app.get("/", (req, res) => {
  return res.send("<h1> Home page </h1> <a href= '/api/products'>products</a>");
});
//  focus what "map" doing here
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  return res.json(newProducts);
});
// this is Route Params
// reveiw it again
app.get("/api/products/:ID", (req, res) => {
  const { ID } = req.params;
  const oneProduct = products.find((product) => product.id === Number(ID));
  if (!oneProduct) {
    return res.status(404).send("Product is not found");
  }
  return res.json(oneProduct);
});
// this is query this importent you need to look at it again........
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sotrtedProd = [...products];
  if (search) {
    sotrtedProd = sotrtedProd.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sotrtedProd = sotrtedProd.slice(0, Number(limit));
  }
  if (sotrtedProd.length < 1) {
    // res.status(200).send("no products matched your search");
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sotrtedProd);
});
//................query................................................
app.listen(5000, () => {
  console.log("server is online on port 5000");
});
