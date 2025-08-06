/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { ConnectXMobileSdk } from 'connect-x-react-native-sdk';
import { ChatProvider, LiveChat } from 'connect-x-reactnative-livechat-sdk';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const fetchUnknownId = async () => {
    await ConnectXMobileSdk.cxTracking({
      cx_title: 'GetUnknownIdExample',
      cx_event: 'Get Unknown Id',
    });
    try {
      const id = await ConnectXMobileSdk.getUnknownId();

      Alert.alert('Unknown ID', `Your Unknown ID is: ${id}`);
    } catch (error) {
      Alert.alert('Error', `Failed to get Unknown ID: ${error}`);
    } finally {
    }
  };

  const openChat = () => {
    LiveChat.show({
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNvbm5lY3R4LmRldkBnbWFpbC5jb20iLCJ1c2VySWQiOiJuQ0VxVXhrcFJ3VmxxV1hSaWpBWSIsInN1YiI6Im5DRXFVeGtwUndWbHFXWFJpakFZIiwib3JnYW5pemVJZCI6IjAwMDBPcmdSQW5kRENvbm5lY3RYIiwic3RheUxvZ2luIjpmYWxzZSwiY3VzdG9tVG9rZW4iOiJleUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGRXUWlPaUpvZEhSd2N6b3ZMMmxrWlc1MGFYUjVkRzl2Ykd0cGRDNW5iMjluYkdWaGNHbHpMbU52YlM5bmIyOW5iR1V1YVdSbGJuUnBkSGt1YVdSbGJuUnBkSGwwYjI5c2EybDBMbll4TGtsa1pXNTBhWFI1Vkc5dmJHdHBkQ0lzSW1saGRDSTZNVGN6TmpRNE9UZzFOeXdpWlhod0lqb3hOek0yTkRrek5EVTNMQ0pwYzNNaU9pSm1hWEpsWW1GelpTMWhaRzFwYm5Oa2F5MW5aek00TWtCamIyNXVaV04wTFhndGNISnZaSFZqZEdsdmJpNXBZVzB1WjNObGNuWnBZMlZoWTJOdmRXNTBMbU52YlNJc0luTjFZaUk2SW1acGNtVmlZWE5sTFdGa2JXbHVjMlJyTFdkbk16Z3lRR052Ym01bFkzUXRlQzF3Y205a2RXTjBhVzl1TG1saGJTNW5jMlZ5ZG1salpXRmpZMjkxYm5RdVkyOXRJaXdpZFdsa0lqb2lZMjl1Ym1WamRIZ3VaR1YyUUdkdFlXbHNMbU52YlNJc0ltTnNZV2x0Y3lJNmV5SnZjbWRKWkNJNklqQXdNREJQY21kU1FXNWtSRU52Ym01bFkzUllJbjE5LlN5b3hzZjRqUlh1RkxOM2laa2ZBSDlOdGJKRGpFd3EwdWpkV3d5ZHE1cnQ4a1JCTlZncFQwWjVSX3VpSENZWXFSVVlDeFJTZjlSWmlEd0JZR3padGR4dFEweXhPd05zTVhGYVludHhidTFmQXBKLVIySW5pOHRTdjJ4U2RrSmVIMml4aHR4ajY5R29zbV9CUWM3Q2FWOVpQX0VlZnlGUmk3UklRN1pNNTVfZG9RSnM5NnRWTDNsUXROemtZS3owMVBZbEhLeTB4YzFoXzZlS3V2UEJPQW9KX1RpdjRZTHM3VW5KbmpVNGpOUktLS29Ud2VUZk1qeU10ejc5SEo1d0loeDRsM3VuUGwzQzkxcFhYVFU1N2dnSGtvMUVMNEFLbUc2SjVaRERzd19GUUstajdlMVBQYkNSTkRsTUhVd0FaNGNNMGp0ZHpzc3M4ZUduTHBwZzBfZyIsImltYWdlIjoiaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9jb25uZWN0LXgtcHJvZHVjdGlvbi5hcHBzcG90LmNvbS9vL1VzZXJzJTJGbkNFcVV4a3BSd1ZscVdYUmlqQVklMkZVc2Vyc19uQ0VxVXhrcFJ3VmxxV1hSaWpBWV8yOTIxODc2MDVfNDU2NjExMDA5ODAwMzIxXzMxNjkxNDIxMTEzNzM1NTkwMzlfbi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0zZWU4M2NkOC01OTdmLTQyZWQtOGQyNy04NDk2NzM1ZTQ4ZjkiLCJkaXNwbGF5TmFtZSI6IlN1cGVyIEFkbWluIPCfjoPwn5G7IiwiYXBwSWQiOiIxMjMxMjNhc2Rhc2Rhc2QiLCJpYXQiOjE3MzY0OTIwODEsImV4cCI6MzE3MjgwOTM0NDgxfQ.E_Bh36PXkJ61dLp31AX4vD91OYDl3R37FzS3qFFqMrI',
      orgId: '0000OrgRAndDConnectX',
      channelId: '9318254639',
      customHeader: undefined,
      // Pass the specific customer's details
      externalValue: 'Punn',
    });
  };

  return (
    <ChatProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Section title="Welcome to ConnectX SDK">
            This is a sample app to demonstrate the ConnectX SDK functionalities.
          </Section>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
              justifyContent: 'space-between',
              alignItems: 'stretch',
              padding: 20,
              gap: 10,
            }}>
            <Button title="Get Unknown ID" onPress={fetchUnknownId} />

            <Button title="Open Live Chat" onPress={openChat} />

          </View>
        </ScrollView>
      </SafeAreaView>
    </ChatProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
