import React, { useState, useRef } from 'react';

const MicrophoneComponent = ({ handleTranscription }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const mediaRecorderRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioStream(stream);
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.start();

      setIsRecording(true);

      mediaRecorderRef.current.ondataavailable = (e) => {
        const audioBlob = new Blob([e.data], { type: 'audio/wav' });
        handleTranscription(audioBlob);  // This will send the audio blob for transcription
      };
    } catch (err) {
      console.error("Error accessing microphone:", err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    audioStream.getTracks().forEach(track => track.stop());
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        className={`px-6 py-2 font-semibold text-white rounded-full transition duration-200 ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          }`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <p className="text-lg text-gray-700">
        {isRecording ? 'Recording in progress...' : 'Click to start recording.'}
      </p>
    </div>
  );
};

export default MicrophoneComponent;
