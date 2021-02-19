// this hook is necessary because on web spreading overrides stylesheet.create but we would still like a somewhat dynamic value
// relative to original width. It won't update when user resizes the browser unfortunately but still
// ok for responsive WD as it's the width relative to device width and resizing is unlikely
// custom hook is preferred
import { Dimensions, PixelRatio } from 'react-native';
export const responsiveWidth = (percentValue: number) => {
  const windowWidth = Dimensions.get('window').width;

  const width = (percentValue * windowWidth) / 100;
  return PixelRatio.roundToNearestPixel(width);
};
export const responsiveHeight = (percentValue: number) => {
  const windowHeight = Dimensions.get('window').height;
  const height = (percentValue * windowHeight) / 100;
  return PixelRatio.roundToNearestPixel(height);
};
