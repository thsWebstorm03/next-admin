import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "@/types/appstate.types";

const initialState: AppState = {
   siderCollapsed:false,
   settingPanelIsShow: false,
};

export const appSlice = createSlice({
   name: 'app',
   initialState,
   reducers: {
      toggleSider : (state) => {
         state.siderCollapsed = !state.siderCollapsed;
      },
      collapseSider : (state) => {
         state.siderCollapsed = true;
      },
      unfoldSider : (state) => {
         state.siderCollapsed = false;
      },
      hideSettingPanel: (state) => {
         state.settingPanelIsShow = false;
      },
      showSettingPanel: (state) => {
         state.settingPanelIsShow = true;
      },
   },
});

export const {
   toggleSider,
   collapseSider,
   unfoldSider,
   hideSettingPanel,
   showSettingPanel,
   
} = appSlice.actions;

export default appSlice.reducer;