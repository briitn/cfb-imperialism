function increaseRankings(arr,score, index = 0) {
    // if (index >= arr.length) {
    //   return; // Base case: end of array
    // }
console.log(score)
    let homeRanking= arr[index].home.ranking
   
    //const awayRamking= arr[index].away.ranking
    const sameRanking=arr.filter((item,index)=>{
        if (item.home.ranking===homeRanking-1){
            return item
        }})

    if (sameRanking.length > 0) {
        console.log(sameRanking[0].home.ranking)
        arr[index].home.ranking=sameRanking[0].home.ranking
     arr.forEach(item => {
       if (item.home.team_name==sameRanking[0].home.team_name){
      
        item.home.ranking=homeRanking
    
       }
      });
    }
    
        // arr[index].home.ranking = sameRanking[0].home.ranking;
    
      console.log(arr)
//console.log(arr[index].home.ranking)
  // // arr[index].ranking += 1; // Increase ranking of current team

  // console.log(sameRanking)
    //increaseRankings(arr, index + 1); // Recursively call function with next index
  }
  
  
  export default increaseRankings