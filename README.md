# This is an API to conver JSON 2 CSV for the LawnStarter JSON Format

A file with a sample format can be found at file:

/api/data/standardJSON.json

# This project adds the endpoint 'http://localhost:8080/api/v1/postJson'

The user can provide a JSON Data Stream in the above format and receive a CSV file in the format required in the tests

# TO install:

npm install

# To run the server at localhost:8080

npm start

# To get the CSV for the standard file

http://localhost:8080/api/v1/getCsv

# Swagger will be accessible (still under development)

http://localhost:8080/api-docs/

# You will need a front-end or an API-runner like postman/insomnia to run the post method