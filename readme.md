# Basic Node.js Server

A simple Node.js project that demonstrates creating a basic HTTP server **without** using any external frameworks like Express.

## Features

- Create an HTTP server using `http` module.
- Handle basic routing (`/` and `/text`).
- Accept and process form data using `POST` request.
- Write submitted data to a file (`data.txt`).
- Serve basic HTML responses.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ChaudharyNavneet/basicNodeServer.git
```

2. Navigate into the project folder:

```bash
cd basicNodeServer
```

3. Install dependencies (optional, if you want to use `nodemon` for development):

```bash
npm install
```

### Running the Server

Start the server:

```bash
node app.js
```

Or if you have `nodemon` installed:

```bash
npx nodemon app.js
```

The server will start and listen on port `3001`.

Visit in your browser:

```
http://localhost:3001/
```

## Project Structure

```
basicNodeServer/
│
├── app.js          # Main server code
├── data.txt        # File where POST data is saved (created automatically)
├── package.json    # npm package file (if you installed nodemon)
└── README.md       # Project documentation
```

## How it Works

- `GET /` → Returns an HTML page with a form to submit a message.
- `POST /text` → Handles form submission, saves the message into `data.txt`, and returns a confirmation page.

## Example Flow

Home page (`/`):

```
This server is made with Node.js only
[ Text Input Field ]
[ Submit Button ]
```

After submitting the form (`POST /text`):

```
Your form details submitted: message=HelloWorld
```

_(The message you submit is saved into `data.txt`.)_

## License

This project is licensed under the [MIT License](LICENSE).
