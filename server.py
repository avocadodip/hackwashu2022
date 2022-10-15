from flask import Flask, render_template
from googleapiclient import discovery

app = Flask(__name__)

# @app.route('/')
# def index():
#   return render_template('index.html')

@app.route('/')
def scorealgo():
 
   API_KEY = 'AIzaSyDe3TeiAvpR5WD0EmnuI6qx6PM2PrAcmCA'
 
   client = discovery.build(
   "commentanalyzer",
   "v1alpha1",
   developerKey=API_KEY,
   discoveryServiceUrl="https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1",
   static_discovery=False,
   )
 
   input1 = "I love Anthony"
   analyze_request = {
   'comment': { 'text': input1 },
   'requestedAttributes': {'SEVERE_TOXICITY': {}}
   }
   analyze_request_dos = {
   'comment': { 'text': input1 },
   'requestedAttributes': {'IDENTITY_ATTACK': {}, 'INSULT': {}}
   }
 
 
   response = client.comments().analyze(body=analyze_request).execute()
   responseD = client.comments().analyze(body=analyze_request_dos).execute()
   stor = str(response)
   storD = str(responseD)
   stor2= stor.split('summaryScore')
   stor2.pop(0)
   l = []
   for i in stor2:
       sto = i[13:18:1]
       ret = float(sto)
       l.append(ret)
   stor3= storD.split('summaryScore')
   stor3.pop(0)
   for i in stor3:
       sto = i[13:18:1]
       ret = float(sto)
       l.append(ret)
 
 
   tox = l[0]
   badmax = max(l[1],l[2])
   score = 0
   #score out of 20
   if 0.9 > tox > 0.4:
       score += (tox*10)
   elif tox > 0.9:
       score+= 20
   elif 0.2 < tox < 0.4:
       score += 1
 
   if  badmax > 0.8:
       score +=20
   elif 0.8 > badmax > 0.2:
       score += (badmax*20)
 
 
   score=min(20, score)
   fif = ((20-score)/5)+1
   print (fif)
   return fif


# if __name__ == '__main__':
#   app.run(debug=True)
if __name__ == '__main__':
    app.debug = True
    app.run()

