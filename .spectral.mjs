export default {                                                                                   
    rules: {                                                                                       
      'get-summary': {                                                                               
        message: 'GET operation must include a summary',                                             
        severity: 'error',                                                                            
        given: '$.paths[*].get',                                                                     
        then: { field: 'summary', function: 'truthy' },                                              
      },                                                                                             
    },                                                                                               
}; 
