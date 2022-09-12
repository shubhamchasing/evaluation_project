// const data = {
//   3: { A: "India" },
//   5: {
//     E: "Leverage AI to suggest relevant improvements to your eCommerce managers",
//     C: "NLP capabilities – understand price & contextual queries",
//     A: "Auto correct spellings & recognize synonyms for key attributes",
//     H: "Understand & respond to Indian Ethnic Wear",
//   },
//   6: { A: "Yes" },
//   7: { B: "No" },
//   8: { A: "Yes" },
//   name: "Shubham Sharma",
//   email: "shubham@streamoid.com",
//   rating: "9",
// };

const getScore = (data) => {
  console.log(data)
  let total = 0;
  let results = 0;

  // rating
  total += parseInt(data["rating"]);

  // Q.5 based on Q.3 (location)
  total += Object.keys(data["5"]).length * 2;

  // Q.6,Q.7,Q.8
  for (let index = 0; index < 3; index++) {
    total += Object.keys(data[[index + 6]])[0] === "A" ? 2 : 0;
  }

  if (Object.keys(data["3"])[0] === "B") {
   results = (total / 30) * 100;
  } else {
   results = (total / 32) * 100;
  }

  return results.toString() + "%";
};

module.exports = {getScore}