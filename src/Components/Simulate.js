function simulateGame(home, away) {
    let teamA_score = 0;
    let teamB_score = 0;
    let quater = 1;
    let flipCoin = Math.random();
    while (quater < 5) {

        for (let i = 0; i < 5; i++) {
          
            const team1Prob =home.rating / 10;
            const team2Prob = away.rating / 10;
            if (flipCoin <= 0.5) {
                const randNum = Math.random();
                if (randNum <= team1Prob/1) {
                    const fgOrTd = Math.random();
                    if (fgOrTd < 0.8) {
                        teamA_score += 7;
                    } else {
                        teamA_score += 3;
                    }
                    flipCoin = 0.6;
                } else {
                    flipCoin = 0.6;
                }
                i++;
            } else if (flipCoin >=0.5) {
                const randNum = Math.random();
                if (randNum <=team2Prob/1.5) {
                    const fgOrTd = Math.random();
                    if (fgOrTd <= 0.8) {
                        teamB_score += 7;
                    } else {
                        teamB_score += 3;
                    }
                    flipCoin = 0.4;
                } else {
                    flipCoin = 0.4;
                }
                 i++;
             }
        }
        quater += 1;
    }   
    return [teamA_score, teamB_score];
}

export default simulateGame