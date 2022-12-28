export function HttpHelper(url, method, body) {
      return fetch(url,{
              method: method,
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              },
              body: body
          })
          .then(response => response.json())
          .catch(e => console.log(e))
  }