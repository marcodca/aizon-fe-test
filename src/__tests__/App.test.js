import App from "App.jsx";

describe("<App />", () => {
  it("should render a component", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('tabs')).toBeInTheDocument();
  });
});
