require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const weatherRoutes = require("./routes/weatherRoutes");

const app = express();

// Enable CORS  
app.use(cors({ origin: "*" })); // Allow requests from any frontend  
app.use(express.json());

connectDB();

app.use("/api/weather", weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
