/**
 * AppController class
 */
class AppController {
  /**
   * resolves request to the homepage
   * @param {Object} request - request from the server
   * @param {Object} response - response for the server
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School');
  }
}

export default AppController;
