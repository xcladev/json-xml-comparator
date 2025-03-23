"use client";

import { useState } from "react";
import { diffWords } from "diff";

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

  // Estados separados para JSON y XML
  const [jsonState, setJsonState] = useState<InputState>({
    input1: "",
    input2: "",
  });
  const [xmlState, setXmlState] = useState<InputState>({
    input1: "",
    input2: "",
  });

  // Estado actual basado en diffType
  const currentState = diffType === "json" ? jsonState : xmlState;
  const setCurrentState = diffType === "json" ? setJsonState : setXmlState;

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
        const json1 = JSON.parse(currentState.input1);
        const json2 = JSON.parse(currentState.input2);
        const str1 = JSON.stringify(json1, null, 2);
        const str2 = JSON.stringify(json2, null, 2);
        setResult(diffWords(str1, str2));
      } else {
        const parser = new DOMParser();
        const xml1 = parser.parseFromString(currentState.input1, "text/xml");
        const xml2 = parser.parseFromString(currentState.input2, "text/xml");

        if (xml1.documentElement && xml2.documentElement) {
          const str1 = new XMLSerializer().serializeToString(xml1);
          const str2 = new XMLSerializer().serializeToString(xml2);
          setResult(diffWords(str1, str2));
        } else {
          throw new Error("XML inválido");
        }
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al procesar los archivos"
      );
    }
  };

  const renderDiff = (diff: DiffResult[]) => {
    return diff.map((part, index) => (
      <span
        key={index}
        className={`${
          part.added
            ? "bg-green-100 text-green-800"
            : part.removed
            ? "bg-red-100 text-red-800"
            : ""
        } font-mono whitespace-pre-wrap`}
      >
        {part.value}
      </span>
    ));
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
            Comparador de {diffType.toUpperCase()}
          </h2>
          <div className="flex space-x-3">
            <button
              className={`group relative px-6 py-2.5 rounded-lg transition-all duration-300 ${
                diffType === "json"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handleTypeChange("json")}
            >
              <span className="relative z-10">JSON</span>
              {diffType === "json" && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              )}
            </button>
            <button
              className={`group relative px-6 py-2.5 rounded-lg transition-all duration-300 ${
                diffType === "xml"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handleTypeChange("xml")}
            >
              <span className="relative z-10">XML</span>
              {diffType === "xml" && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Primer {diffType.toUpperCase()}
            </label>
            <textarea
              className="w-full h-72 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm bg-gray-50"
              placeholder={`Pega tu ${diffType.toUpperCase()} aquí`}
              value={currentState.input1}
              onChange={(e) => handleInputChange(1, e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Segundo {diffType.toUpperCase()}
            </label>
            <textarea
              className="w-full h-72 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm bg-gray-50"
              placeholder={`Pega tu ${diffType.toUpperCase()} aquí`}
              value={currentState.input2}
              onChange={(e) => handleInputChange(2, e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <button
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium"
            onClick={handleComparison}
          >
            <span className="relative z-10">Comparar</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>

        {error && (
          <div className="p-4 mb-6 bg-red-50 text-red-700 rounded-xl border border-red-200">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
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
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Resultado de la comparación
            </h3>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="font-mono text-sm overflow-x-auto">
                {renderDiff(result)}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-100 rounded mr-2"></div>
                <span>Agregado</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-100 rounded mr-2"></div>
                <span>Eliminado</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-white border border-gray-300 rounded mr-2"></div>
                <span>Sin cambios</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
