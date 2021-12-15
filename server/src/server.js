const express = require("express");
// const passport = require("passport");
const connect = require("./config/db");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5008;
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
// const GOOGLE_CLIENT_ID = '304597335839-pq3a234jsj2v8p3bukdbph4kq3657tfm.apps.googleusercontent.com'
// const GOOGLE_CLIENT_SECRET = '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'

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "StudentDB API",
      version: "1.0.0",
      description: "A simple Express StudentDB API"
    },
    servers: [
      {
        url: "http://localhost:5008"
      },
      {
        url: "http://localhost:5000"
      }
    ]
  },
  apis: ["./src/controller/*.js"]
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

const studentDetailsController = require("./controller/studentDetails.controller");
app.use("/studentDetails", studentDetailsController);

const studentResultController = require("./controller/studentResult.controller");
app.use("/studentResults", studentResultController);


app.listen(PORT, async (req, res) => {
  await connect();
  console.log(`Server is running on Port ${PORT}...`);
});
