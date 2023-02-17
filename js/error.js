import MetamaskErrors from './errors.js';


function isValidCode(code) {
    console.log(code, code in MetamaskErrors ? true : false, 't/f ?')
    return code in MetamaskErrors ? true : false;
  }

export const formatError = error => {
    console.log(error, 'test')
    if (error.data) {
        console.log('true')
      if (isValidCode(error.data.code)) {
        console.log(error.code, 'this code')
        return MetamaskErrors[String(error.data.code)];
      } else {
        return error.data.message;
      }
    } else {
      if (error.message) {
        let message = error.message;
        let startIndex = message.indexOf('data');
  
        if (startIndex < 0) {
          if (isValidCode(error.code)) {
            return MetamaskErrors[String(error.code)];
          }
        }
  
        let code = String(message.substr(startIndex + 14, 6));
  
        if (isValidCode(code)) {
          return MetamaskErrors[code];
        }
      }
    }
  
    return 'Error!';
  };