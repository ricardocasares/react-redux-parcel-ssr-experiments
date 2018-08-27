import config from "@app/lib/data";
import { HistoryActionTypes } from "@app/lib/history";
import { fetchPosts } from "@app/store/blog";

export default config({
  action: HistoryActionTypes.PUSH,
  routes: {
    "/": async (dispatch, params) => {},
    "/about": async (dispatch, params) => {
      await dispatch(fetchPosts());
    }
  }
});
