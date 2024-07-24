import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import cors from 'cors'

import userRoute from "./route/user.route.js"
dotenv.config();
const app = express();

app.use(cors());   // it is middleware
app.use(express.json());    // jo vi data body se pass kr rhe h parse karega 

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect mongodb
try {
  mongoose.connect(URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  console.log("connected to mongodb");
  
} catch (error) {
  console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute)


app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
