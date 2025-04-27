import { render, screen } from "@testing-library/react";
import XmlComparatorPage from "../app/xml-comparator/page";

// Mock del componente Comparator
jest.mock("@/components/Comparator", () => {
  return function MockComparator({ initialType }: { initialType: string }) {
    return <div data-testid="comparator" data-initialtype={initialType}></div>;
  };
});

describe("XmlComparatorPage", () => {
  it("renderiza la página correctamente", () => {
    render(<XmlComparatorPage />);

    // Verifica el título y la descripción de la página usando getByRole para el encabezado
    expect(
      screen.getByRole("heading", { name: "XML Comparator", level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Compare your XML files with precision/i)
    ).toBeInTheDocument();

    // Verifica que se renderice el componente Comparator con el tipo correcto
    const comparator = screen.getByTestId("comparator");
    expect(comparator).toBeInTheDocument();
    expect(comparator).toHaveAttribute("data-initialtype", "xml");

    // Verifica que existan los enlaces de navegación
    expect(screen.getByRole("link", { name: "Main Tool" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "JSON Comparator" })
    ).toBeInTheDocument();

    // Verifica secciones informativas usando getByRole para los encabezados
    expect(
      screen.getByRole("heading", { name: "Why Use an XML Comparator?" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Common XML Comparison Use Cases" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Configuration Management" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "SOAP API Testing" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Document Processing" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Data Migration" })
    ).toBeInTheDocument();
  });
});
