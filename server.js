const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Mock AI endpoint
app.post("/ask", async (req, res) => {
    const question = req.body.question;

    // Simple mock logic: respond based on keywords
    let answer = "";

    if (question.toLowerCase().includes("photosynthesis")) {
        answer = "Photosynthesis is the process by which plants convert sunlight into energy in the form of glucose.";
    } else if (question.toLowerCase().includes("newton")) {
        answer = "Newton's Laws describe how objects move and interact with forces.";
    } else if (question.toLowerCase().includes("gravity")) {
        answer = "Gravity is the force that attracts two bodies toward each other, like objects falling to the Earth.";
    } else {
        answer = `You asked: "${question}". Here is a sample answer generated for demo purposes.`;
    }

    res.json({ answer });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});