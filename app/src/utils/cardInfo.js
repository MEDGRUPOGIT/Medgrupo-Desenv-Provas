let cardInfo = [];
const subjects = ["NEF", "CIR", "GIN", "PRE", "PED", "REU", "OBS"];

const seedCard = () => {
  const randomNumber = () => Math.round(Math.random() * 5);
  const randomProgress = () => Math.round(Math.random() * 320);

  for (let index = 1; index <= 14; index += 1) {
    cardInfo.push({
      week: index,
      firstSubject: {
        name: subjects[randomNumber()],
        number: randomNumber(),
        progress: randomProgress(),
      },
      secondSubject: {
        name: subjects[randomNumber() + 1],
        number: randomNumber(),
        progress: randomProgress(),
      },
    });
  }
};

seedCard();

export default cardInfo;
