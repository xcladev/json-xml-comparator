"use client";

import { useState } from "react";
import { diffLines } from "diff";

interface DiffResult {
  added?: boolean;
  removed?: boolean;
  value: string;
}

interface InputState {
  input1: string;
  input2: string;
}

export default function Comparator() {
  const [diffType, setDiffType] = useState("json");
  const [result, setResult] = useState<DiffResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [jsonState, setJsonState] = useState<InputState>({
    input1: "",
    input2: "",
  });
  const [xmlState, setXmlState] = useState<InputState>({
    input1: "",
    input2: "",
  });

  const currentState = diffType === "json" ? jsonState : xmlState;
  const setCurrentState = diffType === "json" ? setJsonState : setXmlState;

  const formatJSON = (json: string): string => {
    try {
      return JSON.stringify(JSON.parse(json), null, 2);
    } catch {
      return json;
    }
  };

  const formatXML = (xml: string): string => {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, "text/xml");
      return new XMLSerializer().serializeToString(xmlDoc);
    } catch {
      return xml;
    }
  };

  const handleInputChange = (inputNumber: 1 | 2, value: string) => {
    setCurrentState((prev) => ({
      ...prev,
      [`input${inputNumber}`]: value,
    }));
  };

  const handleTypeChange = (type: "json" | "xml") => {
    setDiffType(type);
    setResult(null);
    setError(null);
  };

  const handleComparison = () => {
    setError(null);
    try {
      if (diffType === "json") {
        const json1 = formatJSON(currentState.input1);
        const json2 = formatJSON(currentState.input2);
        setResult(diffLines(json1, json2));
      } else {
        const xml1 = formatXML(currentState.input1);
        const xml2 = formatXML(currentState.input2);
        if (!xml1 || !xml2) {
          throw new Error("XML inválido");
        }
        setResult(diffLines(xml1, xml2));
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al procesar los archivos"
      );
    }
  };

  const renderDiff = (diff: DiffResult[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-300">Original File</h4>
          <pre className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 overflow-x-auto">
            <code className="text-sm text-gray-200">
              {diff.map((part, i) => (
                <div
                  key={i}
                  className={`${
                    part.removed ? "bg-red-900/50 text-red-200" : ""
                  } whitespace-pre`}
                >
                  {part.removed || (!part.added && !part.removed)
                    ? part.value
                    : ""}
                </div>
              ))}
            </code>
          </pre>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-300">New File</h4>
          <pre className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 overflow-x-auto">
            <code className="text-sm text-gray-200">
              {diff.map((part, i) => (
                <div
                  key={i}
                  className={`${
                    part.added ? "bg-green-900/50 text-green-200" : ""
                  } whitespace-pre`}
                >
                  {part.added || (!part.added && !part.removed)
                    ? part.value
                    : ""}
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl overflow-hidden border border-white/20">
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 md:mb-0">
            {diffType.toUpperCase()} Comparator
          </h2>
          <div
            className="flex space-x-3"
            role="group"
            aria-label="File type selection"
          >
            <button
              className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm ${
                diffType === "json"
                  ? "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300"
                  : "text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700"
              }`}
              onClick={() => handleTypeChange("json")}
              aria-pressed={diffType === "json"}
            >
              JSON
            </button>
            <button
              className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm ${
                diffType === "xml"
                  ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300"
                  : "text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700"
              }`}
              onClick={() => handleTypeChange("xml")}
              aria-pressed={diffType === "xml"}
            >
              XML
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <label
              htmlFor="input1"
              className="block text-sm font-medium text-gray-300"
            >
              First {diffType.toUpperCase()} File
            </label>
            <textarea
              id="input1"
              className="w-full h-72 p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none font-mono text-sm text-gray-200 placeholder-gray-500"
              placeholder={`Paste your ${diffType.toUpperCase()} here`}
              value={currentState.input1}
              onChange={(e) => handleInputChange(1, e.target.value)}
              aria-label={`First ${diffType.toUpperCase()} input`}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="input2"
              className="block text-sm font-medium text-gray-300"
            >
              Second {diffType.toUpperCase()} File
            </label>
            <textarea
              id="input2"
              className="w-full h-72 p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none font-mono text-sm text-gray-200 placeholder-gray-500"
              placeholder={`Paste your ${diffType.toUpperCase()} here`}
              value={currentState.input2}
              onChange={(e) => handleInputChange(2, e.target.value)}
              aria-label={`Second ${diffType.toUpperCase()} input`}
            />
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <button
            className="text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-8 py-3 text-center transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={handleComparison}
            aria-label="Compare files"
          >
            Compare
          </button>
        </div>

        {error && (
          <div
            className="p-4 mb-6 bg-red-900/50 text-red-200 rounded-xl border border-red-700"
            role="alert"
          >
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </div>
          </div>
        )}

        {result && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-200 mb-4">
              Comparison Result
            </h3>
            {renderDiff(result)}
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-300">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-emerald-900/50 rounded mr-2 border border-emerald-700"></div>
                <span>Added</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-900/50 rounded mr-2 border border-red-700"></div>
                <span>Removed</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-800/50 rounded mr-2 border border-gray-700"></div>
                <span>Unchanged</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
