export type DeviceId =
  | "windows"
  | "apple"
  | "linux"
  | "android"
  | "macos"
  | null;
export interface Device {
  id: DeviceId;
  title: string;
  subtitle: string;
  icon: string;
  fileUrl: string;
}
