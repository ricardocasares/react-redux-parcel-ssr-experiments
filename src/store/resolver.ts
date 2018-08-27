import config from "@app/lib/data";
import { HistoryActionType } from "@app/lib/history";
// import { decrement } from "@app/store/counter";

export default config({
  action: [HistoryActionType.POP, HistoryActionType.PUSH],
  routes: {
    "/": async params => {},
    "/about": async (dispatch, params) => {
      // await dispatch(decrement());
    }
  }
});
