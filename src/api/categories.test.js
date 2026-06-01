import getCategories from "./categories";

describe("getCategories", () => {
  it("should set categories when the API call is successful", async () => {
    const setCategories = jest.fn();

    await getCategories({ setCategories });

    expect(setCategories).toHaveBeenCalled();
  });
});