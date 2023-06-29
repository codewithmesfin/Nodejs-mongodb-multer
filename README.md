# Node.js MongoDB Multer Example

This is a test application created with Node.js and MongoDB. It demonstrates a simple file upload functionality using Express.js and Multer.

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Configuration

1. Create a `.env` file in the project's root directory.
2. Set the necessary environment variables in the `.env` file. For example:


`PORT=3000`
`MONGODB_URI=mongodb://localhost/test`
`JWT_SECRET=mysecretkey`


## Usage

1. Start the application by running `node server.js` or `npm start`.
2. The server will start running on the configured port (default is 3000).
3. Use a tool like Postman to test the file upload functionality. Refer to the documentation or the provided code for the endpoint details.

## Dependencies

- bcrypt: ^5.1.0
- cors: ^2.8.5
- dotenv: ^16.1.4
- express: ^4.18.2
- express-validator: ^7.0.1
- jsonwebtoken: ^9.0.0
- mongodb: ^5.6.0
- mongoose: ^7.3.0
- multer: ^1.4.5-lts.1

## Contributing

Contributions are welcome! If you find any issues or want to contribute to the project, please feel free to submit a pull request.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

