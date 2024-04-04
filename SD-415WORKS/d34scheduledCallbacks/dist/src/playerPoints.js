/*Be sure to use meaningful variable names.
Try to use map and reduce in your functions as appropriate. */
//The following objects record the season statistics for players on a basketball team.
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
export const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
export const teamStats = [player1, player2, player3];
export function findTotalPlayerPoints(player3) {
    let OverallPoints = player3.stats.map((results) => results.points);
    let SumTotal = OverallPoints.reduce((sum, point) => sum += point);
    return SumTotal;
}
export function findTotalPointsByJersey(num) {
    let SumTotalbyJersey = 0;
    for (let players of teamStats) {
        if (num === players.jersey) {
            let OverallPoints = players.stats.map((results) => results.points);
            SumTotalbyJersey = OverallPoints.reduce((sum, point) => sum += point);
        }
    }
    return SumTotalbyJersey;
}
export function findTotalScores(teamStats) {
    let result = [];
    //looping through the players
    for (let elements of teamStats) {
        let eachElement = elements.stats;
        let jersey = elements.jersey;
        //map points for each player
        let PlayerPoints = eachElement.map((statPoints) => statPoints.points);
        //calculating the total points for each player
        let totalPoints = PlayerPoints.reduce((pointSum, points) => pointSum += points, 0);
        //adding result to the array
        result.push({ jersey: jersey, total: totalPoints });
    }
    return result;
}
