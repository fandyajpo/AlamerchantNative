import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { Back } from "../../lib/listSvg";
import { BackRoute, PushRoute } from "../../lib/ctx";
import { Keyboard } from "react-native";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";

export const BackHandlerTaxAndService = React.memo(({ componentId }) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  React.useEffect(() => {
    console.log("keyboard printer render");
  });

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const backKey = React.useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  }, []);

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-white p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Tax & Service
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => printerRef.current.show()}
      >
        <View
          style={tw`w-full bg-myellow h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

export const BackHandlerEditProfile = React.memo(({ componentId, title }) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  React.useEffect(() => {
    console.log("keyboard render");
  });

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [keyboardShow]);

  const backKey = React.useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            {title}
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => BackRoute(componentId)}
      >
        <View
          style={tw`w-full bg-myellow h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

export const BackHandlerPrinter = React.memo(({ componentId, printerRef }) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  React.useEffect(() => {
    console.log("keyboard printer render");
  });

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const backKey = React.useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  }, []);

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-white p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Manage Printer
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-green-500`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => printerRef.current.show()}
      >
        <View
          style={tw`w-full bg-green-500/20 h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-green-500`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

export const BackHandlerSetting = React.memo(({ componentId }) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  React.useEffect(() => {
    console.log("keyboard printer render");
  });

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const backKey = React.useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-white p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Setting
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
});

export const BackHandlerDebitBank = React.memo(({ componentId }) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  React.useEffect(() => {
    console.log("keyboard printer render");
  });

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const backKey = React.useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-white p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Pilih Bank
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => printerRef.current.show()}
      >
        <View
          style={tw`w-full bg-myellow h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

export const BackHandlerLanguage = React.memo(({ componentId }) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  React.useEffect(() => {
    console.log("keyboard printer render");
  });

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const backKey = React.useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-white p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Bahasa
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
});

export const BackHandlerBiayaTakeaway = React.memo(({ componentId }) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  React.useEffect(() => {
    console.log("keyboard printer render");
  });

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const backKey = React.useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-white p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Biaya Takeaway
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => printerRef.current.show()}
      >
        <View
          style={tw`w-full bg-myellow h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

export const BackHandlerAddPrinter = React.memo(({ componentId }) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  React.useEffect(() => {
    console.log("keyboard printer render");
  });

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const backKey = React.useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-white p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Bahasa
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
});

export const BackHandlerMenuDanStock = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bg-white bottom-0 w-full h-44 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Menu & Stock
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
});

export const BackHandlerPrivilage = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-white p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Privilage</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-green-500`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => BackRoute(componentId)}
      >
        <View
          style={tw`w-full bg-green-500/20 h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-green-500`}>
            Tambah Akun Privilage
          </Text>
        </View>
      </Pressable>
    </View>
  );
});

export const BackHandlerPilihCabang = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-white p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Pilih Cabang</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => BackRoute(componentId)}
      >
        <View
          style={tw`w-full bg-myellow h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

export const BackHandlerCategoryMenu = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-44 bg-mgray p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full mb-4 `}>
        <Pressable
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Detail Pesanan
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6 shadow-xl flex items-end`}></View>
      </View>
      <View style={tw`flex-row items-center justify-between pr-4`}>
        <Pressable
          activeOpacity={0.5}
          style={tw`w-2/4`}
          onPress={() => BackRoute(componentId)}
        >
          <View
            style={tw`w-full bg-yellow-500/20 h-10 sm:h-12 rounded-full flex items-center justify-center`}
          >
            <Text style={tw`text-sm font-bold text-yellow-500`}>Urutkan</Text>
          </View>
        </Pressable>
        <View style={tw`w-4`} />
        <Pressable
          activeOpacity={0.5}
          style={tw`w-2/4`}
          onPress={() => PushRoute(componentId, "AddCategory")}
        >
          <View
            style={tw`w-full bg-green-500/20 h-10 sm:h-12 rounded-full flex items-center justify-center`}
          >
            <Text style={tw`text-sm font-bold text-green-500`}>
              Tambah Kategory
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
});

export const BackHandlerAddCategory = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-44 bg-white p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable
          style={tw`w-2/6 shadow-xl`}
          onPress={() => SheetManager.show("cancelAddCategory")}
        >
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Tambah Kategori
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => BackRoute(componentId)}
      >
        <View
          style={tw`w-full bg-myellow h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});
