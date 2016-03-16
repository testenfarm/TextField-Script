
var target = UIATarget.localTarget();

// START_MODULE TextField Module
var testmodule = "TextField Module";
UIALogger.logStart(testmodule);

target.delay(1);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_1')
target.delay(2);

target.frontMostApp().mainWindow().textFields()[0].tap();
target.delay(1);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_2')
target.delay(2);

// Add delay to keyborard typing speed
var vKeyboard = target.frontMostApp().keyboard();
vKeyboard.setInterKeyDelay(1.0);
vKeyboard.typeString("johnappleseed\n");
target.delay(1);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_3')
target.delay(2);

target.frontMostApp().mainWindow().buttons()["Done"].tap();
target.delay(1);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_4')
target.delay(2);


UIALogger.logPass(testmodule);