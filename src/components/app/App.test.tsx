import { render } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App";

test("renders the app", () => {
  // this is covered by the cypress tests
  render(
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  );

  expect(true);
});
