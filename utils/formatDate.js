import { format } from "date-fns";

/**
 * Format a date object or date string to 'yyyy-MM-dd'.
 *
 * @param {Date | string} date - The date to format.
 * @returns {string} - The formatted date string in 'yyyy-MM-dd' format, or an empty string if the input is invalid.
 */

export const formatDate = (date) => {
  if (!date) return ""; // Return an empty string if the input is falsy

  try {
    const dateObj = new Date(date);
    return format(dateObj, "yyyy-MM-dd"); // Format the date to 'yyyy-MM-dd'
  } catch (error) {
    console.error("Invalid date format:", error);
    return ""; // Return an empty string if formatting fails
  }
};
