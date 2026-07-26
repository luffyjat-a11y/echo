export type ThemeColors = {
  primary: string;
  secondary: string;
  border: string;
};

export function getThemeColors(themeId: number | null): ThemeColors {
  switch (themeId) {
    case 301: // Royal Purple
      return {
        primary: "bg-purple-600",
        secondary: "bg-purple-500",
        border: "border-purple-500",
      };

    case 302: // Crimson
      return {
        primary: "bg-red-600",
        secondary: "bg-red-500",
        border: "border-red-500",
      };

    case 303: // Emerald
      return {
        primary: "bg-emerald-600",
        secondary: "bg-emerald-500",
        border: "border-emerald-500",
      };

    case 304: // Ocean
      return {
        primary: "bg-sky-600",
        secondary: "bg-sky-500",
        border: "border-sky-500",
      };

    case 305: // Gold
      return {
        primary: "bg-yellow-500",
        secondary: "bg-yellow-400",
        border: "border-yellow-500",
      };

    default:
      return {
        primary: "bg-purple-600",
        secondary: "bg-purple-500",
        border: "border-purple-500",
      };
  }
}