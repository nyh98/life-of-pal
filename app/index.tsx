import { Button, Text, View } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';

console.log('adsasd : ', process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID);
WebBrowser.maybeCompleteAuthSession();
export default function Index() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
  });
  console.log(request);

  console.log(response);

  useEffect(() => {
    if (response?.type === 'success') {
      console.log(response.authentication);
    }
  }, [response]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        title="google login"
        onPress={() => {
          promptAsync();
        }}
      ></Button>
    </View>
  );
}
