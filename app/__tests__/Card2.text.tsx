import Card2 from "@/components/aboutme/Card2";
import { render } from "@testing-library/react";

// Handles missing image sources gracefully
describe("Card2", () => {
  it("should handle missing image sources gracefully", () => {
    const { getByAltText } = render(<Card2 />);
    const gridImage = getByAltText("grid");
    const b4Image = getByAltText("b4");
    expect(gridImage).toHaveAttribute("src", "/grid.svg");
    expect(b4Image).toHaveAttribute("src", "/b4.svg");
  });
});
