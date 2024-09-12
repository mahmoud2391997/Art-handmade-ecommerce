import axios from "axios";
import getCategories from "./categories";
import axiosMockAdapter from "axios-mock-adapter";

describe("getCategories", () => {
  let mock;

  beforeEach(() => {
    mock = new axiosMockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("should set categories when the API call is successful", async () => {
    const categoriesData = [
      { id: 1, name: "Painting" },
      { id: 2, name: "Sculpture" },
    ];
    const setCategories = jest.fn();

    mock
      .onGet("https://art-ecommerce-server.glitch.me/api/categories")
      .reply(200, categoriesData);

    await getCategories({ setCategories });

    expect(setCategories).toHaveBeenCalledWith(categoriesData);
  });

  it("should handle API call failure", async () => {
    const setCategories = jest.fn();

    mock
      .onGet("https://art-ecommerce-server.glitch.me/api/categories")
      .reply(500);

    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    await getCategories({ setCategories });

    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});
