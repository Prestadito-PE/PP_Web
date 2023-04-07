const config = {
    apiBaseUrl: process.env.REACT_APP_BASE_URL || 'https://localhost:1001/api',
    endpoints: {
      users: {
      register:'/users',
      get:'/users',
      update:'/users',
      disable:'/users/disable',
      delete:'/users/delete'
    },
    sessions:{
        login:'/sessions/login'
    }
      // ...agrega aquí otros endpoints que necesites
    },
  };
  
  export default config;