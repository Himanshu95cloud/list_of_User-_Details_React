import makeHttpRequest from "./MakeHttpRequest";
import { AT_API_GATE_WAY_URL, API, USERS, PAGE, PER_PAGE } from "./AppConstant";

export const getUserList = (startPage, endPage) => {
  return makeHttpRequest({
    path: `${AT_API_GATE_WAY_URL}/${API}/${USERS}/${PAGE}${1}${PER_PAGE}${5}`,
    method: "GET",
  });
};
export const getUserDetails = (id) => {
  return makeHttpRequest({
    // path: `${AT_API_GATE_WAY_URL}/${API}/${SYLLABUS}/${UPDATE_Ai_SYLLABUS_MAPPING_DATA}/`,
    method: "POST",
    body: {
      id: id,
    },
  });
};
