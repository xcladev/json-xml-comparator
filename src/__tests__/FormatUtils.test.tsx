import { render, fireEvent, screen } from "@testing-library/react";
import Comparator from "../components/Comparator";
import { useRouter } from "next/navigation";

// Mock de next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Este archivo contiene pruebas específicas para las funcionalidades de formateo de JSON y XML

describe("Funciones de formateo", () => {
  // Configuración del mock para useRouter antes de cada prueba
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  describe("Formateo de JSON", () => {
    it("formatea correctamente JSON válido", () => {
      render(<Comparator />);

      const input = screen.getByLabelText(/First JSON File/i);
      const inputValue = '{"nombre":"Juan","edad":30,"activo":true}';

      fireEvent.change(input, { target: { value: inputValue } });

      // También debemos llenar el segundo input para que la comparación sea válida
      const input2 = screen.getByLabelText(/Second JSON File/i);
      fireEvent.change(input2, { target: { value: inputValue } });

      const compareButton = screen.getByText("Compare");
      fireEvent.click(compareButton);

      // Verificamos que no aparezca el mensaje de error
      expect(
        screen.queryByText(/Invalid JSON format/i)
      ).not.toBeInTheDocument();
    });

    it("detecta JSON inválido", () => {
      render(<Comparator />);

      const input = screen.getByLabelText(/First JSON File/i);
      const inputValue = '{"nombre":"Juan",edad:30,"activo":true}'; // falta comillas en edad

      fireEvent.change(input, { target: { value: inputValue } });

      const compareButton = screen.getByText("Compare");
      fireEvent.click(compareButton);

      // Debe mostrar un mensaje de error
      expect(screen.getByText(/Invalid JSON format/i)).toBeInTheDocument();
    });

    it("maneja objetos JSON anidados", () => {
      render(<Comparator />);

      const input1 = screen.getByLabelText(/First JSON File/i);
      const input2 = screen.getByLabelText(/Second JSON File/i);

      const jsonAnidado = `{
        "persona": {
          "nombre": "Juan",
          "direccion": {
            "calle": "Calle Principal",
            "ciudad": "Madrid"
          }
        }
      }`;

      fireEvent.change(input1, { target: { value: jsonAnidado } });
      fireEvent.change(input2, { target: { value: jsonAnidado } });

      const compareButton = screen.getByText("Compare");
      fireEvent.click(compareButton);

      // Verificamos que no aparezca el mensaje de error
      expect(
        screen.queryByText(/Invalid JSON format/i)
      ).not.toBeInTheDocument();
    });
  });

  describe("Formateo de XML", () => {
    beforeEach(() => {
      render(<Comparator />);
      // Cambiar a modo XML
      const xmlButton = screen.getByText("XML");
      fireEvent.click(xmlButton);
    });

    it("formatea correctamente XML válido", () => {
      const input1 = screen.getByLabelText(/First XML File/i);
      const input2 = screen.getByLabelText(/Second XML File/i);
      const inputValue =
        "<persona><nombre>Juan</nombre><edad>30</edad></persona>";

      fireEvent.change(input1, { target: { value: inputValue } });
      // También debemos llenar el segundo input para que la comparación sea válida
      fireEvent.change(input2, { target: { value: inputValue } });

      const compareButton = screen.getByText("Compare");
      fireEvent.click(compareButton);

      // Verificamos que no aparezca el mensaje de error
      expect(screen.queryByText(/Invalid XML format/i)).not.toBeInTheDocument();
    });

    it("detecta XML inválido", () => {
      const input = screen.getByLabelText(/First XML File/i);
      const inputValue = "<persona><nombre>Juan</nombre><edad>30</edad>"; // falta cerrar persona

      fireEvent.change(input, { target: { value: inputValue } });

      const compareButton = screen.getByText("Compare");
      fireEvent.click(compareButton);

      // Debe mostrar un mensaje de error
      expect(screen.getByText(/Invalid XML format/i)).toBeInTheDocument();
    });

    it("maneja elementos XML con atributos", () => {
      const input1 = screen.getByLabelText(/First XML File/i);
      const input2 = screen.getByLabelText(/Second XML File/i);

      const xmlConAtributos = `
        <persona id="1" tipo="empleado">
          <nombre>Juan</nombre>
          <edad unidad="años">30</edad>
          <direccion tipo="casa">
            <calle>Calle Principal</calle>
            <ciudad>Madrid</ciudad>
          </direccion>
        </persona>
      `;

      fireEvent.change(input1, { target: { value: xmlConAtributos } });
      fireEvent.change(input2, { target: { value: xmlConAtributos } });

      const compareButton = screen.getByText("Compare");
      fireEvent.click(compareButton);

      // Verificamos que no aparezca el mensaje de error
      expect(screen.queryByText(/Invalid XML format/i)).not.toBeInTheDocument();
    });
  });
});
