import dotenv from "dotenv";
import express from "express";
import twilio from "twilio";
dotenv.config();
const port = 4000;

const app = express();

// Twilio client setup
const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

app.use(express.json());

// ! Define the route
app.post("/sendSMS", async (req, res) => {
  try {
    const { to, message } = req.body;

    if (!to || !message) {
      return res.status(400).json({ error: "Error 'to' 'message' " });
    }

    const sms = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to,
    });

    res.json({ success: true, sid: sms.sid });
  } catch (error) {
    console.log("Error while sending the message");
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
