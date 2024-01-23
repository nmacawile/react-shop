import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

export const mockStore = configureStore([]);
export const store = mockStore({ cart: { value: [] } });

export default function renderWithProviderWrapper(children, _store = store) {
  return <Provider store={_store}>{children}</Provider>;
}
