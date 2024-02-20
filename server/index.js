const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const fs = require("fs");
const { MongoClient } = require("mongodb");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const cors = require("cors");

let aboutMessage = "Employee Tracker API v1.0";
const MONGO_URL =
  "mongodb+srv://@cluster0.jhpqbjr.mongodb.net/";

const GraphQLDate = new GraphQLScalarType({
  name: "GraphQLDate",
  description: "A Date() type in graphql as a scalar",
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    return ast.kind == Kind.STRING ? new Date(ast.value) : undefined;
  },
});

const resolvers = {
  Query: {
    about: () => aboutMessage,
    employeeList,
  },
  Mutation: {
    setAboutMessage,
    employeeAdd,
  },
  GraphQLDate,
};

async function setAboutMessage(_, { message }) {
  return (aboutMessage = message);
}

async function employeeAdd(_, { employee }) {
  const client = new MongoClient(MONGO_URL, {});

  try {
    await client.connect();
    const db = client.db();
    const employeesCollection = db.collection("employees");

    employee.created = new Date();
    employee.employeeid = (await employeesCollection.countDocuments({})) + 1;
    if (employee.status === undefined) employee.status = "New";

    await employeesCollection.insertOne(employee);
    return employee;
  } finally {
    await client.close();
  }
}

async function employeeList() {
  const client = new MongoClient(MONGO_URL, {});

  try {
    await client.connect();
    const db = client.db();
    const employeesCollection = db.collection("employees");

    return await employeesCollection.find().toArray();
  } finally {
    await client.close();
  }
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync("./server/schema.graphql", "utf-8"),
  resolvers,
});

const app = express();
app.use(express.static("public"));
app.use(cors());

async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
