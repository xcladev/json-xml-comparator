"use client";

import { useState } from "react";

export default function Comparator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [diffType, setDiffType] = useState("json"); // "json" o "xml"
  const [result, setResult] = useState<string | null>(null);

  // Función para manejar la conversión de JSON o XML
  const handleComparison = () => {
    let output;
    if (diffType === "json") {
      output = compareJson(input1, input2);
    } else {
      output = compareXml(input1, input2);
    }
    setResult(output);
  };

  // Comparar dos JSON
  const compareJson = (json1: string, json2: string) => {
    try {
      const obj1 = JSON.parse(json1);
      const obj2 = JSON.parse(json2);
      return JSON.stringify(
        { diff: obj1 === obj2 ? "No Differences" : "Differences Found" },
        null,
        2
      );
    } catch (error) {
      return "Error al analizar el JSON:" + error;
    }
  };

  // Comparar dos XML
  const compareXml = (xml1: string, xml2: string) => {
    try {
      const parser = new DOMParser();
      const xmlDoc1 = parser.parseFromString(xml1, "text/xml");
      const xmlDoc2 = parser.parseFromString(xml2, "text/xml");

      return xmlDoc1.isEqualNode(xmlDoc2)
        ? "No Differences"
        : "Differences Found";
    } catch (error) {
      return "Error al analizar el XML:" + error;
    }
  };

  return (
    <div className="w-full max-w-3xl p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">
        Comparador de {diffType.toUpperCase()}
      </h2>

      <div className="flex space-x-2 mb-4">
        <button
          className={`p-2 rounded ${
            diffType === "json" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setDiffType("json")}
        >
          JSON
        </button>
        <button
          className={`p-2 rounded ${
            diffType === "xml" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setDiffType("xml")}
        >
          XML
        </button>
      </div>

      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={5}
        placeholder={`Pega tu ${diffType.toUpperCase()} aquí`}
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      ></textarea>

      <textarea
        className="w-full p-2 border rounded mb-2"
        rows={5}
        placeholder={`Pega tu ${diffType.toUpperCase()} aquí`}
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      ></textarea>

      <button
        className="p-2 bg-green-500 text-white rounded mb-4"
        onClick={handleComparison}
      >
        Comparar
      </button>

      {result && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Diferencias:</h3>
          <pre className="bg-gray-100 p-4 rounded">{result}</pre>
        </div>
      )}
    </div>
  );
}
