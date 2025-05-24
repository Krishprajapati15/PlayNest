import { useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";

export default function VapiPage() {
  const vapi = useRef(null);
  const assistantId = "7e6ade59-bc0d-40e0-b0c3-371352835716";

  const [callStatus, setCallStatus] = useState("idle");
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    vapi.current = new Vapi("eaca5422-eca6-4653-92fc-8ec899e6cebf");

    const onCallStart = () => setCallStatus("started");
    const onCallEnd = () => setCallStatus("ended");
    const onMessage = (msg) => {
      if (msg.type === "transcript" && msg.transcriptType === "final") {
        setTranscript(msg.text);
      }
    };

    vapi.current.on("call-start", onCallStart);
    vapi.current.on("call-end", onCallEnd);
    vapi.current.on("message", onMessage);

    return () => {
      vapi.current.off("call-start", onCallStart);
      vapi.current.off("call-end", onCallEnd);
      vapi.current.off("message", onMessage);
      vapi.current.stop();
      vapi.current = null;
    };
  }, []);

  const startCall = async () => {
    try {
      await vapi.current.start(assistantId);
      console.log("Call started");
    } catch (e) {
      console.error("Start call failed", e);
    }
  };

  const stopCall = async () => {
    try {
      await vapi.current.stop();
      console.log("Call stopped");
    } catch (e) {
      console.error("Stop call failed", e);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>TechSolutions Voice Assistant</h1>
      <button onClick={startCall} style={{ marginRight: 10 }}>
        Start Call
      </button>
      <button onClick={stopCall}>Stop Call</button>
      <div style={{ marginTop: 20 }}>
        <div>Call Status: {callStatus}</div>
        <div>Transcript: {transcript}</div>
      </div>
    </div>
  );
}
