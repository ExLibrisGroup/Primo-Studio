/**
 * Created by shoulm on 15/02/2018.
 */
class PrmDownloadPackage{
    constructor($http){
        this.$http = $http;
    }
    downloadPackage(){
        this.$http({method: 'GET', url:'/package', responseType: 'arraybuffer'}).then((data)=>{
            let url = URL.createObjectURL(new Blob([data.data]));
            let a = document.createElement('a');
            a.href = url;
            a.download = 'package.zip';
            document.body.appendChild(a);
            a.click();
            setTimeout(function(){
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 100);
        });
    }
}
PrmDownloadPackage.$inject=['$http'];

module.exports = {
    name: 'prmDownloadPackage',
    config: {
        controller: PrmDownloadPackage,
        templateUrl: '/downloadPackage/download-package.html'
    }
}
