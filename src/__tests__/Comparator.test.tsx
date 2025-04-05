import { render, screen, fireEvent } from "@testing-library/react";
import Comparator from "../components/Comparator";

describe("Comparator", () => {
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
});
