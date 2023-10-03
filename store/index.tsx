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
  isChangePassword: false,
  isDemandUpload: false,
  isCart: false,
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
    changePasswordToggle(state) {
      state.isChangePassword = !state.isChangePassword;
    },
    demandUploadToggle(state) {
      state.isDemandUpload = !state.isDemandUpload;
    },
    cartToggle(state) {
      state.isCart = !state.isCart;
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
  role: "user",
  back: false,
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
    roleDefiner(state, action) {
      state.role = action.payload;
    },
    backToggle(state) {
      state.back = !state.back;
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

const initialDemandState = {
  demandState: false,
  id: -1,
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  city: "",
  social: "",
  imageDesc: "",
  isResolved: false,
};

const clickDemandSlice = createSlice({
  name: "clickDemand",
  initialState: initialDemandState,
  reducers: {
    demandStateToggle(state) {
      state.demandState = !state.demandState;
    },
    idDefiner(state, action) {
      state.id = action.payload;
    },
    firstDefiner(state, action) {
      state.firstName = action.payload;
    },
    lastDefiner(state, action) {
      state.lastName = action.payload;
    },
    emailDefiner(state, action) {
      state.email = action.payload;
    },
    countryDefiner(state, action) {
      state.country = action.payload;
    },
    cityDefiner(state, action) {
      state.city = action.payload;
    },
    socialDefiner(state, action) {
      state.social = action.payload;
    },
    imageDescDefiner(state, action) {
      state.imageDesc = action.payload;
    },
    isResolvedDifiner(state, action) {
      state.isResolved = action.payload;
    },
  },
});

//---------------confirmation modals------------------

const initialConfirmationState = {
  userDeleteState: false,
  imageDeleteState: false,
  roleUpdateState: false,
  userId: -1,
  photoId: -1,
};

const confirmSlice = createSlice({
  name: "confirm",
  initialState: initialConfirmationState,
  reducers: {
    userIdDefiner(state, action) {
      state.userId = action.payload;
    },
    photoIdDefiner(state, action) {
      state.photoId = action.payload;
    },
    userDeleteStateToggle(state) {
      state.userDeleteState = !state.userDeleteState;
    },
    imageDeleteStateToggle(state) {
      state.imageDeleteState = !state.imageDeleteState;
    },
    roleUpdateStateToggle(state) {
      state.roleUpdateState = !state.roleUpdateState;
    },
  },
});

//-------------------------------------------------------

const initialDasBoardState = {
  intro: true,
  basic: false,
  users: false,
  images: false,
  download: false,
  transaction: false,
  demand: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialDasBoardState,
  reducers: {
    introToggle(state) {
      state.intro = true;
      state.basic = false;
      state.users = false;
      state.download = false;
      state.images = false;
      state.transaction = false;
      state.demand = false;
    },
    basicToggle(state) {
      state.intro = false;
      state.basic = true;
      state.users = false;
      state.download = false;
      state.images = false;
      state.transaction = false;
      state.demand = false;
    },
    usersToggle(state) {
      state.intro = false;
      state.basic = false;
      state.users = true;
      state.download = false;
      state.images = false;
      state.transaction = false;
      state.demand = false;
    },
    imagesToggle(state) {
      state.intro = false;
      state.basic = false;
      state.users = false;
      state.images = true;
      state.download = false;
      state.transaction = false;
      state.demand = false;
    },
    downloadToggle(state) {
      state.intro = false;
      state.basic = false;
      state.users = false;
      state.download = true;
      state.images = false;
      state.transaction = false;
      state.demand = false;
    },
    transactionToggle(state) {
      state.intro = false;
      state.basic = false;
      state.users = false;
      state.download = false;
      state.images = false;
      state.transaction = true;
      state.demand = false;
    },
    demandToggle(state) {
      state.intro = false;
      state.basic = false;
      state.users = false;
      state.download = false;
      state.images = false;
      state.transaction = false;
      state.demand = true;
    },
  },
});

// ----------------------------------------

const renderVariable = {
  userId: "",
  author: "",
  cartItemCount: 0,
  isDelete: 0,
  isUserDelete: 0,
  isResolved: 0,
  isCartItemDelete: 0,
  isCollectionUpdate: 0,
  profilePageUpdate: 0,
};

const renderSlice = createSlice({
  name: "render",
  initialState: renderVariable,
  reducers: {
    isDeleteCounter(state) {
      state.isDelete = state.isDelete + 1;
    },
    isUserDeleteCounter(state) {
      state.isUserDelete = state.isUserDelete + 1;
    },
    isResolved(state) {
      state.isResolved = state.isResolved + 1;
    },
    userIdDefiner(state, action) {
      state.userId = action.payload;
    },
    authorDefiner(state,action) {
      state.author = action.payload;
    },
    isCartItemDeleteCounter(state) {
      state.isCartItemDelete = state.isCartItemDelete + 1;
    },
    cartItemCountDefiner(state,action) {
      state.cartItemCount = action.payload;
    },
    isCollectionUpdateCounter(state) {
      state.isCollectionUpdate = state.isCollectionUpdate + 1;
    },
    profilePageUpdateCounter(state) {
      state.profilePageUpdate = state.profilePageUpdate + 1;
    }
  },
});

//----------------------------------------------------
export const modalActions = modalSlice.actions;
export const authActions = authSlice.actions;
export const uiActtions = uiSlice.actions;
export const clickFrameActions = clickFrameSlice.actions;
export const searchDataActions = searchDataSlice.actions;
export const demandActions = clickDemandSlice.actions;
export const confirmationActions = confirmSlice.actions;
export const dashboardActions = dashboardSlice.actions;
export const renderActions = renderSlice.actions;

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    clickFrame: clickFrameSlice.reducer,
    searchData: searchDataSlice.reducer,
    clickDemand: clickDemandSlice.reducer,
    confirm: confirmSlice.reducer,
    dashboard: dashboardSlice.reducer,
    render: renderSlice.reducer,
  },
});

export default store;
