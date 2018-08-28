import config from "@app/lib/data";
import { HistoryActionType } from "@app/lib/history";
import { fetchPosts } from "@app/store/blog";

export default config({
  action: [HistoryActionType.POP, HistoryActionType.PUSH],
  routes: {
    "/blog": async (dispatch, params) => {
      await dispatch(await fetchPosts());
    }
  }
});
