import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.acoulombe',
  appName: 'DRG BoardGame',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
