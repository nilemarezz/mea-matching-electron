export const config = {
  MINUTE: 0,
  SECOND: 60,
  FINALSCORE: 1200,
  SCORE: 100,
  seeSecond: 10, // milisec
  cardFlipBack: 800,
  DECK: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
}

export const getColor = (id) => {
  if (id === "1") {
    return "#C6C7C9"
  } else if (id === "2" || id === "5" || id === "7") {
    return "#333333"
  } else if (id === "3") {
    return "#2D676E"
  } else if (id === "4" || id === "12") {
    return "#ffffff"
  } else if (id === "6") {
    return "#e47739"
  } else if (id === "8" || id === "10") {
    return "#802230"
  } else if (id === "9") {
    return "#53B4A1"
  } else if (id === "11") {
    return "#646567"
  }
}