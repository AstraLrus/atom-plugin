'use babel';

import path from 'path';
import { STORE_KEYS } from '../lib/constants/store';

const root = __dirname;
const mockProjectPath = path.resolve(root, 'mocked_data');
const analysedFile = `${mockProjectPath}/sample_repository/main.js`;

export const bundleID = 'mocked-bundle-id';

export const mockBundle = {
  files: {
    [analysedFile]: '3e2979852cc2e97f48f7e7973a8b0837eb73ed0485c868176bc3aa58c499f534',
    [`${mockProjectPath}/sample_repository/sub_folder/test2.js`]: 'c8bc645260a7d1a0d1349a72150cb65fa005188142dca30d09c3cc67c7974923',
    [`${mockProjectPath}/sample_repository/utf8.js`]: 'cc2b67993e547813db67f57c6b20bff83bf4ade64ea2c3fb468d927425502804',
    [`${mockProjectPath}/test.java`]: '09f4ca64118f029e5a894305dfc329c930ebd2a258052de9e81f895b055ec929',
  }
}

export const mockAnalysisResults = {
  files: {
    [analysedFile]: { '0': [{ rows: [1, 2], cols: [3, 4], markers: [] }] },
  },
  suggestions: {
    '0': {
      id: 'TestSuggestion',
      message: 'some message',
      severity: 1,
    }
  },
};

export const mockAnalysisTable = [
  {
    fileName: `${mockProjectPath}/sample_repository/main.js`,
    localPath: `${mockProjectPath}/sample_repository/main.js`,
    localName: 'main.js',
    rowID: `row-file-${mockProjectPath}/sample_repository/main.js`,
    info: 1,
    warning: 0,
    critical: 0,
    descriptions: [
      {
        startCol: 3,
        startRow: 1,
        endCol: 4,
        endRow: 2,
        severity: 1,
        suggestionID: 'TestSuggestion',
        message: 'some message',
        rowID: `row-description-${mockProjectPath}/sample_repository/main.js-1`,
        markers: [
          {
            startCol: 3,
            startRow: 1,
            endCol: 4,
            endRow: 2,
            suggestionID: 'TestSuggestion',
            message: 'some message',
            markerID: `dcMarker-${mockProjectPath}/sample_repository/main.js-1-3-TestSuggestion`,
            rowID: `row-marker-${mockProjectPath}/sample_repository/main.js-1-3-TestSuggestion`,
          },
        ],
      },
    ],
  },
];

export const mockState = {
  // shared
  [STORE_KEYS.accountType]: 'free',
  [STORE_KEYS.sessionToken]: '444641e35f09d515e366e88ffc0e5929ef42263505d3424184e94040ca7401bc',
  [STORE_KEYS.serviceURL]: 'http://localhost:3000',

  // project
  [STORE_KEYS.confirmedFolders]: [mockProjectPath],
  [STORE_KEYS.allowedFiles]: {
    extensions: ['.java', '.html', '.js', '.jsx', '.ts', '.tsx', '.vue', '.py'],
    configFiles: ['.pmdrc.xml', '.ruleset.xml', 'ruleset.xml', '.eslintrc.js', '.eslintrc.json', '.eslintrc.yml', 'tslint.json', '.pylintrc', 'pylintrc'],
  },
  [STORE_KEYS.bundleID]: bundleID,

  // runtime
  [STORE_KEYS.testEnvironment]: true,
};
