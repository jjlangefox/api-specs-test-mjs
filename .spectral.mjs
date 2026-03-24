// .spectral.mjs
import { ruleset } from '@stoplight/spectral-core';

export default ruleset({
  extends: ['spectral:oas'],
  rules: {
    'operation-description': {
      description: 'All operations must have a description',
      message: 'Operation must have a description',
      severity: 'error',
      given: '$.paths[*][*]',
      then: {
        field: 'description',
        function: 'truthy',
      },
    },
    'operation-tags': {
      description: 'All operations must have at least one tag',
      message: 'Operation must include tags',
      severity: 'error',
      given: '$.paths[*][*]',
      then: {
        field: 'tags',
        function: 'truthy',
      },
    },
    'get-summary': {
      description: 'GET operations must have a summary',
      message: 'GET operation must include a summary',
      severity: 'warning',
      given: '$.paths[*].get',
      then: {
        field: 'summary',
        function: 'truthy',
      },
    },
  },
});
