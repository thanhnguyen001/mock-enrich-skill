import { tree } from "constants/tree";

export const calculateCreatedTime = (createdAt: string): string => {
  const createdDate = new Date(createdAt);
  const current = new Date();
  let result = "";

  if (current.getFullYear() > createdDate.getFullYear()) {
    result = createdDate
      .toString()
      .split(" ")
      .filter((_, index) => index > 0 && index < 4)
      .join(" ");
  } else if (current.getMonth() > createdDate.getMonth() || current.getDate() > createdDate.getDate()) {
    result = createdDate
      .toString()
      .split(" ")
      .filter((_, index) => index > 0 && index < 3)
      .join(" ");
  } else if (current.getHours() > createdDate.getHours()) {
    const monthsAgo = Math.abs(Number(current.getHours()) - Number(createdDate.getHours()));
    result = `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
  } else if (current.getMinutes() > createdDate.getMinutes()) {
    const daysAgo = Math.abs(Number(current.getMinutes()) - Number(createdDate.getMinutes()));
    result = `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else {
    result = "just now";
  }

  return result;
};

/**
 *
 * @param path ex: something/:name/:abc?search={search}&page={page}
 * @param params name, abc
 * @param queries search, page
 * @returns something/name/abc?search=search&page=page
 */
export function buildApi<T, D>(path: string, params: T | null = null, queries: D | null = null): string {
  let api = "";
  let [paramPath, queryPath] = path.split("?");
  const paramKey = paramPath?.split("/").filter((item) => item.includes(":"));
  const queryKey = queryPath?.split("&").map((item) => item.split("=")[0]);

  if (params) {
    paramKey?.forEach((item) => {
      const key = item.replace(":", "");
      const value = params[key as keyof typeof params] as string;
      paramPath = paramPath.replace(item, value);
    });
  }

  if (queries) {
    queryPath = "";
    // ## base on api
    // queryKey?.forEach((item, index) => {
    //   const value = queries[item as keyof typeof queries];
    //   queryPath += `${index > 0 ? "&" : ""}${item}=${value}`;
    // });
    
    // ## base on queries be passed
    let index = 0;
    for (let key in queries) {
      const value = queries[key as keyof typeof queries];
      queryPath += `${index > 0 ? "&" : ""}${key}=${value}`;
      index++;
    }
  }

  api = `${paramPath}${queryPath ? "?" + queryPath : ""}`;

  return api;
}

export const hashBreadcrumb = (currentRouteList: string[]) => {
  const list = [];
  let i = 0;
  let piece: any = null;
  let path = "";
  while (i < currentRouteList.length) {
    let item = currentRouteList[i];
    path = path + "/" + item;
    if (i === 0) {
      piece = tree[item];
    } else {
      piece = piece ? piece[item] : null;
    }
    if (piece?.title) {
      list.push({ title: piece?.title, path: path });
    } else {
      break;
    }
    i++;
  }
  return list;
};
