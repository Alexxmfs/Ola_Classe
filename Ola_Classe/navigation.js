import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

// ESTE ARQUIVO IGNORA OS WARNINGS VAMOS USAR FUTURAMENTE
// import "./ignoreWarnings"

import FirstIntroduction from "./src/Screens/introduce/FirstIntroduction";
import SecondIntroduction from "./src/Screens/introduce/SecondIntroduction";
import ThirdIntroduction from "./src/Screens/introduce/ThirdIntroduction";
import RegistryScreen from "./src/Screens/RegistryScreen";
import SignUpScreen from "./src/Screens/SignUpScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from './src/Screens/HomeScreen';
import StudentOrTeacher from './src/Screens/StudentOrTeacher';
import TeacherLang from './src/Screens/languagesScreens/TeacherLang'
import StudentLang from './src/Screens/languagesScreens/StudentLang';
import VideoScreen from "./src/Screens/VideoScreen";
import CreatePostScreen from "./src/Screens/CreatePostScreen";
import ChatScreen from "./src/Screens/ChatScreen";
import NotificationScreen from "./src/Screens/NotificationScreen";
import FriendsMenu from "./src/Screens/FriendsMenu";
import CategoryMenu from "./src/Screens/CategoryMenu";
import UserProfileScreen from './src/Screens/UserProfileScreen'
import OpenVideoGuanabara from './src/Screens/videosScreen/OpenVideoGuanabara';
import OpenVideoDechamps from './src/Screens/videosScreen/OpenVideoDechamps';
import CategoryAngularScreen from './src/Screens/Category_Languages/CategoryAngularScreen';
import CategoryJsScreen from './src/Screens/Category_Languages/CateogryJsScreen';
import CategoryHtmlScreen from './src/Screens/Category_Languages/CategoryHtmlScreen';
import MessagesScreenAsh from "./src/Screens/Messages/MessagesScreenAsh";
import MessagesScreenJordan from "./src/Screens/Messages/MessagesScreenJordan";
import MessagesScreenGuana from "./src/Screens/Messages/MessagesScreenGuana";
import DenunciationScreen from "./src/Screens/DenunciationScreen";
import CommentScreen from "./src/Screens/CommentScreen";
import AccountSettingsScreen from "./src/Screens/Settings/AccountSettingsScreen";
import DeleteAccountScreen from "./src/Screens/Settings/DeleteAccountScreen";
import UserProfileVideo from "./src/Screens/UserProfileVideo";

import profileCursoemVideo from "./src/Screens/Profiles/Curso_Em_Video/profileCursoemVideo";
import feedPostGuanabara from "./src/Screens/Profiles/Curso_Em_Video/feedPostGuanabara";
import VideosCursoEmVideo from "./src/Screens/Profiles/Curso_Em_Video/VideosCursoEmVideo";

import profileAsh from "./src/Screens/Profiles/Ash/profileAsh";
import feedPostAsh from "./src/Screens/Profiles/Ash/feedPostAsh";
import ProfileVideoAsh from "./src/Screens/Profiles/Ash/ProfileVideoAsh";


import Post from "./src/Screens/Post";
import PublicarPost from "./src/Screens/PublicarPost";




const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

export const SignedInStack = () => {
  const [loaded] = useFonts({
  InterBold: require("./assets/fonts/Inter-Bold.ttf"),
  InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
  InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
  InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  
  if(!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
        <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="FriendsMenu" component={FriendsMenu} />
        <Stack.Screen name="CategoryMenu" component={CategoryMenu} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="OpenVideoGuanabara" component={OpenVideoGuanabara} />
        <Stack.Screen name="OpenVideoDechamps" component={OpenVideoDechamps} />
        <Stack.Screen name="CategoryAngularScreen" component={CategoryAngularScreen} />
        <Stack.Screen name="CategoryJsScreen" component={CategoryJsScreen} />
        <Stack.Screen name="CategoryHtmlScreen" component={CategoryHtmlScreen} />
        <Stack.Screen name="MessagesScreenAsh" component={MessagesScreenAsh} />
        <Stack.Screen name="MessagesScreenJordan" component={MessagesScreenJordan} />
        <Stack.Screen name="MessagesScreenGuana" component={MessagesScreenGuana} />
        <Stack.Screen name="DenunciationScreen" component={DenunciationScreen} />
        <Stack.Screen name="CommentScreen" component={CommentScreen} />
        <Stack.Screen name="AccountSettingsMenu" component={AccountSettingsScreen} />
        <Stack.Screen name="DeleteAccountScreen" component={DeleteAccountScreen} />
        <Stack.Screen name="profileCursoemVideo" component={profileCursoemVideo} />
        <Stack.Screen name="feedPostGuanabara" component={feedPostGuanabara} />
        <Stack.Screen name="profileAsh" component={profileAsh} />
        <Stack.Screen name="feedPostAsh" component={feedPostAsh} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="PublicarPost" component={PublicarPost} />
        <Stack.Screen name="UserProfileVideo" component={UserProfileVideo} />
        <Stack.Screen name="ProfileVideoAsh" component={ProfileVideoAsh} />
        <Stack.Screen name="VideosCursoEmVideo" component={VideosCursoEmVideo} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export const SignedOutStack = () => {

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    });
    
    if(!loaded) return null;

    return (
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName='FirstIntroduction'>
        <Stack.Screen name="FirstIntroduction" component={FirstIntroduction} />
        <Stack.Screen name="SecondIntroduction" component={SecondIntroduction} />
        <Stack.Screen name="ThirdIntroduction" component={ThirdIntroduction} />
        <Stack.Screen name="RegistryScreen" component={RegistryScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="StudentOrTeacher" component={StudentOrTeacher} />
        <Stack.Screen name="TeacherLang" component={TeacherLang} />
        <Stack.Screen name="StudentLang" component={StudentLang} />
        {/* <Stack.Screen name="VideoScreen" component={VideoScreen} /> */}
        {/* ⚠️HomeScreem Apaga pra n da merda⚠️*/}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {/* ⚠️HomeScreem Apaga pra n da merda⚠️ */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}