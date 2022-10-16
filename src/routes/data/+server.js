import { google } from 'googleapis';
import { error } from '@sveltejs/kit';
const API_KEY = 'AIzaSyDe3TeiAvpR5WD0EmnuI6qx6PM2PrAcmCA';
const DISCOVERY_URL =
  'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1';

  function findValues(object) {
  const values = [];

  for (const key in object) {
    if (key === 'value') {
      values.push(object[key]);
    } else {
      if (Array.isArray(object[key])) {
        values.push(...object[key].map((elem) => findValues(elem)));
      } else if (typeof object[key] === 'object') {
        values.push(...findValues(object[key]));
      }
    }
  }
  return values;
}

export function GET({ url }) {
google.discoverAPI(DISCOVERY_URL)
   .then(client => {
     const analyzeRequest = {
       comment: {
          text: url.searchParams.get('text')
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
           const stor2 = findValues(response.data);
           console.log(stor2);
           return new Response(JSON.stringify(arg2));
         });
   })
   .catch(err => {
     throw error(500, err.toString());
   });
}