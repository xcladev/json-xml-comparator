import { render, screen } from "@testing-library/react";
import JsonComparatorPage from "../app/json-comparator/page";

// Mock del componente Comparator
jest.mock("@/components/Comparator", () => {
  return function MockComparator({ initialType }: { initialType: string }) {
    return <div data-testid="comparator" data-initialtype={initialType}></div>;
  };
});

describe("JsonComparatorPage", () => {
  it("renderiza la página correctamente", () => {
    render(<JsonComparatorPage />);

    // Verifica el título y la descripción de la página usando getByRole para el encabezado
    expect(
      screen.getByRole("heading", { name: "JSON Comparator", level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Compare your JSON files with precision/i)
    ).toBeInTheDocument();

    // Verifica que se renderice el componente Comparator con el tipo correcto
    const comparator = screen.getByTestId("comparator");
    expect(comparator).toBeInTheDocument();
    expect(comparator).toHaveAttribute("data-initialtype", "json");

    // Verifica que existan los enlaces de navegación
    expect(screen.getByRole("link", { name: "Main Tool" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "XML Comparator" })
    ).toBeInTheDocument();

    // Verifica secciones informativas usando getByRole para los encabezados
    expect(
      screen.getByRole("heading", { name: "Why Use a JSON Comparator?" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Common JSON Comparison Scenarios" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "API Testing" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Configuration Management" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Code Review" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Debugging" })
    ).toBeInTheDocument();
  });
});
