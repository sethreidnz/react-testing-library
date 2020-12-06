import { generateQueryString } from "@utility/queryString";

describe("@utility/queryString", () => {
  describe("generateQueryString()", () => {
    it("generates correctly with no params", () => {
      const params = undefined;
      const result = generateQueryString(params);
      expect(result).toBeUndefined();
    });

    it("generates correctly with single param", () => {
      const params = {
        test: "Testing 1",
      };
      const result = generateQueryString(params);
      expect(result).toBe("?test=Testing%201");
    });

    it("generates correctly with two params", () => {
      const params = {
        test: "Testing 1",
        email: "test@test.com",
      };
      const result = generateQueryString(params);
      expect(result).toBe("?test=Testing%201&email=test%40test.com");
    });
  });
});
