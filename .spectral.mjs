 export default {                                                                                   
    rules: {                                                                                       
      'get-summary': {                                                                               
        message: 'GET operation must include a summary',                                             
        severity: 'warn',                                                                            
        given: '$.paths[*].get',                                                                     
        then: { field: 'summary', function: 'truthy' },                                              
      },                                                                                             
    },                                                                                               
  }; 
