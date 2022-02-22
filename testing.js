export function getDatabases(instanceId, callback) {
  axios.get(`./v1/${instanceId}/databases`, { params: { system: true } }).then(response => {
    callback(null, response.data.databases);
  }).catch(error => {
    if (error.response && error.response.data) {
      callback(error.response.data.exception);
    }
  });
}

export function getDbnames(instanceId, callback) {
  axios.get(`./v1/${instanceId}/dbnames`, { params: { system: true } }).then(response => {
    callback(null, response.data.dbnames);
  }).catch(error => {
    if (error.response && error.response.data) {
      callback(error.response.data.exception);
    }
  });
}

export function getDatabase(instanceId, databaseName, callback) {
  axios.get(`./v1/${instanceId}/databases`, { params: { system: true, database_name: databaseName } }).then(response => {
    callback(null, response.data.databases);
  }).catch(error => {
    if (error.response && error.response.data) {
      callback(error.response.data.exception);
    }
  });
}
