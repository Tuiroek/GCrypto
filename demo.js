// import NodeRSA from './node_modules/node-rsa/src/NodeRSA.js';
// import * as NodeRSA from '.node-rsa';
const NodeRSA = require('node-rsa');
const key = new NodeRSA({ b: 512 });



document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");
    console.log({ form })
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("form submission stopped");


        const key = new NodeRSA({ b: 1024 });
        let secret = document.getElementById("Encrypted-Message").value;

        var encryptedString = key.encrypt(secret, 'base64')// This(Key) is a combination of public and private key
        console.log(encryptedString);
        document.getElementById("Encrypted-Message").value = encryptedString;

        //OWl7wP+tFtvHhdm7ZkUzibw1cd695w4A38D6yJUIu+phj20lDp98IoZ+AzRkcQbKnl60UubVSS0InahL+TZGv64911so+DmzNb05uA1GShU1NJaCp3G8VEo6qsC+yAZY8X8uRWjzkK6wK8BEFFLrI10z8wT8/HB+3eTYHwAV1Bc=

        var decryptedString = key.decrypt(encryptedString, 'utf8');
        console.log(decryptedString);

        var publickey = key.exportKey('public')
        var privatekey = key.exportKey('private')
        // console.log(privatekey);
        // console.log(publickey);
        e.currentTarget.submit();

    })
    //publickey =
    //privatekey=
})
