import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { globalStyles } from '../presentation/themes/Themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../presentation/routes/AppNavigator';
// Asegúrate de importar el tipo correcto

type NavigationProp = StackNavigationProp<AppStackParamList, 'MainTabs'>;

type HeaderProps = {
  showHeaderRight?: boolean;
};
export const Header = ({ showHeaderRight = true }: HeaderProps) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={[globalStyles.header, !showHeaderRight && styles.centerHeader]}>
      <View style={globalStyles.headerLeft}>
        <Icon name="pets" size={24} color="white" style={{ marginRight: 8 }} />
        <Text style={globalStyles.headerText}>Patitas Chile</Text>
      </View>

      {showHeaderRight && (
        <View style={globalStyles.headerRight}>
          <Pressable
            onPress={() => navigation.navigate('HomeStack', { screen: 'Perfil' })}
            style={({ pressed }) => [
              styles.iconContainer,
              { opacity: pressed ? 0.7 : 1, transform: [{ scale: pressed ? 0.9 : 1 }], 
              display: 'flex',
              flexDirection: 'row'
            },
            ]}
          >
            <Icon name="account-circle" size={30} color="white" />
            <Text style={globalStyles.headerProfileText}>Perfil</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});


