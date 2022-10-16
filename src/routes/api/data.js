import { google } from 'googleapis';
const API_KEY = 'AIzaSyDe3TeiAvpR5WD0EmnuI6qx6PM2PrAcmCA';
const DISCOVERY_URL =
   'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1';

export function get(req, res) {
google.discoverAPI(DISCOVERY_URL)
   .then(client => {
     const analyzeRequest = {
       comment: {
          text: req.query.text
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
           res.status(200).json(arg2);
         });
   })
   .catch(err => {
     res.status(500).send(err.toString());
   });
}