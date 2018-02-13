const shorthash= require('shorthash');

function getUserId(req){
    var ip= req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var userAgent= req.headers['user-agent'] || '';
    var userId= ip + userAgent;
    // userId= userId.replace(/[^\d\w]/g, ''); //sanitize user id since it is user as a folder name
    return shorthash.unique(userId);
}

function getUserCustomDir(userId){
    return `primo-explore/custom/${userId}`;
}

function promiseSerial(funcs, param) {
    return funcs.reduce((promise, func) =>
            promise.then(result => func(param).then(Array.prototype.concat.bind(result))),
        Promise.resolve([]));
}

function sendErrorResponse(res, err){
    console.log(err.message);
    var response = {status:'500'};
    res.send(response);
}

function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURIComponent(parts.join('='));
    });

    return list;
}

function getRequestBody(request){
    return new Promise((resolve, reject)=>{
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            // at this point, `body` has the entire request body stored in it as a string
            resolve(body);
        });
    });

}

module.exports={
    promiseSerial: promiseSerial,
    getUserId: getUserId,
    getUserCustomDir: getUserCustomDir,
    sendErrorResponse: sendErrorResponse,
    parseCookies: parseCookies,
    getRequestBody: getRequestBody
}