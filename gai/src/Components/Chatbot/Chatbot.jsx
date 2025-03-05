import React, { useState } from "react";
import axios from "axios";
import Loading from "./Loading";


const Chatbot = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  
  const [inputData, setInputData] = useState("");
  const [answerData, setAnswerData] = useState("");
  const [questionData, setQuestionData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const getData = async () => {
    if (!inputData.trim()) return;
    setLoading(true);
    setAnswerData("");
    const requestData = {
      contents: [
        {
          parts: [{ text: inputData }],
        },
      ],
    };

    try {
      const response = await axios.post(API_URL, requestData);
      setQuestionData(inputData);
      setAnswerData(response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response");
      setInputData("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setAnswerData("Error fetching response. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" relative w-full h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4 flex flex-col justify-between">
      <div className="absolute top-3 right-10 z-40 flex justify-center items-center gap-5 ">
        <div> <a href="https://www.facebook.com/xyzsabbir1234" target="blank" ><img className="w-8 h-8"  src="/octo.svg" alt="octopus" /></a> </div>
        <div> <a href="https://github.com/sabbir-sabbir/GMINIAI" target="blank"><img className="w-6 h-6 mb-2" src="/git.svg" alt="github" /></a> </div>
      </div>
      <div className="h-[80%] bg-white/10  rounded-md backdrop-blur-lg shadow-2xl p-6 overflow-hidden">
        <p className="w-full h-[45px] bg-white text-gray-600 p-2 rounded-sm shadow-lg">{questionData ? questionData : "Your Question Will  Preview Here"}</p>
        <p className="w-full h-[89%] overflow-y-scroll bg-white p-6
         rounded-sm shadow-lg mt-2">
          {loading ? <Loading/> : answerData}
        </p>
      </div>

      <div className="mt-4">
        <input
          value={inputData}
          onChange={handleInput}
          className="w-full h-[50px] px-2 py-1 outline-none border-2 border-rose-500"
          type="text"
          placeholder="Ask anything..."
        />
        <button
          onClick={getData}
          className="w-full px-2 py-2 bg-black text-fuchsia-50 font-medium rounded-sm mt-2 hover:scale-95 duration-300 transition-all "
        >
          Ask Now
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
