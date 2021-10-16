export interface H5Interface {
  getDeviceName: () => string;
  openURLInDefaultBrowser: (url: string) => void;
  getDeviceId: () => string;
}
