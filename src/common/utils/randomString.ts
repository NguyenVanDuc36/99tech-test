export const randomNum = (length) => {
  const result = [];
  const characters = '0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength)),
    );
  }
  return parseInt(result.join(''));
};
