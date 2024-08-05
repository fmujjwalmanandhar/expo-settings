import ExpoModulesCore

public class ExpoSettingsModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoSettings')` in JavaScript.
    Name("ExpoSettings")

    Events("onChangeTheme")

    Function("setTheme"){ (theme: Theme) -> Void in
      UserDefaults.standard.set(theme.rawValue, forKey:"theme")
      /*** sendEvent(eventName, payload) function is defined in the module instance to send the actual event with some payload ***/
      sendEvent("onChangeTheme",[
        "theme":theme.rawValue
      ])
    }
    
    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("getTheme") { ()-> String in
      UserDefaults.standard.string(forKey:"theme") ?? Theme.system.rawValue
    }
  }

    enum Theme: String, Enumerable{
      case light
      case dark
      case system 
    }
}
