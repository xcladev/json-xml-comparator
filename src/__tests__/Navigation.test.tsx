import { render, fireEvent, screen } from "@testing-library/react";
import Comparator from "../components/Comparator";
import { useRouter } from "next/navigation";

// Mock de next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Navegación entre comparadores", () => {
  it("navega a la página de JSON comparator cuando se hace clic en el botón JSON", () => {
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<Comparator initialType="xml" isMainPage={false} />);

    // El componente inicia en modo XML
    expect(screen.getByText("XML Comparator")).toBeInTheDocument();

    // Hacer clic en el botón JSON
    const jsonButton = screen.getByText("JSON");
    fireEvent.click(jsonButton);

    // Verificar que se llamó a router.push con la ruta correcta
    expect(mockRouter.push).toHaveBeenCalledWith("/json-comparator");
  });

  it("navega a la página de XML comparator cuando se hace clic en el botón XML", () => {
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<Comparator initialType="json" isMainPage={false} />);

    // El componente inicia en modo JSON
    expect(screen.getByText("JSON Comparator")).toBeInTheDocument();

    // Hacer clic en el botón XML
    const xmlButton = screen.getByText("XML");
    fireEvent.click(xmlButton);

    // Verificar que se llamó a router.push con la ruta correcta
    expect(mockRouter.push).toHaveBeenCalledWith("/xml-comparator");
  });

  it("no navega a una nueva página cuando isMainPage es true", () => {
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<Comparator initialType="json" isMainPage={true} />);

    // El componente inicia en modo JSON
    expect(screen.getByText("JSON Comparator")).toBeInTheDocument();

    // Hacer clic en el botón XML
    const xmlButton = screen.getByText("XML");
    fireEvent.click(xmlButton);

    // Verificar que se cambió el modo pero no se navegó
    expect(screen.getByText("XML Comparator")).toBeInTheDocument();
    expect(mockRouter.push).not.toHaveBeenCalled();
  });

  it("actualiza el tipo cuando cambia la prop initialType", () => {
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const { rerender } = render(<Comparator initialType="json" />);

    // Inicialmente es JSON
    expect(screen.getByText("JSON Comparator")).toBeInTheDocument();

    // Cambiar la prop initialType a "xml"
    rerender(<Comparator initialType="xml" />);

    // Debe cambiar a XML
    expect(screen.getByText("XML Comparator")).toBeInTheDocument();
  });
});
