/**
 * Created by shoulm on 06/02/2018.
 */
class ShareService{
    constructor(){
    }
    createCanvas(){
      html2canvas(document.querySelector("#primo-explore-iframe-container")).then(function(canvas) {
          document.body.appendChild(canvas);

      });
    }

}
ShareService.$inject= [];


module.exports = {
    name: 'shareService',
    service: ShareService
}
