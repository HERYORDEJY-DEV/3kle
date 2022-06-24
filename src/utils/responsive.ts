import {Dimensions, PixelRatio} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const addPx = (value: string | number) => `${value}px`;

const responsive = {
  /**
   *  Converts provided width percentage to independent pixel (dp).
   * @name width  Used for responsive width across devices
   * @param widthPercent - 10% or 10
   * @param px
   * @return {number} The calculated dp depending on current device's screen height.
   */
  width: function (widthPercent: number | string, px?: boolean) {
    const elementWidth =
      typeof widthPercent === 'number'
        ? widthPercent
        : parseFloat(widthPercent);

    const result = PixelRatio.roundToNearestPixel(
      screenWidth * (elementWidth / 100),
    );

    if (!px) {
      return result;
    }

    return addPx(result);
  },

  /**
   *  Converts provided height percentage to independent pixel (dp).
   * @name height  Used for responsive height across devices
   * @param heightPercent - 10% or 10
   * @param px
   * @return {number} The calculated dp depending on current device's screen height.
   */
  height: function (heightPercent: number | string, px?: boolean) {
    const elementHeight =
      typeof heightPercent === 'number'
        ? heightPercent
        : parseFloat(heightPercent);

    const result = PixelRatio.roundToNearestPixel(
      screenHeight * (elementHeight / 100),
    );

    if (!px) {
      return result;
    }

    return addPx(result);
  },
};

export default responsive;
