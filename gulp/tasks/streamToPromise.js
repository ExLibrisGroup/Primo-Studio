module.exports =  function streamToPromise(stream) {
    return new Promise(function(resolve, reject) {
        stream.on("close", resolve);
        stream.on("end", resolve);
        stream.on("error", reject);
    });
}