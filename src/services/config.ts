const securtiy=`/security/api`;

const config = {
    apiBaseUrl: process.env.REACT_APP_BASE_URL || 'https://localhost:1000',
    endpoints: {
      securtiy:{
        users: {
          register:`${securtiy}/users`,
          get:`${securtiy}/users`,
          update:`${securtiy}/users`,
          disable:`${securtiy}/users/disable`,
          delete:`${securtiy}/users/delete`
        },
        sessions:{
            login:`${securtiy}/login`
        }
      }

      // ...agrega aquí otros endpoints que necesites
    },
  };
  
  export default config;