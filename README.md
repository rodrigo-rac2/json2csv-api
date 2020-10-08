# This is an API to conver JSON 2 CSV for the LawnStarter JSON Format

Sample format can be found at file:

/api/data/standardJSON.json

# This project adds the endpoint 'postJson'

The user can provide a JSON Data Stream in the above format and receive a CSV file in the format required in the tests

# TO install:

npm install

# To run the server at localhost:8080

npm start

# To get the CSV for the standard file

http://localhost:8080/api/v1/getCsv

# You will need postman or a UI to run the post method