import React, { useCallback } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { Back } from "../../lib/listSvg";
import { BackRoute } from "../../lib/ctx";
import { Keyboard } from "react-native";

const BackHandlerTaxAndService = React.memo(({ componentId }) => {
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

  const backKey = useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  }, []);

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Tax & Service</Text>
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
          style={tw`w-full bg-myellow h-13 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

const BackHandlerEditProfile = React.memo(({ componentId, title }) => {
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

  const backKey = useCallback(() => {
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
          <Text style={tw`text-gray-800 text-lg font-bold`}>{title}</Text>
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
          style={tw`w-full bg-myellow h-13 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

const BackHandlerPrinter = React.memo(({ componentId, printerRef }) => {
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

  const backKey = useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  }, []);

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>
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
          style={tw`w-full bg-green-500/20 h-13 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-green-500`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

const BackHandlerSetting = React.memo(({ componentId }) => {
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

  const backKey = useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Setting</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
});

const BackHandlerDebitBank = React.memo(({ componentId }) => {
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

  const backKey = useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Pilih Bank</Text>
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
          style={tw`w-full bg-myellow h-13 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

const BackHandlerLanguage = React.memo(({ componentId }) => {
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

  const backKey = useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Bahasa</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
});

const BackHandlerBiayaTakeaway = React.memo(({ componentId }) => {
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

  const backKey = useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>
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
          style={tw`w-full bg-myellow h-13 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

const BackHandlerAddPrinter = React.memo(({ componentId }) => {
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

  const backKey = useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Bahasa</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
});

const BackHandlerMenuDanStock = React.memo(({ componentId }) => {
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
          <Text style={tw`text-gray-800 text-lg font-bold`}>Menu & Stock</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
});

const BackHandlerPrivilage = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
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
          style={tw`w-full bg-myellow h-13 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold`}>Tambah Akun Privilage</Text>
        </View>
      </Pressable>
    </View>
  );
});

module.exports = {
  BackHandlerTaxAndService,
  BackHandlerEditProfile,
  BackHandlerPrinter,
  BackHandlerSetting,
  BackHandlerDebitBank,
  BackHandlerLanguage,
  BackHandlerBiayaTakeaway,
  BackHandlerAddPrinter,
  BackHandlerMenuDanStock,
  BackHandlerPrivilage,
};
