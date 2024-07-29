class AppController {
  static getHomepage(request, response) {
    this.response = response;
    this.request = request;
    this.response.statusCode = 200;
    this.response.send('Hello Holberton School!');
  }
}

export default AppController;
