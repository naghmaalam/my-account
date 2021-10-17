import { reactive, computed, ComputedRef, watch } from "vue";
// import i18n from "@/locales/localization";

import { storage } from "@/modules/utils";

// import { useToast } from "@/hooks/useToast";

interface Settings {
  mobile: {
    sideMenu: boolean;
  };
}

// const SettingsDefault = <Settings>{
//   mobile: {
//     sideMenu: false,
//   },
// };

class SettingsDefault implements Settings {
  mobile = {
    sideMenu: false,
  };
}

// Initialize settings
export const state = reactive<{ settings: Settings }>(
  // newObj({ settings: SettingsDefault })
  { settings: new SettingsDefault() }
);

export const settingsState: ComputedRef<Settings> = computed(() => {
  return state.settings;
});

export function useSettings(): {
  do: {
    init: () => void;
    sideMenu: {
      toggle: () => void;
      show: () => void;
      hide: () => void;
    };
  };
  get: { sideMenu: ComputedRef<boolean> };
} {
  // do
  /////////////////////////////////////////////////////////////////////
  function resetSettings() {
    console.log("resetSettings()");
    state.settings = new SettingsDefault();
    storage.removeItem("settings");
    storage.setItem("settings", state.settings);
  }

  const init = () => {
    state.settings.mobile.sideMenu = false;
    // check if storage has settings data if not then initialize
    const settingsSessionData = storage.getItem("settings");
    if (settingsSessionData) {
      state.settings = JSON.parse(settingsSessionData);
    } else {
      resetSettings();
    }

    // add watcher to settings to save updates to session storage
    watch(
      () => state.settings,
      (val) => {
        console.log("settings changed");
        storage.setItem("settings", val);
      },
      { deep: true }
    );
  };

  const sideMenu = {
    toggle: () => {
      state.settings.mobile.sideMenu = !state.settings.mobile.sideMenu;
    },
    show: () => {
      state.settings.mobile.sideMenu = true;
    },
    hide: () => {
      state.settings.mobile.sideMenu = false;
    },
  };

  /////////////////////////////////////////////////////////////////////
  // do

  // get
  /////////////////////////////////////////////////////////////////////
  const get = {
    sideMenu: computed(() => {
      return state.settings.mobile.sideMenu;
    }),
  };
  /////////////////////////////////////////////////////////////////////
  // get

  return {
    do: { init, sideMenu },
    get,
  };
}
