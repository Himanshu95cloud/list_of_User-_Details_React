import makeHttpRequest from "./MakeHttpRequest";
import {
  AT_API_GATE_WAY_URL,
  API,
  USERS,
  PAGE,
  PER_PAGE,
  USER,
} from "./AppConstant";

export const getUserList = (page) => {
  return makeHttpRequest({
    path: `${AT_API_GATE_WAY_URL}/${API}/${USERS}${PAGE}${page}${PER_PAGE}${5}`,
    method: "GET",
  });
};
export const getUserDetails = (id) => {
  return makeHttpRequest({
    path: `${AT_API_GATE_WAY_URL}/${API}/${USER}/${id}`,
    method: "GET",
  });
};
