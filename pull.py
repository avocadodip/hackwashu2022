def pull_values():
    from googleapiclient import discovery
    import json

    API_KEY = 'AIzaSyDe3TeiAvpR5WD0EmnuI6qx6PM2PrAcmCA'

    client = discovery.build(
    "commentanalyzer",
    "v1alpha1",
    developerKey=API_KEY,
    discoveryServiceUrl="https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1",
    static_discovery=False,
    )

    input1 = input()
    analyze_request = {
    'comment': { 'text': input1 },
    'requestedAttributes': {'SEVERE_TOXICITY': {}}
    }
    analyze_request_dos = {
    'comment': { 'text': input1 },
    'requestedAttributes': {'THREAT': {},'IDENTITY_ATTACK': {}, 'INSULT': {}}
    }


    response = client.comments().analyze(body=analyze_request).execute()
    responseD = client.comments().analyze(body=analyze_request_dos).execute()
    stor = str(response)
    storD = str(responseD)
    stor2= stor.split('summaryScore')
    stor2.pop(0)
    l = []
    for i in stor2:
        sto = i[13:22:1]
        ret = float(sto)
        l.append(ret)
    stor3= storD.split('summaryScore')
    stor3.pop(0)
    for i in stor3:
        sto = i[13:22:1]
        ret = float(sto)
        l.append(ret)
    
    print (l)
    return l

pull_values()