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

module.exports={
    promiseSerial: promiseSerial,
    getUserId: getUserId,
    getUserCustomDir: getUserCustomDir
}