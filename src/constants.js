const BuildStatus = {
  IDLE: 0,
  STARTED: 1,
  COMPLETED: 2,
  FAILED: 3,
  EXCLUDED: 4,
  TEST_CREATED: 5,
  TEST_STARTED: 6,
  TEST_COMPLETED: 7,
  TEST_FAILED: 8,
  ALL_TESTS_FAILED: 9,
  text: {
    0: 'idle',
    1: 'build started',
    2: 'build done',
    3: 'build failed',
    4: 'excluded',
    5: 'tests created',
    6: 'tests started',
    7: 'tests completed',
    8: 'some tests failed',
    9: 'all tests failed'
  },
  color: {
    0: 'faded',
    1: 'primary',
    2: 'primary',
    3: 'negative',
    4: 'dark',
    5: 'primary',
    6: 'primary',
    7: 'positive',
    8: 'warning',
    9: 'negative'
  }
}

const TestStatus = {
  CREATED: 1,
  STARTED: 2,
  COMPLETED: 3,
  FAILED: 4,
  text: {
    1: 'tests created',
    2: 'tests started',
    3: 'tests completed',
    4: 'tests failed'
  },
  color: {
    1: 'faded',
    2: 'faded',
    3: 'positive',
    4: 'negative'
  }
}

export { BuildStatus, TestStatus }
