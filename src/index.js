/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

const { execSync } = require('child_process');
module.exports = function getLoveTrianglesCount(preferences = []) {

    let res = execSync(`curl -s http://136.243.57.23:3000/new-love-triangle -X POST -H "Content-Type: application/json" -d '${JSON.stringify({preferences})}'`);
    res = JSON.parse(res);

    return res.result;
};
