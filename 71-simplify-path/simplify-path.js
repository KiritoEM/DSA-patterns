/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let stack = [];
    let pathArr = path.split("/").filter((p) => p !== "");

    for (let p of pathArr) {
        if (p === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
        }
        else if (p === ".") {
            continue;
        }
        else {
            stack.push(p);
        }
    }

    return "/" + stack.join("/");
};