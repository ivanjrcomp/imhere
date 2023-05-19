<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<div align="center">

# **Attendance list**<br />
![Github][github.badge] ![ReactNative][ReactNative.badge] ![TypeScript][typeScript.badge]
----
<br />

<table>
<tr>
<td align="center">
An intuitive React Native project for event organizers to effortlessly track attendance, replacing manual paper-based systems.

</td>
</tr>
</table>
<br />

[Summary](#summary) •
[Solution](#solution) •
[Requirements](#requirements) •
[Quickstart](#quickstart)

</div>

## **Summary**

This is a simple React Native project designed to help organizers maintain an record of attendee presence at an event, providing a convenient solution for tracking and managing attendance, eliminating the need for manual paper-based systems. The system allows event organizers to add attendees and register their presence with just a few clicks.

## **Solution**

In this project, I chose to build a simple React Native solution using Expo (Managed Workflow) as a framework, running with Expo Go. This choice facilitates the creation of solutions for different devices without the need to worry about configuring the CLI for each mobile operating system.

The main objective of this project is to utilize React Native to build a solution that can run on Android and iOS systems in a straightforward manner. As a learning project, my focus is not on a complex solution but on grasping fundamental concepts. For example, I aimed to deepen my understanding of Hooks (useState, immutability, state, and TextInput), rendering, asynchronous flow, JSX, React Components (such as TextInput, TouchableOpacity, StatusBar, ScrollView, and FlatList), custom components, and handling alerts.

In summary, this project provided me with a valuable learning experience as I utilized React Native and Expo (Managed Workflow) to create a user-friendly solution for Android and iOS devices. I hope that my work here can be useful to others and inspire them to further explore these tools.

## **Requirements**

- Node.JS: 18.14.0
    - NPM Package: 9.6.6

## **Quickstart**

Below are the step-by-step instructions for running the project in your emulator or phone:

1. Install the Expo Go app on your iOS or Android device and ensure that it is connected to the same wireless network as your computer. For Android, use the Expo Go app to scan the QR code displayed in your terminal and open your project. On iOS, use the built-in QR code scanner in the default Camera app. Alternatively, you can also run the project on an emulator. 
2. After installing Expo Go on the emulator or your device, navigate to the project directory and run the following command to install the dependencies:<br />
    + `npm install`
3. Finally, start the Expo development server to run the application using the following command. If you are using a mobile device, scan the QR code that appears:
    + `npx expo start`

<br />

> **Warning** <br />
*It is common for VSCode, if it is your IDE, to not recognize certain code snippets and display adjustment warnings. However, simply reopening the project in VSCode after installing the dependencies will prevent these alerts from being displayed.

[github.badge]: https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white
[typeScript.badge]: https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white
[ReactNative.badge]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB