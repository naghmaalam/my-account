export const storage = {
  setItem: <T>(key: string, data: T): void => {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  removeItem: (key: string): void => {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  getItem: (key: string): string | null => {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};