import { Platform } from "react-native"

/**
 * Just the font names.
 *
 * The various styles of fonts are defined in the <Text /> component.
 */
const typography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: Platform.select({ ios: "Montserrat", android: "Montserrat" }),

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: "Montserrat", android: "Montserrat" }),
}

export default typography;