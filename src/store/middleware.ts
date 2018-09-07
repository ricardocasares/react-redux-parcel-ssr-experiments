import fetch from "isomorphic-unfetch";

import State from "@app/models";
import configureHttp from "@app/lib/http";
import configureDebounce from "@app/lib/debounce";
import configureErrorHandler from "@app/lib/errors";

import configResolver from "@app/lib/data";
import { fetchPosts } from "@app/store/blog";
import { HistoryType } from "@app/lib/history";

export const http = configureHttp(fetch);
export const debounce = configureDebounce([250, 500, 1000]);

export const errors = configureErrorHandler<State>((error, state, action) => {
  console.error(error);
  console.log(state);
  console.log(action);
});

export const resolver = configResolver({
  wait: true,
  extract: payload => payload,
  actions: [HistoryType.POP, HistoryType.PUSH],
  routes: {
    "/blog": async (dispatch /*params*/) => {
      await dispatch(fetchPosts());
    }
  }
});
