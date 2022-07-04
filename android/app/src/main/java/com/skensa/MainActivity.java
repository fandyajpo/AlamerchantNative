package com.skensa;

import com.reactnativenavigation.NavigationActivity;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

public class MainActivity extends NavigationActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this, true);
    super.onCreate(savedInstanceState);
  }
}

// package com.skensa;
//
// import com.reactnativenavigation.NavigationActivity;
// import com.facebook.react.ReactActivityDelegate;
// import com.facebook.react.ReactRootView;
//
// public class MainActivity extends NavigationActivity {
//
//
//
//
//
//   // public static class MainActivityDelegate extends ReactActivityDelegate {
//   //   public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
//   //     super(activity, mainComponentName);
//   //   }
//   //
//   //   @Override
//   //   protected ReactRootView createRootView() {
//   //     ReactRootView reactRootView = new ReactRootView(getContext());
//   //     // If you opted-in for the New Architecture, we enable the Fabric Renderer.
//   //     reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
//   //     return reactRootView;
//   //   }
//   // }
// }
