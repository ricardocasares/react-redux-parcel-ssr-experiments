import config from "@app/lib/data";
import { HistoryActionType } from "@app/lib/history";
import { fetchPosts } from "@app/store/blog";
import { sleep } from "@app/lib/delay";

export default config({
  wait: true,
  action: [HistoryActionType.POP, HistoryActionType.PUSH],
  routes: {
    "/blog": async (dispatch /*params*/) => {
      await sleep(1000);
      await dispatch(fetchPosts());
    }
  }
});
