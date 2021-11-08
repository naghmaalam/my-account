export type DeviceId =
  | "windows"
  | "apple"
  | "linux"
  | "android"
  | "macos"
  | "ios";
export interface Device {
  id: DeviceId;
  title: string;
  subtitle: string;
  icon: string;
  fileUrl: string;
}

export interface ComponentDevice {
  show: boolean;
  isQtyDynamic: boolean;
  allowedQuantity: number;
  quantity: number;
  pricePerAdditionalDevice: number;
  pricePerDeviceText: string;
  origPrice: number;
  price: number;
  currency: string;
}

export interface LoggedInDevice {
  id: number;
  name: string;
  type: DeviceId;
  udid: string;
}

export interface MeDevice {
  id: number;
  device_name: string;
  device_type: string;
  device_udid: string;
}

// device_name: "device_name_my_account"
// device_type: "ios, android, windows, mac"
// device_udid: "device_code_my_account"
// id: 2072

// device_name: "Xiaomi-Redmi K20 Pro"
// device_type: "android"
// device_udid: "bd450668-a307-40d9-aa31-49f65ee4bcc6"
// id: 2238
