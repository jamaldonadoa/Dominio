    let pronoun = ['the','our'];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];
    let dominio = ""
    let arreglodom = []

    for (let i = 0; i < pronoun.length; i++) {
        dominio = pronoun[i]
        for (let i2 = 0; i2 < adj.length; i2++) {
            dominio= pronoun[i] + adj[i2];
            for (let i3 = 0; i3 < noun.length; i3++) {
                dominio= dominio + noun[i3] + ".com";
                console.log(dominio)
                dominio= pronoun[i] + adj[i2];
            } 
        } 
    }