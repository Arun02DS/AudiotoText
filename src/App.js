import React, { useState } from "react";
import axios from "axios";
import MicrophoneComponent from "./MicrophoneComponent";
import './output.css';

const App = () => {
  const [transcription, setTranscription] = useState("");
  const [audioBlob, setAudioBlob] = useState(null);
  const [transcriptions, setTranscriptions] = useState([]); // State to store past transcriptions

  const handleRecordingComplete = (blob) => {
    setAudioBlob(blob);
  };

  const handleTranscription = async () => {
    if (!audioBlob) {
      alert("Please record audio first!");
      return;
    }

    const formData = new FormData();
    formData.append("audio", audioBlob, "audio.wav");

    try {
      const response = await axios.post("http://localhost:5000/transcribe", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const transcriptText = response.data.results.channels[0].alternatives[0].transcript;
      console.log("Transcription response:", transcriptText);
      setTranscription(transcriptText);
      setTranscriptions((prevTranscriptions) => [transcriptText, ...prevTranscriptions]); // Save transcription
    } catch (error) {
      console.error("Transcription error:", error);
      alert("Transcription failed!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">GenAI App: Audio to Text</h1>
      <MicrophoneComponent handleTranscription={handleRecordingComplete} />
      <button
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        onClick={handleTranscription}
      >
        Transcribe Audio
      </button>
      {transcription && (
        <div className="mt-6 p-4 w-full max-w-md bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Latest Transcription:</h2>
          <p className="text-gray-700">{transcription}</p>
        </div>
      )}
      {transcriptions.length > 0 && (
        <div className="mt-6 w-full max-w-md">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Past Transcriptions:</h2>
          <ul className="space-y-3">
            {transcriptions.map((pastTranscript, index) => (
              <li key={index} className="p-3 bg-white shadow-md rounded-lg">
                <p className="text-gray-700">{pastTranscript}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
