import config from '../../config'

const users = {
  4: {name: 'Mark'},
  5: {name: 'Paul'},
};

export const setPromise = {
  url: '',
  type: '',
  options: { 
    method: null,
    body: null,
    mode: 'cors'
  },
  // $FlowFixMe
  set method (val): string { this.options.method = val },
  // $FlowFixMe
  set body (val): Object { this.options.body = val },
  // $FlowFixMe
  set urls (val): string { this.url = val },
  // $FlowFixMe
  set types (val): string { this.type = val },

  async response() {
    // $FlowFixMe
    const headers = new Headers({ 'access-token': JSON.parse(localStorage.getItem(config.api.token)) })

    if (this.type) headers.append('Content-Type', this.type)

    switch(this.options.method) {
      case 'GET':
        return new Promise((resolve, reject) => {
          const userID = parseInt(this.url, 10);
          process.nextTick(
            () =>
              users[userID]
                ? resolve(users[userID])
                : reject({
                    error: 'User with ' + userID + ' not found.',
                  }),
          );
        });
        case 'PUT':
        return new Promise((resolve, reject) => {
          users[6] = this.options.body
          process.nextTick( 
            () =>
              users
                ? resolve(users)
                : reject({
                    error: 'User not found.',
                  }),
          );
        });
    }
  }
}