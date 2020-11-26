import axios from "axios"

class HelloWorldService {
  executeService() {
    return axios.get('http://localhost:8080/hello')
    //console.log('executing HelloWorldService')
  }

  executeBeanService() {
    return axios.get('http://localhost:8080/hello-bean')
    //console.log('executing HelloWorldService')
  }

  executePathVariableService(name) {
    return axios.get(`http://localhost:8080/path-variable/${name}`)
    //console.log('executing HelloWorldService')
  }
}

export default new HelloWorldService()