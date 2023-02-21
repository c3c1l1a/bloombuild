import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { hydrateRoot } from "react-dom/client";
import store from './redux/configureStore';
console.log(store);

const hydrate = () => {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <Provider store={store}>
          <RemixBrowser />
        </Provider>
      </StrictMode>
    );
  });
};

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
