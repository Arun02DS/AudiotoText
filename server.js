const express = require("express");
const multer = require("multer");
const { createClient } = require("@deepgram/sdk");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Set up multer for audio file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Initialize Deepgram client
const deepgram = createClient(process.env.REACT_APP_DEEPGRAM_API_KEY);

// Route for transcribing audio
app.post("/transcribe", upload.single("audio"), async (req, res) => {
  try {
    const audioBuffer = req.file.buffer; // Get the uploaded audio file buffer
    console.log("Received audio file:", req.file);

    // Transcribe the audio using Deepgram
    const { result, error } = await deepgram.listen.prerecorded.transcribeFile(audioBuffer,{ 
      model: "nova-2", 
      smart_format: true 
    });

    // Handle errors during transcription
    if (error) {
      console.error("Deepgram transcription error:", error);
      return res.status(500).json({ error: "Transcription failed" });
    }

    // Return the transcription result
    console.log("Deepgram response:", result);
    res.json(result);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Transcription failed" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
