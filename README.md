# React Native Storybook Testing

This project is a basic test boilerplate for storybook implementation with react native.

[Storybook](https://storybook.js.org/) is a development environment for rapid iteration and testing of UI components.

The main idea of Storybook is for you to create “Stories”. These stories represent a specific state or behavior of an individual component. For example, there can be a story for the default state of a button, or a disabled button, or a button that’s currently active.

A story can also be composed of tiny little components. For example, a Card component can be composed of a CardImage, CardText, and CardButton components. These stories can then be rendered within the same environment as a React Native app (either on a simulator or real device) so they can be tested. These stories also serve as a living and interactive style guide that documents how specific components should look and behave.

In this case we have three variations of a Button component just for testing, and two enviroments - stoorybook and development.

-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Running App](#running-app)

The project is created using **React Native CLI** & react-native init following
[official guide](https://reactnative.dev/docs/getting-started).

## Prerequisites

### Platform: iOS

-   Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
-   Install CocoaPods

```
$ sudo gem install cocoapods
```

### Platform: Android

-   Install [Android Studio](https://developer.android.com/studio/index.html)
-   Follow official [guide](https://reactnative.dev/docs/environment-setup) for Android

## Installation

```
$ git clone https://github.com/parsable-aavramovic/react-native-storybook.git
```

```
$ yarn
```

For iOS, installation has to be done also in ios folder:

```
$ cd ios
$ pod install

```

## Running App

### Platform: iOS

Running command below will trigger storybook enviroment and you will get storybook UI on your ios device.

```
$ yarn run ios
```

### Platform: Android

Running command below will trigger storybook enviroment and you will get storybook UI on your android device.

```
$ yarn run android
```


## Storybook usage docs

- [How to write stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Storybook getting started](https://www.learnstorybook.com/intro-to-storybook/react-native/en/get-started/)
- [Storybook react-native ](https://github.com/storybookjs/react-native)


### Tech Stack

-   react 16.13.1
-   react-native 0.63.4
- 	@storybook/react-native 5.3.23
-   styled-components 5.2.1