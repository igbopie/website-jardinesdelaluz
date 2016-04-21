function ContactService($http) {
  'ngInject';

  const service = {};
  const email = 'genijardinesluz@gmail.com';

  service.send = function(dataToSend) {
    return new Promise((resolve, reject) => {
      $http.post('https://formspree.io/'+email, dataToSend).success((data) => {
        resolve(data);
      }).error((err, status) => {
        reject(err, status);
      });
    });
  };

  return service;

}

export default {
  name: 'ContactService',
  fn: ContactService
};
