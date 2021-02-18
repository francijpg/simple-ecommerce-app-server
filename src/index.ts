import app from "./config/app";

app.listen(app.get("port"), () => console.log("Running on port ", app.get("port")));