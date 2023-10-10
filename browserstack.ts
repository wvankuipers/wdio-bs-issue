import * as BrowserStackLocal from 'browserstack-local';

let bs_local: BrowserStackLocal.Local;

export const startBrowserStack = async (configSettings): Promise<void> => {
  console.log('Connecting to BrowserStack...');
  bs_local = new BrowserStackLocal.Local();

  return new Promise<void>(async (resolve, reject): Promise<void> => {
    await bs_local.start(
      {
        key: configSettings.browserStackKey,
        force: true,
        verbose: true,
        localIdentifier: configSettings.localIdentifier
      },
      async (error: Error | undefined): Promise<void> => {
        if (error) {
          return reject(error);
        }

        console.log('Connected to BrowserStack');
        resolve();
      }
    );
  });
};

export const stopBrowserStack = async (): Promise<void> =>
  new Promise<void>((resolve, reject) => {
    if (bs_local) {
      bs_local.stop(() => {
        console.log('BrowserStack disconnected');

        resolve();
      });
    } else {
      reject('No connection to BrowserStack was found!');
    }
  });
