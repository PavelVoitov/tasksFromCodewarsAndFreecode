function points(games) {
    let result = 0;
  for (let i = 0; i < games.length; i++) {
    const twoNum = games[i].split(':')
      if (twoNum[0] > twoNum[1]) {
        result += 3
      } else if (twoNum[0] < twoNum[1]) {
        result += 0
      } else {
        result += 1
      }
  }
  return result
  }

  // console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))