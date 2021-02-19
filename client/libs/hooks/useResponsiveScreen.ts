import { useWindowDimensions, PixelRatio } from 'react-native';
const useResponsiveScreen = () => {
  const window = useWindowDimensions();
  const responsiveWidth = (percentValue: number) => {
    const width = (percentValue * window.width) / 100;
    return PixelRatio.roundToNearestPixel(width);
  };
  const responsiveHeight = (percentValue: number) => {
    const height = (percentValue * window.height) / 100;
    return PixelRatio.roundToNearestPixel(height);
  };
  return {
    responsiveHeight,
    responsiveWidth,
  };
};
export default useResponsiveScreen;
