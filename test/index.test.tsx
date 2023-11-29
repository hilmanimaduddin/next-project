import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home page", () => {
  test("renders welcome message", () => {
    render(<Home />);
    const welcomeMessage = screen.getByText(/Welcome to Next.js/i);
    expect(welcomeMessage).toBeInTheDocument();
  });
});
