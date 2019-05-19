import { Colors, Typography } from "../../Themes"

/**
 * All text will start off looking like this.
 */
const BASE = {
  fontFamily: Typography.primary,
  color: Colors.text,
  fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: { ...BASE, fontWeight: "bold" },

  /**
   * Large headers.
   */
  header: { ...BASE, fontSize: 24, fontWeight: "bold" },

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: { ...BASE, fontSize: 13, color: Colors.dim },

  /**
   * A smaller piece of secondard information.
   */
  secondary: { ...BASE, fontSize: 9, color: Colors.dim },
}
