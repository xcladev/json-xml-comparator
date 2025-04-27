import { render, screen } from "@testing-library/react";
import Home from "../app/page";

// Mock del componente Comparator
jest.mock("@/components/Comparator", () => {
  return function MockComparator({ isMainPage }: { isMainPage: boolean }) {
    return (
      <div
        data-testid="comparator"
        data-ismainpage={isMainPage ? "true" : "false"}
      ></div>
    );
  };
});

describe("HomePage", () => {
  it("renderiza la página principal correctamente", () => {
    render(<Home />);

    // Verifica el título y la descripción de la página
    expect(
      screen.getByRole("heading", { name: "JSON and XML Comparator", level: 1 })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Compare your JSON or XML files easily/i)
    ).toBeInTheDocument();

    // Verifica que se renderice el componente Comparator con isMainPage=true
    const comparator = screen.getByTestId("comparator");
    expect(comparator).toBeInTheDocument();
    expect(comparator).toHaveAttribute("data-ismainpage", "true");

    // Verifica que exista el menú de navegación con los enlaces correctos
    const navigationMenu = screen.getByRole("navigation");
    expect(navigationMenu).toBeInTheDocument();

    // Verifica secciones informativas
    expect(
      screen.getByRole("heading", { name: "How to Use Our Comparison Tool" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "1. Paste Your Code" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "2. Compare" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "3. Review Results" })
    ).toBeInTheDocument();

    // Verifica otras secciones
    expect(
      screen.getByRole("heading", { name: "Popular Use Cases" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Specialized Comparison Tools" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Why Choose Our Comparator?" })
    ).toBeInTheDocument();
  });
});
