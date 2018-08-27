import config from "@app/lib/data";
import { HistoryActionType } from "@app/lib/history";
import { fetchPosts } from "@app/store/blog";
import { decrement } from "@app/store/counter";
import { delay } from "@app/lib/delay";

export default config({
  action: [HistoryActionType.POP, HistoryActionType.PUSH],
  routes: {
    "/": async params => {},
    "/about": async (dispatch, params) => {
      await dispatch(decrement());
    }
  }
});
