const {rmdir, unlink} = require("fs").promises;

function getDate(string) {
    let[_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}


console.log(getDate("31-Sep-2004"));

methods.DELETE = async function(request) {
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stats(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {status: 204};
    }
    if (stats.isDirectory()) await rmdir(path);
    else await unlink(path);
    return {status: 204};
};
