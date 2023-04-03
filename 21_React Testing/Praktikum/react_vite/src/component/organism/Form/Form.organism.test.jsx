import renderer from "react-test-renderer";
import Form from "./Form.organism";

describe("Form.organism.jsx", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
