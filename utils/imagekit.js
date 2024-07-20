// SDK initialization

var ImageKit = require("imagekit");

exports.initImageKit = ()=>{

    
    var imagekit = new ImageKit({
        publicKey : process.env.PUBLIC_KEY,
        privateKey : process.env.PRIVATE_KEY,
        urlEndpoint : process.env.URL_ENDPOINT,
    });

    return imagekit;
 
}