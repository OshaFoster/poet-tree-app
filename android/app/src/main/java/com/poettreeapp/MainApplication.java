package com.poettreeapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.auth.ReactNativeFirebaseAuthPackage;
import io.invertase.firebase.ReactNativeFirebaseAppPackage;
import io.invertase.firebase.firestore.ReactNativeFirebaseFirestorePackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactNativeFirebaseAuthPackage(),
            new ReactNativeFirebaseAppPackage(),
            new ReactNativeFirebaseFirestorePackage(),
            new AsyncStoragePackage(),
            new RNDeviceInfo(),
            new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
