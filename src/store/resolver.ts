import config from "@app/lib/data";
import { HistoryActionType } from "@app/lib/history";
import { fetchPosts } from "@app/store/blog";
import { sleep } from "@app/lib/delay";

export default config({
  wait: true,
  action: [HistoryActionType.POP, HistoryActionType.PUSH],
  routes: {
    "/blog": async (dispatch /*params*/) => {
      console.log("loading posts");
      await dispatch(fetchPosts());
      await sleep(2000);
      console.log("posts loaded");
    }
  }
});
