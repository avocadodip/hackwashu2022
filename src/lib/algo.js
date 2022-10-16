import {google} from 'googleapis';
const API_KEY = 'AIzaSyAZ_w6_cGwvBNASZFV-eXPxKSVBnRGAYVA';
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

function analyzeComment(text) {
  return new Promise((resolve, reject) => {
  google.discoverAPI(DISCOVERY_URL)
    .then(client => {
      const analyzeRequest = {
        comment: { text },
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
          resolve(stor2);
        });
  })
  .catch(err => {
    reject(err);
  });
  });
};

function getScore(phrase) {
  analyzeComment(phrase)
    .then((toxicityValue => console.log(toxicityValue)))
    .catch((err) => console.error(err));
}

getScore('blah');