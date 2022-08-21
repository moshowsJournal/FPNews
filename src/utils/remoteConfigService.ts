import remoteConfig from '@react-native-firebase/remote-config';
import AppColors from './colors';

const RemoteConfigService = {
  initialize: async () => {
    // await remoteConfig().setConfigSettings(
    //     {
    //         minimumFetchIntervalMillis: 300,
    //     }
    // );
    await remoteConfig().setDefaults({primaryColor: AppColors.defaultSkin});
    await remoteConfig().fetchAndActivate();
  },
  getRemoteValue: (key : string) => {
      return remoteConfig().getValue(key).asString()
  }
};

export default RemoteConfigService;