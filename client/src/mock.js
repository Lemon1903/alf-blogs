export const generateRandomText = (length) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const spaceProbability = 0.3;
  let randomText = "";

  for (let i = 0; i < length; i++) {
    if (Math.random() < spaceProbability && i > 0 && randomText[i - 1] !== " ") {
      randomText += " ";
    } else {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      randomText += alphabet[randomIndex];
    }
  }

  return randomText;
};

const generateCardDetails = (size) => {
  const arr = [];

  for (let i = 0; i < size; i++) {
    arr.push({
      id: i,
      date: "June 16 2023",
      title: generateRandomText(50),
      author: generateRandomText(10),
      description: generateRandomText(100),
      content: [{ type: "paragraph", children: [{ text: generateRandomText(1000) }] }],
    });
  }

  return arr;
};

// export const cardDetails = generateCardDetails(10);
export const cardDetails = [];
