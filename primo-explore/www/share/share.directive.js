/**
 * Created by shoulm on 15/02/2018.
 */

class PrmShare{
    constructor(shareService){
        this.shareService = shareService;
        this.options =  {
			         filename: 'target1.png',
			         downloadText: 'Download me',
			         cancelText: 'Close it!'
		           }
    }


    createImage(){
      this.shareService.createCanvas().then((response)=>{
          console.log('canvas created');
      }, (err)=>{
          console.log('failed to create canvas: '+ err)
      });
    }
}
PrmShare.$inject=['shareService'];

module.exports = {
    name: 'prmShare',
    config: {
        controller: PrmShare,
        templateUrl: '/share/share.html'
    }
}
