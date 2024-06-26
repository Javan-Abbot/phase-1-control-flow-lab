function scuberGreetingForFeet(ride) {
  // Write your code here!
  let result;
  if (ride <= 2500) {
    if (ride <= 400) {
      result = "This one is on me!"
    } else if (ride > 400 && ride <= 2000) {
      result = "That will be twenty bucks."
    } else if (ride > 2000) {
      result = "I will gladly take your thirty bucks."
    }
  } else {
    result = "No can do."
  }
  return result;
}


function ternaryCheckCity(city) {
  // Write your code here!
  const result = (city === "NYC") ? "Ok, sounds good." : "No go."
  return result;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  switch (tip) {
    case "generous"
      : return "Thank you so much."
      break;
    case "not as generous"
      : return "Thank you."
      break;
    default:
      tip: return "Bye."
  }
}