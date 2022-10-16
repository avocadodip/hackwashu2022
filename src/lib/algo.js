import google from 'googleapis';

export const getPostRating = (postContent) => {
  API_KEY = 'AIzaSyDe3TeiAvpR5WD0EmnuI6qx6PM2PrAcmCA';
  DISCOVERY_URL =
    'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1';
  let stor='';
  let stor2='';
  let words='';
  let arg2=[];
  google.discoverAPI(DISCOVERY_URL)
    .then(client => {
      const analyzeRequest = {
        comment: {
          text: 'fuck you bitch',
        },
        requestedAttributes: {
          SEVERE_TOXICITY: {},
        },
      };
        const analyzeRequestdos = {
        comment: {
          text: 'fuck you bitch',
        },
        requestedAttributes: {
          IDENTITY_ATTACK: {}, INSULT: {}
        },
      };
        client.comments.analyze(
          {
            key: API_KEY,
            resource: analyzeRequest,
          },
          (err, response) => {
            if (err) throw err;
            stor = JSON.stringify(response.data, null, 2);
          });
        client.comments.analyze(
        {
          key: API_KEY,
          resource: analyzeRequestdos,
        },
        (err, response) => {
          if (err) throw err;
          stor2 = JSON.stringify(response.data, null, 2);
          words = stor.concat(stor2);
          // console.log(words)
            let arg = words.split('\"value\": ');
          for (let i = 0; i<3; i++)
            {
              let strrr = arg[2*i+1].slice(0, 4);
              console.log()
              arg2.push(parseFloat(strrr));
            }
          // console.log(arg2);
          return arg2;
        });
    })
    .catch(err => {
      throw err;
    });
} 
