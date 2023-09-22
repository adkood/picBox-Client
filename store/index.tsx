import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
// import { useId } from "react";

const initialModalState = {
  isUpload: false,
  isCollection: false,
  isSearch: false,
  isLogin: false,  
  isSignup: false,
  isEdit: false,
  isAccount: false,
  isGetImage: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    uploadToggle(state) {
      state.isUpload = !state.isUpload;
    },
    collectionToggle(state) {
      state.isCollection = !state.isCollection;
    },
    searchToggle(state) {
      state.isSearch = !state.isSearch;
    },
    loginToggle(state) {
      if (state.isSignup) state.isSignup = false;
      state.isLogin = !state.isLogin;
    },
    signupToggle(state) {
      if (state.isLogin) state.isLogin = false;
      state.isSignup = !state.isSignup;
    },
    editToggle(state) {
      state.isEdit = !state.isEdit;
    },
    accountToggle(state) {
      state.isAccount = !state.isAccount;
    },
    getImageToggle(state) {
      state.isGetImage = !state.isGetImage;
    },
  },
});

// --------------------------------------------
const getTokkenId = () => {
  if (typeof window !== "undefined") {
    const tokenData = localStorage.getItem("token");
    const initialTokken = tokenData ? tokenData : null;
    return initialTokken;
  }
  return null;
};

const isLoggedIn = () => {
  if (typeof window !== "undefined") {
    const tokenData = localStorage.getItem("token");
    const isLog = tokenData ? true : false;
    return isLog;
  }
  return false;
};

//-----------------------------------------------------------

const initialAuthState = {
  tokenId: getTokkenId(),
  isLogged: isLoggedIn(),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.tokenId = action.payload;
      localStorage.setItem("token", action.payload);
      state.isLogged = true;
    },
    logout(state) {
      state.tokenId = null;
      localStorage.removeItem("token");
      state.isLogged = false;
    },
  },
});

//----------------------------------------------------------

const initialSearchdata = {
  searchData: "",
};

const searchDataSlice = createSlice({
  name: "searchData",
  initialState: initialSearchdata,
  reducers: {
    searchDataDefiner(state, action) {
      state.searchData = action.payload;
    },
  },
});

//------------------------------------------------------------

const initialUiState = {
  darkColorMode: false,
  uiColorCode: {
    navbar: "#ffc1cc",
    card: "#ffc1cc",
    cardShadow: "#ff69b4 ",
    whole: "white",
    wholeText: "#ff1493",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    colorToggle(state) {
      if (state.darkColorMode) {
        state.uiColorCode = {
          navbar: "#1B1212",
          card: "#1B1212",
          cardShadow: "grey",
          whole: "#343434",
          wholeText: "white",
        };
        state.darkColorMode = !state.darkColorMode;
      } else {
        state.uiColorCode = {
          navbar: "#ffc1cc",
          card: "#ffc1cc",
          cardShadow: "#ff69b4 ",
          whole: "white",
          wholeText: "#ff1493",
        };
        state.darkColorMode = !state.darkColorMode;
      }
    },
  },
});

//---------------------------------------------------------

const initialFrameState = {
  src: "undefined",
  photoId: -1,
  width: -1,
  height: -1,
  size: "undefined",
  price: -1,
  discount: -1,
  title: "undefined",
  frameState: false,
  buyVisible: false,
  onBuyId: -1,
};

const clickFrameSlice = createSlice({
  name: "clickFrame",
  initialState: initialFrameState,
  reducers: {
    frameStateToggle(state) {
      state.frameState = !state.frameState;
    },
    srcDefiner(state, action) {
      state.src = action.payload;
    },
    widthDefiner(state, action) {
      state.width = action.payload;
    },
    heightDefiner(state, action) {
      state.height = action.payload;
    },
    sizeDefiner(state, action) {
      state.size = action.payload;
    },
    priceDefiner(state, action) {
      state.price = action.payload;
    },
    discountDefiner(state, action) {
      state.discount = action.payload;
    },
    photoIdDefiner(state, action) {
      state.photoId = action.payload;
    },
    titleDefiner(state, action) {
      state.title = action.payload;
    },
    visibilityDifiner(state, action) {
      state.buyVisible = action.payload;
    },
    onBuyIdDefiner(state, action) {
      state.onBuyId = action.payload;
    },
  },
});

//--------------------------------------------------------

export const modalActions = modalSlice.actions;
export const authActions = authSlice.actions;
export const uiActtions = uiSlice.actions;
export const clickFrameActions = clickFrameSlice.actions;
export const searchDataActions = searchDataSlice.actions;

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    clickFrame: clickFrameSlice.reducer,
    searchData: searchDataSlice.reducer,
  },
});

export default store;
