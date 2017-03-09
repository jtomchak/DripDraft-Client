/* 
  * Setting up block level variable to store class state
  * , set's to null by default.
*/

class Cache {  
    constructor() {
        this.accessToken = '';
      }

      updateAccessToken(token) {
        this.accessToken = token;
      }

      fetchAccessToken() {
          return this.accessToken;
      }
}

export let cache = new Cache();

