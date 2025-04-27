import { render, screen, fireEvent } from "@testing-library/react";
import Comparator from "../components/Comparator";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Comparator", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  it("renders the component correctly", () => {
    render(<Comparator />);
    expect(screen.getByText("JSON Comparator")).toBeInTheDocument();
  });

  it("switches between JSON and XML", () => {
    render(<Comparator />);
    const xmlButton = screen.getByText("XML");
    fireEvent.click(xmlButton);
    expect(screen.getByText("XML Comparator")).toBeInTheDocument();
  });

  it("shows JSON comparison result", () => {
    render(<Comparator />);

    const input1 = screen.getByLabelText(/First JSON File/i);
    const input2 = screen.getByLabelText(/Second JSON File/i);

    fireEvent.change(input1, { target: { value: '{"test": "value1"}' } });
    fireEvent.change(input2, { target: { value: '{"test": "value2"}' } });

    const compareButton = screen.getByText("Compare");
    fireEvent.click(compareButton);

    expect(screen.getByText("Comparison Result")).toBeInTheDocument();
    expect(screen.getByText("Original File")).toBeInTheDocument();
    expect(screen.getByText("New File")).toBeInTheDocument();
  });

  it("shows XML comparison result", () => {
    render(<Comparator />);

    const xmlButton = screen.getByText("XML");
    fireEvent.click(xmlButton);

    const input1 = screen.getByLabelText(/First XML File/i);
    const input2 = screen.getByLabelText(/Second XML File/i);

    fireEvent.change(input1, {
      target: { value: "<root><test>value1</test></root>" },
    });
    fireEvent.change(input2, {
      target: { value: "<root><test>value2</test></root>" },
    });

    const compareButton = screen.getByText("Compare");
    fireEvent.click(compareButton);

    expect(screen.getByText("Comparison Result")).toBeInTheDocument();
    expect(screen.getByText("Original File")).toBeInTheDocument();
    expect(screen.getByText("New File")).toBeInTheDocument();
  });

  it("handles invalid JSON input", () => {
    render(<Comparator />);

    const input1 = screen.getByLabelText(/First JSON File/i);
    const input2 = screen.getByLabelText(/Second JSON File/i);

    fireEvent.change(input1, { target: { value: "invalid json" } });
    fireEvent.change(input2, { target: { value: '{"test": "value2"}' } });

    const compareButton = screen.getByText("Compare");
    fireEvent.click(compareButton);

    expect(screen.getByText(/Invalid JSON format/i)).toBeInTheDocument();
  });

  it("handles invalid XML input", () => {
    render(<Comparator />);

    const xmlButton = screen.getByText("XML");
    fireEvent.click(xmlButton);

    const input1 = screen.getByLabelText(/First XML File/i);
    const input2 = screen.getByLabelText(/Second XML File/i);

    fireEvent.change(input1, { target: { value: "invalid xml" } });
    fireEvent.change(input2, {
      target: { value: "<root><test>value2</test></root>" },
    });

    const compareButton = screen.getByText("Compare");
    fireEvent.click(compareButton);

    expect(screen.getByText(/Invalid XML format/i)).toBeInTheDocument();
  });

  it("clears result when switching between JSON and XML", () => {
    render(<Comparator />);

    const input1 = screen.getByLabelText(/First JSON File/i);
    const input2 = screen.getByLabelText(/Second JSON File/i);

    fireEvent.change(input1, { target: { value: '{"test": "value1"}' } });
    fireEvent.change(input2, { target: { value: '{"test": "value2"}' } });

    const compareButton = screen.getByText("Compare");
    fireEvent.click(compareButton);

    expect(screen.getByText("Comparison Result")).toBeInTheDocument();

    const xmlButton = screen.getByText("XML");
    fireEvent.click(xmlButton);

    expect(screen.queryByText("Comparison Result")).not.toBeInTheDocument();
  });

  it("maintains separate state for JSON and XML inputs", () => {
    render(<Comparator />);

    // Set JSON input
    const jsonInput1 = screen.getByLabelText(/First JSON File/i);
    fireEvent.change(jsonInput1, { target: { value: '{"test": "json"}' } });

    // Switch to XML
    const xmlButton = screen.getByText("XML");
    fireEvent.click(xmlButton);

    // Set XML input
    const xmlInput1 = screen.getByLabelText(/First XML File/i);
    fireEvent.change(xmlInput1, { target: { value: "<test>xml</test>" } });

    // Switch back to JSON
    const jsonButton = screen.getByText("JSON");
    fireEvent.click(jsonButton);

    // Verify JSON input is preserved
    expect(screen.getByLabelText(/First JSON File/i)).toHaveValue(
      '{"test": "json"}'
    );

    // Switch to XML and verify XML input is preserved
    fireEvent.click(xmlButton);
    expect(screen.getByLabelText(/First XML File/i)).toHaveValue(
      "<test>xml</test>"
    );
  });

  it("initializes with XML type when initialType prop is 'xml'", () => {
    render(<Comparator initialType="xml" />);
    expect(screen.getByText("XML Comparator")).toBeInTheDocument();
    expect(screen.getByLabelText(/First XML File/i)).toBeInTheDocument();
  });

  it("initializes with JSON type when initialType prop is 'json'", () => {
    render(<Comparator initialType="json" />);
    expect(screen.getByText("JSON Comparator")).toBeInTheDocument();
    expect(screen.getByLabelText(/First JSON File/i)).toBeInTheDocument();
  });

  it("navigates to JSON comparator page when switching to JSON and isMainPage is false", () => {
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<Comparator initialType="xml" isMainPage={false} />);

    const jsonButton = screen.getByText("JSON");
    fireEvent.click(jsonButton);

    expect(mockRouter.push).toHaveBeenCalledWith("/json-comparator");
  });

  it("navigates to XML comparator page when switching to XML and isMainPage is false", () => {
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<Comparator initialType="json" isMainPage={false} />);

    const xmlButton = screen.getByText("XML");
    fireEvent.click(xmlButton);

    expect(mockRouter.push).toHaveBeenCalledWith("/xml-comparator");
  });

  it("does not navigate when switching types and isMainPage is true", () => {
    const mockRouter = { push: jest.fn() };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    render(<Comparator initialType="json" isMainPage={true} />);

    const xmlButton = screen.getByText("XML");
    fireEvent.click(xmlButton);

    expect(mockRouter.push).not.toHaveBeenCalled();
    expect(screen.getByText("XML Comparator")).toBeInTheDocument();
  });

  it("displays the legend for comparison results", () => {
    render(<Comparator />);

    const input1 = screen.getByLabelText(/First JSON File/i);
    const input2 = screen.getByLabelText(/Second JSON File/i);

    fireEvent.change(input1, { target: { value: '{"test": "value1"}' } });
    fireEvent.change(input2, { target: { value: '{"test": "value2"}' } });

    const compareButton = screen.getByText("Compare");
    fireEvent.click(compareButton);

    expect(screen.getByText("Added")).toBeInTheDocument();
    expect(screen.getByText("Removed")).toBeInTheDocument();
    expect(screen.getByText("Unchanged")).toBeInTheDocument();
  });

  it("updates diffType on initialType prop change", () => {
    const { rerender } = render(<Comparator initialType="json" />);
    expect(screen.getByText("JSON Comparator")).toBeInTheDocument();

    rerender(<Comparator initialType="xml" />);
    expect(screen.getByText("XML Comparator")).toBeInTheDocument();
  });
});
