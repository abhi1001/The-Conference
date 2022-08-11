const data = [
    {
    name: 'Whats outside the universe?',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660244400&Signature=fuLMeLhp5vtWxFKEc6ZtjOlnG85dqpc38Mu7CB4c%2dwXyfDOdCbUR%7e6BVBKqLDGFCkG%7e%7eL6cJ%2dRrcYy45FtC5Yd%7eu4PdZ7h5LqZJ6Fp3MTRFXtI9nwMBTIVOjtr3amPcNjNpgCTgw%2diOK3iEyTcbzTgQrn0hpZ1lJukLpv4Bf8GDGva80no%2dgfS%7e6%7epUkuGa13Ca7JXQxUuRyFsTGCw63V0gTOuTcRRNuGgP3JFStmnOD0zY0IQcBe1rNFdppoLCCtCPNQgXPPwUOwgRLt28nFK8vogH6%2ddd%7es094sVFxzFt6nOicq6AQ5IBeeEnUyaaoZFMJZG1qM%2d5MgfaMqiZNKQ%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2019 ]
    },
    {
    name: 'God in the machine',
    video: 'https://delivery.twentythree.com/599344/55156343/video_medium?revision=3&domain=videos.theconference.se&Expires=1660244400&Signature=FPwCQNMo8NFQiwOZNz1cJYqcjayO%7eQBwHQW3dYrXFYYVyteVUVeDN%2dGvAJmU5iJAldAZgECRBJrLtH8NOwiQyZOo4o3lwM9KfXaq1MsjkvvvOObnGnkzp2hU00igMFQUHulJSH8Z8SD4Ha%2d7gVcWkdsW%7enwEYuFbUYRs33QsIYa3l5y6MZpxyS7Hy60jb8P0%7eCQXtaZ2y%7eHGic%2dgxophxA40DGvzOYj7QUqrpvhxZ%2dfDUvgmdXldwqKtuT09FDsowv%7e0yqI9SMAM2%2dgoM75DhXUDeF%2dWsvZYcMeCM%7e2kdx9koNMS5cCjlZIVxndfl0r%7eGVp%2dCy%2d7n8%2dOVGUB5S2KHA%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2019 ]
    },
    {
    name: 'Owning The City',
    video: 'https://delivery.twentythree.com/599344/18933376/video_medium?revision=1&domain=videos.theconference.se&Expires=1660244400&Signature=SZtg52DNaCrTzqNI30gp35CFA%2devSRYqx167NLqdNxFEymzevIMIUd7KPwPqwU3ptFXHrry8hA6pU4mBcu7rud0csDD4%7edgKBg3K9kgBCcMMrwJl7PriZTmi2kk%2dxMpa0KqH%2dys7LpT8fRLE8OjGwuE%7ez%2d8wCtz9eRDwnRgjM8xGifDTbDrFX8arUmPVk%7eiooZBOHbqMFbVWmMcIGO%2d3w4yQdg616%7e05ZYsleaTy5ZJJUBol1Xic2JZC%7ejnArZYlkc32G9m6TBjyMbjcEuu1qMU3ClbbLxYeukDeIvgyvMFALbH99LNyoBgTMIuNtKSD7JnwlcygOkSYiZUdOdyP1g%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2017 ]
    },
    {
    name: 'How to do nothing',
    video: 'https://delivery.twentythree.com/599344/18928939/video_medium?revision=1&domain=videos.theconference.se&Expires=1660244400&Signature=ZgLsTxgDLzovitZc2JrM4GTRMLQs%2d3GLsZy1mUR0B3Fma4HZGu1yhCS%7eL69gUISzbUCrQS5OvcnNjQSzKw8mydf%7eojiCafHZUEoWkNtEdQlAqGfsqsP%2dA3IylhjOC8gg3VrsGl8RcAH19Es%2dAICXdgTO3VBnnV5slUNABBGdRWRDgf6huS2TFnfkoEEBGK4zEvL6FzPD82UKB5x766MWCU8%7ez7vXb9NK3FrBEBmn3KVle%7eZo%7eNwqFE6cEGelQ3htKMsZtWK%7eU8kmf2VD48NRK%2dDDps0tGfAXJOqx57lRa7DOnkpWFvWjcv6tkaSCU%7ean13A3Xt6bBW9%2dzYd7iH6zjA%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2017 ]
    },
    {
    name: 'Designing nature',
    video: 'https://delivery.twentythree.com/599344/35477001/video_medium?revision=3&domain=videos.theconference.se&Expires=1660244400&Signature=f9TJa0HcDHph9T43%7eqDFSfnNFhUyMja9AfFTh1mOmXsU8RnwaVcNutQqTILMDc8GtXgA1ptbeWB3mPGgcLDstZaFfU7pKNc1Bkyx5zm0UgRNWipscllDKdwKGYLfjoCtlbWpbmZDAOAakTiauN4M%2d%7eUbaGung1Uy%2dHtfHBr5sYa1XXEKCnAKOSZ1G6pdXm0XHO2mkhxAZLDsEUt%7ekev2S5Gkn9uzz%7euOO4DEYXgFL99WnUOPpLwpB%2dqy2HYWLW52Q3HZF4MV6o0oFfcLDHuv3b6MjTStAudiog81yZuHA9rnAYfcgCKrp84fiMPnKVxc05dtsqXOFUaICt4aOex7wA%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2018 ]
    },
    {
    name: 'The need for a boring revolution',
    video: 'https://delivery.twentythree.com/599344/35467369/video_medium?revision=3&domain=videos.theconference.se&Expires=1660244400&Signature=SJd0br3JIV3Rk8QyvJsT1PGXaX3FvaE6PlYvZJRe1UT6UC9jX4a5oopki8A0zNU8j8VpDmx2k0MRZkdLCDD3C1qqX4XNnu4BelyzhKadgSxSVKBpv3qmXtNO8D%2d6hP%7eWRmDxius2mp%7el0QO9y57mfbEe7HHGu7vczSdBYWdi91iyLAWZ8nGji3dESsq%2dY7qCu3SwKM%2dNgEHPKlKQZQWOJZeufV%2d78IVt2eWnSy7EucIOQzuVe%7ebf6Lq%2dyCPetlw6D%7ehFpLw23IlDP9U%2d0Wt6db60PxbfRgnIv7n8tEKTtFAlYOlxnAASqpz3%7e223iZjjePZcXooXyCk0TFZiCT1sxg%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2018 ]
    },
    {
    name: 'Creating the new social web',
    video: 'https://delivery.twentythree.com/599344/55186676/video_medium?revision=3&domain=videos.theconference.se&Expires=1660244400&Signature=QU7JLwHGAvWFTRR%7e45L4tqI9%7eijyiofFnWTmBAMaVQv2J7kO4BdU3Mq5zyhJfpfApZO0CB3g3QVTbn1M77YJRSy%2daHxqdQaWTl62XcXJAy6DQ3Qea5iU3b1GAttfkDAoW8fsQ5bX4ISyrGnX7AVFbkHgGT5GLrPpuezBKutYvJIwfDgBEplCn%7e9RfLwO3n%2dKCNfuESoZB8rLU175EfsQIsppd3MVTpKteGcKPQXlCoCxs61XLabUiwK6gE8G%2dQFUpAEPJGX%7eFxGfn6izLhHnwoCmhenz92%2dMtOLq2AJJW%7e0Jb3hbc%7eSJjsWnJHvNTkDYytms7dqJMuiQvs7z4y6GvQ%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2019 ]
    },
    {
    name: 'The Brain and How to Build our Future Identities',
    video: 'https://delivery.twentythree.com/599344/35468252/video_medium?revision=3&domain=videos.theconference.se&Expires=1660244400&Signature=2bjMYZK84YlSpK1iww%7eLhTA0kmWeHOrzVJY9KPiWZ9xOnH72w%2d9iSjSoYyr89yezqWMbrhVQocflcewxqvbwjcHEk%7eHFn3ykieylMRVtrJSBhiv7L8m%7eYMlZCxkNiN2jpk%7ezs5gNueAj3GteKFOO8saWzmjt2np7TVX5E5%7eSGyS%7e2Mm147xyPzs1wNaq9%2dN71GL6vcW9fQYhR2YODOzxdo5s3tw7MdfUJ6QCUmnBW8bV%2dyaHmXpjnnp%2drE1lzoXb6CL%2dKXRaTCCsFMEDKVKPjluBr0vbOpOtPcPIwcr8PhKUsjcuimt4WlMqdzplL86u0Q9pd5AL7c8Vb3LnBc8MUw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2018 ]
    },
    {
    name: 'The pioneering grandmothers of the internet',
    video: 'https://delivery.twentythree.com/599344/55159909/video_untrimmed?revision=3&domain=videos.theconference.se&Expires=1660244400&Signature=sQNkcvAcnlPl5LGXpGmxW9XsrWXJvCN1XqP%2dSmulcpk%7egN8nAeQLs62CkRb4W0LBg%7erRi5l0jJgwcHSJWHrE0cmwbqCuyDTFRnpQ9NSajPAp5L4h0A4SSNVIXdmPNMHXNo9b8k%2ddKREfY6w454Efga6QwLGl2S0ujO7WITVTyJbEPs5ZGzFhsMJWpNl9mP3nnjV7MR6b%2d%7e0S%2d2GRlNNINgYSHnITXnl27qYaN86yiXR9ivOnYOlQ2RqkzQ636pSE%2dFYuYgq4NNKiFuGDwtyBJyL6ZvovK8IbX6JUDSE5a05l4EZne0eYnaQUmC7I9LBnLebkY83pj4YnAla0MitssA%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2019 ]
    },
    {
    name: 'What is real?',
    video: 'https://delivery.twentythree.com/599344/35479264/video_medium?revision=3&domain=videos.theconference.se&Expires=1660244400&Signature=Twpm7JC4UGlVgPR6EOQGkiAFkg6b4hKp6RlNl1pWkPkiLYGimHaGetZuOV7Ws2sE6ZHaXqKRLrK64DK3etUOi6nOpjGEixLEh%2dpZym91ST18OBcwa8lmyoQsM3uEPH9SIzg8B8VHi1MRGzgxKit1CqjpNmVTotbDku8Rod8uDAuaQ1E5lA5cRp21X7fTewdQGz8su1I0SWF15EePODWHeKj8zTk5NWGm2sZdzBUxSu8xAScVqHq%7eMV9X6qfeLeTyIO5H%7eliZBRPmAt4ilArh7ZTUoLcbnxLtWRrI%2dt%2d3HFeWj9DxiL1zNEC83%7eOxcHR5ftwCOYhulxEtovYSBRkGMw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2018 ]
    },
    {
    name: 'Understand and Visualize',
    video: 'https://delivery.twentythree.com/599344/8580304/video_medium?revision=1&domain=videos.theconference.se&Expires=1660244400&Signature=uDUQG39%7el0LhdmoJjJ9C6vLb%2dE55xKpXj%7eBTbYMSZVb5sLt9eYmhLy%7ewXalWpggkYgp1qlIBKx2rHgqQ42Qt3pzRdQbaiJ33MvcMC29CPKziuW%2drIy7rKZuqvoaYK9JYEX45yK1oEuDBKJ56102Fr4%2dFdpiz7tBQTId7eDWwjyDCvu8pxXs0UKvTXl86%2dq%2dld0R1UYRIfUMgEkH8umKq6hXggK9kZLLKjk4022ykx0hLgBbrr2fItooxWNQ0S4VvtjO8wD0ZK2Z3IHjSrePtkaiarEreW2r8X%2dJ%2d0m8hY7VzVtizbyORr4Zu%7exzgf07nOFiO%2dehVfjxSHQ%2d5yTxc5A%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2013 ]
    },
    {
    name: 'Communication without a Digital Interface',
    video: 'https://delivery.twentythree.com/599344/8580759/video_medium?revision=1&domain=videos.theconference.se&Expires=1660244400&Signature=vI41JFCsSCH3uLnVSGKaItubmMUDWADyIJfVP9%7eF4r7zmSShEnRQfaf94P7OzxuYZDVZOkd9qT7hxaEf2lQQF%2duxkEiO2sDL1oKA6Mb2FADJDyBs0Ys6RqqBZzxDVFpy%2dJ9Iahwc5L3c3QKCClfOmiBDlJj5XI5riV%2dGHp4rrocCiKNOME6230ueqCFHHmgebddLadFzuOR3EXYxcdBjyy93ly%7e7nQkJ%2dd%2dOI43QmjhCBNGMGL5gnzQ8yEsVb7d9XVCyAYwIKHnbXuvtPjSimDX%2drnR3ExCDEdFmtidjaGl667iehv0eqOL%7e4B9%7eGtWAbIxLIz8TfXT8C8lTXGsDBw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2013 ]
    },
    {
    name: 'How to challenge the status quo’s of the world',
    video: 'https://delivery.twentythree.com/599344/10160622/video_medium?revision=1&domain=videos.theconference.se&Expires=1660248000&Signature=RP05DI7%7e5TnM6UP2Mjnwk7qbyX9ODrMaLW5UHVf0Oa57oHiu%2dN1VUybA9VnEKZseQl6atbbD2hMMW%2dcWBzi7b%2dCN%7e7MA%2dXCyT%2d0WL90JBAWJNaLxuT12ZeQtfb2GXMPhfuN7N5FC1OPbUEnSMdKZicSa02qH66ktthKpsmmxCK39B26goS%2dNzm8DM1V7Z1SQEcQbjUxwVW1gN0sdaILVUEAYBskFJ7PNlb1JimLqKEk7FEZRir0Lzkp2uBCoQ7tMEP1ccPT1gzaeuo35ocyXRCvo3RSHDE%2dCIzCjBQQQCV37vKpEAMT9ylbDJ35wWNaLGibFxDit5egDHXiJQ3RSoQ%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2014 ]
    },
    {
    name: 'Cyborg Anthropology and the Future of the Interface',
    video: 'https://delivery.twentythree.com/599344/55220539/video_medium?revision=3&domain=videos.theconference.se&Expires=1660248000&Signature=jc5yw7NhlejWQuSandktRIWgk4YnYyauL2%7eI5M2VBDDkGOS22aUbNpSEjniZDER%2d3%2dBi7t4BvR8Ebh3GkP5jruDSZj6VVsP%7eciVDPMXEwhT%7euZjLmCv7AjodHCCncwVyDRhTxBsQQZjvm4m7FW8jJdOU1gOPiPLn8pDK1HEDKEkhSPr5n5nHG%2de6gu7cvMY3JUupdmYXIigwtKeXFOQ2rXvR%2dwf5hqt0nAmO1Z0nSthTpocTnHrUWJ2pr4kwxRJ0ptR1KBP7RWNRoJ9Fe%7eZC9oAk2rtjh5hKEVlpI0W2y8mzgyUGnmIrhd%7eTAnYLyR6TvUKRRn10DyqQQVe9k2hd1w%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2011 ]
    },
    {
    name: 'Keynote',
    video: 'https://delivery.twentythree.com/599344/6909079/video_medium?revision=1&domain=videos.theconference.se&Expires=1660248000&Signature=A1G92yBNXnSAgKN9OOk%2diMUA6Q9L9vL0zBH9zBtcxN8xugt8x8CvJsNRkvlu4GoKDO55OatVemtlUJhkhCHe6lCyj5jTNYWlyYKlgyD%2dhNAsaXMkedE%7e%7ewCIWALyEfY0jZKRC5eW%7eqH61E%2dOXQKC8yW3rSZoN%7eoVdJ7nkLStD3cqUaE021Gwbizjuwi3fKeKT13CFdeXgirPMN2giio1KOEvht7lp8NfwQDax0IftqcmP67T%7eJBHDnX2q4IcNXRqKa4aEOSA4t1v0dOHj4ZPowSTJ41pPzF9wmvq5fbfWL0Geb4sjhv0oVSe25jZDoV%2dLaniuOaY0bG0%2dwYI5BtyCA%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2012 ]
    },
    {
    name: 'How to construct a compelling story',
    video: 'https://delivery.twentythree.com/599344/10160333/video_medium?revision=1&domain=videos.theconference.se&Expires=1660248000&Signature=yd%7eg2LzgkzUZMug8FSKa5FB0iYo7dHnJBLH9fnxjUXkVUzWen4rEWdl1WCAxs3da01kfIhdWXjHP8D04JFfgwI6S42G4bReMRUCwwTmWDyda6s9dQ04ZXgiBLQnWNtC9AwWOxDymXRM17Fa6cPvQC%2d%7ezZRq53qiz0XpDlaHYKolh2r9k0Ac5F4yM5wqWgjpiODqyRrF2dGT9KxIKutjUCGg2xH1A5TJ3PxpYcaWQEmyIPrIE4EIylEYwBgzAzk8qK5G%7e0zg6HPCwosDEoSZLK%7eNRTMiul1oo4yy5icjsndvDJNfMkpdq16jMx7rrIiQjaFxgMw%7eq28Euj7yoVc7ODA%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2014 ]
    },
    {
    name: 'Seeing the future through the users eyes',
    video: 'https://delivery.twentythree.com/599344/3016321/video_medium?revision=1&domain=videos.theconference.se&Expires=1660248000&Signature=i7PoFSff9ugNa%2dCwQiRg0uQIE%2daS6nj7Pndb5SYhJugLrJr5Gtwp3ERVVvTZB2RzyzTrOiottbjjrGA4ht6gyD9VJTC6dk%2dwUcCAp2elISERs%2dgLGsDdwA%7eO2Atbr8HUd1wlNleQtVEXwY07YYr9%2dL1%2djnQ5%2dToDd861cx2Z7a%2dQvH6ZRULu%7eTnHh1W5kOn80tsOeKSbvurDeeL1kjefgNViZVJMf3wwiHSiWBCY%7e9O%2dP8D%7eUgXlT8ajEXNetG9u3jqQGPfcg0%7ejNHNT0KmzPE2HrV%7e0cBs%7evH%2dl9BYNV3Sz0a1sWpV1phJWO7qoFm2TZYQVy%7eO4SEEyYkWvCRmD3w%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2011 ]
    },
    {
    name: 'Memory techniques for learning',
    video: 'https://delivery.twentythree.com/599344/10155083/video_medium?revision=1&domain=videos.theconference.se&Expires=1660248000&Signature=ElIc53oeUZ09HCwXaU8AxkUQEefzYyL%2dSjaaZjoiBQl3Co6vsoXlUYX7u3lX6rM%2dBOkUfzPSow0DDVbRHdryzTbiCj8Ck9u81cUNKPm62ywZFMyLvsa82YwLKo2rAC%2dWGCiF%7e%2d2ugnsfgmK6MSTzdUPujpQmxdQaTwSYajuNE3aR2zYi7avA30V43tde%7eqsE770IPNYGWH89Hv8X0gi6tTGBFu5auQLR6Mk0BXihrcHMsxPW9NrkpTyZwsQmTq3miKI9HrLT%7e0BGT1MFjKClYsyHJ%2d%2d%2dngn0G%2dN5aN21wuKdwLJ7VKSl9TDDkVncd9vXDy6%2dksl2jXN1m0iGNCSWVA%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2014 ]
    }
    ];
    export default data;