import google from 'googleapis';

export const getPostRating = (postContent) => {
  const API_KEY = 'AIzaSyAZ_w6_cGwvBNASZFV-eXPxKSVBnRGAYVA';
const DISCOVERY_URL =
   'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1';
google.discoverAPI(DISCOVERY_URL)
   .then(client => {
     const analyzeRequest = {
       comment: {
         text: 'hello world',
       },
       requestedAttributes: {
         TOXICITY: {}, INSULT: {}, IDENTITY_ATTACK: {}
       },
     };
 
     client.comments.analyze(
         {
           key: API_KEY,
           resource: analyzeRequest,
         },
         (err, response) => {
           if (err) throw err;
           stor2 = JSON.stringify(response.data, null, 2);
           let arg = stor2.split('\"value\": ');
           for (let i = 0; i<3; i++)
             {
               let strrr = arg[2*i+1].slice(0, 4);
               console.log()
               arg2.push(parseFloat(strrr));
             }
           console.log(arg2);
           return arg2;
         });
   })
   .catch(err => {
     throw err;
   });

} 

console.log(getPostRating());