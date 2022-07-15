import React from "react";
import { storage } from "./strg";
import axios from "axios";
import { Navigation } from "react-native-navigation";
const secR = "fd1R";

export const skensaClient = axios.create({
  baseURL: "https://skensa.rcode.fun/api/m/",
  // headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
  timeout: 2000,
});

export const getAllToken = async () => {
  const prof = await getSecure("token");
  if (prof) {
    const parse = JSON.parse(prof);
    const token = parse.access_token + "skensa" + parse.refresh_token;
    return token;
  }
  return;
};

export const checkerToken = async (vals) => {
  var token;
  if (vals?.all?.pic) {
    await setSecure("pic", vals.all.pic);
  }
  if (vals?.all?.profile) {
    await setSecure("profile", vals.all.profile);
  }
  if (vals?.all?.course) {
    await setSecure("course", vals.all.course);
  }
  if (vals?.refresh?.access_token && vals?.refresh?.refresh_token) {
    token = {
      access_token: vals.refresh.access_token,
      refresh_token: vals.refresh.refresh_token,
    };
    return await setSecure("token", token);
  }
  if (vals?.access_token && vals?.refresh_token) {
    token = {
      access_token: vals.access_token,
      refresh_token: vals.refresh_token,
    };
    return await setSecure("token", token);
  }
};

export const hasSecure = (vals) => {
  const has = storage.contains(vals);
  return has;
};

export const setSecure = (keys, vals) => {
  storage.set(
    keys,
    typeof vals === "string" || vals instanceof String
      ? vals
      : JSON.stringify(vals)
  );
  // await storage.recrypt(secR)
  return;
};

export const getSecure = (name) => {
  const get = storage.getString(name);
  return get;
};

export const logGer = (vals) => {
  console.log("logGer", JSON.stringify(vals, undefined, 2));
};

const initialState = {
  errMsg: "",
  screen: "",
  profile: {},
  pic: {},
  course: {},
  absen: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "screen":
      return {
        ...state,
        screen: action.payload,
      };
    case "profile":
      return {
        ...state,
        profile: action.payload,
      };
    case "jurusan":
      return {
        ...state,
        all: {
          ...state.all,
          prrofile: action.payload,
        },
      };
    case "kelas":
      return {
        ...state,
        all: {
          ...state.all,
          prrofile: action.payload,
        },
      };
    case "mapel":
      return {
        ...state,
        all: {
          ...state.all,
          prrofile: action.payload,
        },
      };
    case "pic":
      return {
        ...state,
        all: {
          ...state.all,
          prrofile: action.payload,
        },
      };
    case "role":
      return {
        ...state,
        all: {
          ...state.all,
          prrofile: action.payload,
        },
      };
    case "profiles":
      return {
        ...state,
        all: {
          ...state.all,
          prrofile: action.payload,
        },
      };
    case "errMsg":
      return {
        ...state,
        errMsg: action.payload,
      };
    default:
      throw new Error();
  }
};

export const GlobalContext = React.createContext({});
export const GlobalProvider = ({ children }) => {
  const [state, fnr] = React.useReducer(reducer, initialState);

  const [login, setLogin] = React.useState(false);

  const contextValue = {
    login,
    setLogin,
    getAllToken,
    checkerToken,
    logGer,
    getSecure,
    setSecure,
    hasSecure,
    fnr,
    state,
    skensaClient,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

const x = {
  animations: {
    push: {
      content: {
        x: {
          from: 1000,
          to: 0,
          duration: 200,
        },
      },
    },
    pop: {
      content: {
        x: {
          from: 1000,
          to: 0,
          duration: 200,
        },
      },
    },
  },
};

const translationX = {
  animations: {
    push: {
      content: {
        x: {
          from: 1000,
          to: 0,
          duration: 200,
        },
      },
    },
    pop: {
      content: {
        x: {
          from: 0,
          to: 1000,
          duration: 200,
        },
      },
    },
  },
};

export const PushRoute = (cId, name, animation) => {
  Navigation.push(cId, {
    component: {
      name: name,
      options: Platform.OS !== "ios" && null,
    },
  });
};

export const BackRoute = (cId) => {
  Navigation.pop(cId);
};

// onPress={() =>
//   Navigation.push(componentId, {
//     component: {
//       name: 'MerchantStatus',
//       options: Platform.OS !== 'ios' && navOption,
//     },
//   })
// }
