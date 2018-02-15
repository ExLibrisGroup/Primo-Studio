/**
 * Created by shoulm on 15/02/2018.
 */
class FileUploaderService{
    constructor($http){
        this.$http = $http;
    }

    uploadFiles(uploadUrl, filesMap){
        let fd = new FormData();
        for (let key in filesMap){
            fd.append(key, filesMap[key]);
        }
        return this.$http.post(uploadUrl, fd, {
            withCredentials: true,
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        });
    }
}
FileUploaderService.$inject= ['$http'];

module.exports = {
    name: 'fileUploaderService',
    service: FileUploaderService
}