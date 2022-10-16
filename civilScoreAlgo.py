def scorealgo(l):
    tox = l[0]
    badmax = max(l[1],l[2],l[3])
    score = 0
    #score out of 20
    if 0.6 > tox > 0.4:
        score += 5
    elif tox > 0.8:
        return 20
    elif 0.8 > tox > 0.6:
        score += 10
    elif 0.2 < tox < 0.4:
        score += 2

    if  badmax > 0.5:
        return 20 
    elif badmax > 0.2:
        score += badmax*15

    return score 


