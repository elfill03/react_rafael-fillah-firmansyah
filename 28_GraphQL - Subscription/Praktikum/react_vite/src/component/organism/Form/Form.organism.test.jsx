import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../Config/redux/store";
import Form from "./Form.organism";

describe("Form.organism.jsx", () => {
  it("should accept and display input text on the page", () => {
    const { getByTestId, getByLabelText } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
      { container: document.getElementById("createForm") }
    );
    // TEST PRODUCTNAME
    const input = getByTestId("productname");
    const inputValue = "products";
    fireEvent.change(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
    // END TEST PRODUCTNAME

    // TEST PRODUCTCATEGORY
    const productCategoryInput = getByLabelText("Product Category :");
    const productCategoryValue = "Choose...";
    fireEvent.change(productCategoryInput, {
      target: { value: productCategoryValue },
    });
    expect(productCategoryInput.value).toBe(productCategoryValue);
    // END TEST PRODUCTCATEGORY

    // TESTPRODUCTFRESHNESS
    const productFreshnessInput = getByTestId("productfreshness");
    const productFreshnessValue = "Brand New";
    const brandNewOption = getByLabelText(productFreshnessValue);
    fireEvent.click(brandNewOption);
    expect(
      productFreshnessInput.querySelector(
        `input[value="${productFreshnessValue}"]`
      ).checked
    ).toBe(true);
    // END TEST PRODUCTFRESHNESS

    // TEST PRODUCTDESCRIPTION
    const productDescriptionInput = getByLabelText("Additional Description");
    const productDescriptionValue = "Product Description";
    fireEvent.change(productDescriptionInput, {
      target: { value: productDescriptionValue },
    });
    expect(productDescriptionInput.value).toBe(productDescriptionValue);
    // END TEST PRODUCTDESCRIPTION

    // TEST PRODUCTPRICE
    const productPriceInput = getByLabelText("Product Price :");
    const productPriceValue = "100";
    fireEvent.change(productPriceInput, {
      target: { value: productPriceValue },
    });
    expect(productPriceInput.value).toBe(productPriceValue);
    // END PRODUCTPRICE
  });
  it("should show error message when all form fields are empty", async () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const submitButton = getByTestId("submitbutton");

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText("Please fill this field!")).toBeInTheDocument();
      expect(getByText("Please choose Product Category!")).toBeInTheDocument();
      expect(getByText("Please insert Product Image!")).toBeInTheDocument();
      expect(getByText("Please choose Product Freshness!")).toBeInTheDocument();
      expect(getByText("Please fill this fdescription!")).toBeInTheDocument();
    });
  });
});
