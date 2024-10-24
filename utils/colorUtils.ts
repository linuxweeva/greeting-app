const generateRandomNumber = () => Math.floor(Math.random() * 256);

export const generateRandomRGBColor = () =>
  `rgb(${generateRandomNumber()},${generateRandomNumber()},${generateRandomNumber()})`;

const getBrightness = (r: number, g: number, b: number) => {
  return (r * 299 + g * 587 + b * 114) / 1000;
};

export const getTextColorFromRGB = (rgbColor: string): 'white' | 'black' => {
  const [r, g, b] = rgbColor
    .slice(4, -1)
    .split(',')
    .map((val: string) => Number(val.trim()));

  const brightness = getBrightness(r, g, b);

  return brightness < 128 ? 'white' : 'black';
};
