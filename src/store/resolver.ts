import config from "@app/lib/data";
import { HistoryType } from "@app/lib/history";
import { fetchPosts } from "@app/store/blog";

export default config({
  wait: true,
  extract: payload => payload,
  actions: [HistoryType.POP, HistoryType.PUSH],
  routes: {
    "/blog": async (dispatch /*params*/) => {
      await dispatch(fetchPosts());
    }
  }
});
