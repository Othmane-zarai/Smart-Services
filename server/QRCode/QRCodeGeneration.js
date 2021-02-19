var QRCode = require('qrcode');

const generateQRCode = async text => {
    try{
        console.log(await QRCode.toDataURL(text));
    } catch(err){
        console.error(err);
    }
}
const printQRCode = async text => {
    try{
        console.log(await QRCode.toString(text, {type:'terminal'},{
            function(QRCode,err){
                if(err){
                    console.error(err);
                }
                else{
                    console.log(QRCode);
                }
            }
        }))
    }catch(err){
        console.error(err);
    }
}
//Generate Data about Request
printQRCode("This is a test");
generateQRCode("This is a test");
module.exports = generateQRCode;
module.exports = printQRCode;