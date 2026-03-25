// .spectral.mjs
export default {
  extends: ['spectral:oas'],
  rules: {
    'operation-description': {
      message: 'Operation must have a description',
      severity: 'error',
      given: '$.paths[*][*]',
      then: {
        field: 'description',
        function: 'truthy',
      },
    },
    'operation-tags': {
      message: 'Operation must include tags',
      severity: 'error',
      given: '$.paths[*][*]',
      then: {
        field: 'tags',
        function: 'truthy',
      },
    },
    'get-summary': {
      message: 'GET operation must include a summary',
      severity: 'warn',
      given: '$.paths[*].get',
      then: {
        field: 'summary',
        function: 'truthy',
      },
    },
  },
};
