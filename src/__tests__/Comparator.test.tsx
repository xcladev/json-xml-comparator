import { render, screen, fireEvent } from "@testing-library/react";
import Comparator from "../components/Comparator";

describe("Comparator", () => {
  it("renderiza el componente correctamente", () => {
    render(<Comparator />);
    expect(screen.getByText("Comparador de JSON")).toBeInTheDocument();
  });

  it("cambia entre JSON y XML", () => {
    render(<Comparator />);
    const xmlButton = screen.getByText("XML");
    fireEvent.click(xmlButton);
    expect(screen.getByText("Comparador de XML")).toBeInTheDocument();
  });

  it("muestra el resultado de la comparación de JSON", () => {
    render(<Comparator />);

    // Obtener los textareas usando roles
    const input1 = screen.getByRole("textbox", { name: /primer json/i });
    const input2 = screen.getByRole("textbox", { name: /segundo json/i });

    // Ingresar datos de prueba
    fireEvent.change(input1, { target: { value: '{"test": "value1"}' } });
    fireEvent.change(input2, { target: { value: '{"test": "value2"}' } });

    // Hacer clic en el botón de comparar
    const compareButton = screen.getByText("Comparar");
    fireEvent.click(compareButton);

    // Verificar que se muestra el resultado
    expect(screen.getByText("Resultado de la comparación")).toBeInTheDocument();
  });

  it("muestra el resultado de la comparación de XML", () => {
    render(<Comparator />);

    // Cambiar a modo XML
    const xmlButton = screen.getByText("XML");
    fireEvent.click(xmlButton);

    // Obtener los textareas usando roles
    const input1 = screen.getByRole("textbox", { name: /primer xml/i });
    const input2 = screen.getByRole("textbox", { name: /segundo xml/i });

    // Ingresar datos de prueba
    fireEvent.change(input1, {
      target: { value: "<root><test>value1</test></root>" },
    });
    fireEvent.change(input2, {
      target: { value: "<root><test>value2</test></root>" },
    });

    // Hacer clic en el botón de comparar
    const compareButton = screen.getByText("Comparar");
    fireEvent.click(compareButton);

    // Verificar que se muestra el resultado
    expect(screen.getByText("Resultado de la comparación")).toBeInTheDocument();
  });

  it("muestra diferencias cuando el JSON es inválido", () => {
    render(<Comparator />);

    // Obtener los textareas usando roles
    const input1 = screen.getByRole("textbox", { name: /primer json/i });
    const input2 = screen.getByRole("textbox", { name: /segundo json/i });

    // Ingresar JSON inválido
    fireEvent.change(input1, { target: { value: "invalid json" } });
    fireEvent.change(input2, { target: { value: '{"test": "value2"}' } });

    // Hacer clic en el botón de comparar
    const compareButton = screen.getByText("Comparar");
    fireEvent.click(compareButton);

    // Verificar que se muestra el resultado con las diferencias
    expect(screen.getByText("Resultado de la comparación")).toBeInTheDocument();
    const originalFile = screen.getByText("Archivo Original");
    expect(originalFile).toBeInTheDocument();

    // Verificar el texto en el resultado de la comparación
    const resultContainer = screen.getByText("Archivo Original").closest("div");
    expect(resultContainer).toHaveTextContent("invalid json");
  });

  it("muestra diferencias cuando el XML es inválido", () => {
    render(<Comparator />);

    // Cambiar a modo XML
    const xmlButton = screen.getByText("XML");
    fireEvent.click(xmlButton);

    // Obtener los textareas usando roles
    const input1 = screen.getByRole("textbox", { name: /primer xml/i });
    const input2 = screen.getByRole("textbox", { name: /segundo xml/i });

    // Ingresar XML inválido
    fireEvent.change(input1, { target: { value: "invalid xml" } });
    fireEvent.change(input2, {
      target: { value: "<root><test>value2</test></root>" },
    });

    // Hacer clic en el botón de comparar
    const compareButton = screen.getByText("Comparar");
    fireEvent.click(compareButton);

    // Verificar que se muestra el resultado con las diferencias
    expect(screen.getByText("Resultado de la comparación")).toBeInTheDocument();
    const originalFile = screen.getByText("Archivo Original");
    expect(originalFile).toBeInTheDocument();
    expect(
      screen.getByText(/text data outside of root node/i)
    ).toBeInTheDocument();
  });

  it("limpia el resultado al cambiar entre JSON y XML", () => {
    render(<Comparator />);

    // Realizar una comparación de JSON
    const input1 = screen.getByRole("textbox", { name: /primer json/i });
    const input2 = screen.getByRole("textbox", { name: /segundo json/i });
    fireEvent.change(input1, { target: { value: '{"test": "value1"}' } });
    fireEvent.change(input2, { target: { value: '{"test": "value2"}' } });
    fireEvent.click(screen.getByText("Comparar"));

    // Verificar que se muestra el resultado
    expect(screen.getByText("Resultado de la comparación")).toBeInTheDocument();

    // Cambiar a XML
    fireEvent.click(screen.getByText("XML"));

    // Verificar que el resultado se ha limpiado
    expect(
      screen.queryByText("Resultado de la comparación")
    ).not.toBeInTheDocument();
  });
});
