const generateMap = (w = 4, h = 4, p = 0.25) => {
    let map = [];
    const numHoles = (p*w*h).toFixed(0);

    for(let y = 0; y < h; y++){
        map.push([]);
        for(let x = 0; x < w; x++) {
            map[y].push('░');
        }
    }


    for(let i = 0; i < numHoles; i++) {
        const y = Math.floor(Math.random() * h);
        const x = Math.floor(Math.random() * w);
        
        map[y][x] = 'O';
    }

    let xHat, yHat;

    do{
        yHat = Math.floor(Math.random() * h);
        xHat = Math.floor(Math.random() * w);
    }while(xHat === 0 && yHat ===0);

    map[yHat][xHat] = '^';
    map[0][0] = '*';

    return map;
}

module.exports.generateMap = generateMap;