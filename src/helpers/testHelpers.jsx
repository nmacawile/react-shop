import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export const mockStore = configureStore([]);
export const store = mockStore({ cart: { value: { items: [], total: 0.0 } } });

export function withRedux(children, _store = store) {
  return <Provider store={_store}>{children}</Provider>;
}

export function renderWithRedux(children, _store = store) {
  return render(withRedux(children, _store));
}

export function renderWithReduxAndBrowserRouter(children, _store = store) {
  return render(<BrowserRouter>{withRedux(children, _store)}</BrowserRouter>);
}
