export default [
    {
      url: '/api/getUsers',
      method: 'get',
      response: () => {
        console.log('body>>>>>>>>');
        return {
          code: 0,
          message: 'ok',
          data: ['tom','jerry'],
        };
      },
    },
  ];