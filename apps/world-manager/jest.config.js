module.exports = {
  name: 'world-manager',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/world-manager',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
