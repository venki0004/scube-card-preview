export function getDatabases(instanceId, callback) {
  axios.get(`./v1/${instanceId}/databases`, { params: { system: true } }).then(response => {
    callback(null, response.data.databases);
  }).catch(error => {
    errorHandeler(error,callback)
  });
}

export function getDbnames(instanceId, callback) {
  axios.get(`./v1/${instanceId}/dbnames`, { params: { system: true } }).then(response => {
    callback(null, response.data.dbnames);
  }).catch(error => {
    errorHandeler(error,callback)
  });
}

export function getDatabase(instanceId, databaseName, callback) {
  axios.get(`./v1/${instanceId}/databases`, { params: { system: true, database_name: databaseName } }).then(response => {
    callback(null, response.data.databases);
  }).catch(error => {
    errorHandeler(error,callback)
  });
}

errorHandeler(error,callback){
  if (error.response && error.response.data) {
      callback(error.response.data.exception);
    }
}



performActionVacuum(func, params, initialMessage, successMessage) {
    if (func) {
      this.setState(prevState => ({
        loader: {
          ...prevState,
          isVisible: false
        },
        notification: {
          ...prevState.notification,
          isVisible: true,
          kind: 'success',
          subtitle: initialMessage
        }
      }));

      func(...params, error => {
        if (error) {
          if (error === network_error_message) {
            this.setState(prevState => ({
              loader: {
                ...prevState,
                isVisible: false
              },
              notification: {
                ...prevState.notification,
                isVisible: true,
                kind: 'info',
                subtitle: network_error_message
              }
            }));
          } else {
            this.setState(prevState => ({
              loader: {
                ...prevState,
                isVisible: false
              },
              notification: {
                ...prevState.notification,
                isVisible: true,
                kind: 'error',
                subtitle: error
              }
            }));
          }
        } else {
          this.setState(prevState => ({
            notification: {
              ...prevState.notification,
              isVisible: true,
              kind: 'success',
              subtitle: successMessage
            }
          }));
        }
      });
    }
  }
performAction(func,params, successMessage) {
}
  performAction(func, params, successMessage) {
    if (func) {
      this.setState(prevState => ({
        loader: {
          ...prevState,
          isVisible: false
        },
        modal: () => null
      }));

      func(...params, error => {
        if (error) {
          this.setState(prevState => ({
            loader: {
              ...prevState,
              isVisible: false
            },
            notification: {
              ...prevState.notification,
              isVisible: true,
              kind: 'error',
              subtitle: error
            }
          }));
        } else {
          this.setState(prevState => ({
            notification: {
              ...prevState.notification,
              isVisible: true,
              kind: 'success',
              subtitle: successMessage
            }
          }));
          this.getDatabases(true);
        }
      });
    }
  }
