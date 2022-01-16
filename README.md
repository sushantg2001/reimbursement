# OSA IIITD

# FRONTEND:
To run frontend:
1. ```cd reimbursement-frontend```
2. ```npm install```
3. ```npm start```


# BACKEND:
## Authentication:

    1. username = test_user, password = common123
    2. /login/ `POST`
    3. response :
        {
            "token": "fasdasfd",
            "user_id": 2,
            "username": "test_user"
        }
    4. store token for requests
    5. Header
        Authorization : Bearer <token>
    6. example in curl
        curl -X GET \
        'https://reimbursement-app.herokuapp.com/club_api' \
        -H 'Authorization: Bearer 00eb7b72eb9f36375d0ed9b3635b669b00a5c983'

## Reimbursement API

### GET all reimbursements of user

    1.  Header
        Authorization : Bearer <token>
        - For user you will only get there reimbursements
        - For admin user you will get all reimbursements
    2. GET /reimbursement_api/
    3. response
    [
        {
            "id": 1,
            "name": "Test reimbursement 1",
            "purpose": "Test reimbursement 1",
            "amount": 100,
            "description": "",
            "date": "2021-12-26T18:41:43.375934Z",
            "status": "Pending",
            "user": 3,
            "club": null
        },
        {
            "id": 2,
            "name": "Test reimbursement 2",
            "purpose": "Test reimbursement 2",
            "amount": 1000,
            "description": "",
            "date": "2021-12-26T18:43:23.275390Z",
            "status": "Pending",
            "user": 3,
            "club": null
        }
    ]

### GET for a particular reimbursement

    1.  Header
        Authorization : Bearer <token>
        - If the reimbursement does not belong to the user error will arise
        - For admin user you user there are no such restrictions
    2. GET /reimbursement_api/1
    3. response
        {
            "id": 5,
            "date": "12/27/2021",
            "request": {
                "id": 15,
                "status": "pending"
            },
            "name": "Test reimbursement 4",
            "purpose": "Test reimbursement 4",
            "amount": 42300,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue. Urna condimentum mattis pellentesque id nibh. Vel risus commodo viverra maecenas accumsan lacus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.",
            "date_time": "2021-12-27T12:39:21.197061Z",
            "user": 3,
            "club": null
        }
    4. example
        let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.io)",
        "Authorization": "Bearer 4ce0e3fffd0f4d95be9eabe215067938b6423fe7"
        }

        let reqOptions = {
        url: "http://localhost:8002/reimbursement_api/5",
        method: "GET",
        headers: headersList,
        }

        axios.request(reqOptions).then(function (response) {
        console.log(response.data);
        })

### Add a reimbursement

    1.  Header
        Authorization : Bearer <token>
    2. POST /reimbursement_api/1
        {
            "name": "Test reimbursement 4",
            "purpose": "Test reimbursement 4",
            "amount": 42300,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue. Urna condimentum mattis pellentesque id nibh. Vel risus commodo viverra maecenas accumsan lacus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.",
            "club": null
        }
    3. Name, purpose, amount, and if club reimbursement then ID are necessary
    4. Example
        import axios from "axios";

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 663fb13536b7f8f54aae90d6f2172b4ea74a155a"
        }

        let formdata = new FormData();
        formdata.append("name", "Test reimbursement 5");
        formdata.append("purpose", "Test reimbursement 5");
        formdata.append("amount", "500");
        formdata.append("club", "Test Club 2");

        let reqOptions = {
            url: "http://localhost:8002/reimbursement_api/",
            method: "POST",
            headers: headersList,
            data: formdata,
        }

axios.request(reqOptions).then(function (response) {
console.log(response.data);
})

### Approve/Reject Reimbursement

    1.  Header
        Authorization : Bearer <token> (ADMIN user only)
    2. PATCH /reimbursement_api/
        {
            "status": "Approved"
        }
    3. Response
        {
            "id": 1,
            "date": "12/27/2021",
            "request": {
                "id": 6,
                "status": "Approved"
            },
            "name": "Test reimbursement 1",
            "purpose": "Test reimbursement 1",
            "amount": 2430,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue. Urna condimentum mattis pellentesque id nibh. Vel risus commodo viverra maecenas accumsan lacus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus.",
            "date_time": "2021-12-27T11:54:54.045969Z",
            "user": 4,
            "club": null
        }

    4. Example in Curl

import axios from "axios";

let headersList = {
"Accept": "_/_",
"User-Agent": "Thunder Client (https://www.thunderclient.io)",
"Authorization": "Bearer 29d349518fbc601d0ff34485d9ee39b02c5f6292",
"Content-Type": "application/json"
}

let reqOptions = {
url: "http://localhost:8002/reimbursement_api/2/",
method: "PATCH",
headers: headersList,
data: "{\n \"status\":\"Approved\"\n}",
}

axios.request(reqOptions).then(function (response) {
console.log(response.data);
})

### Delete A Reimbursement

    1. DELETE /reimbursement_api/{ID}
    2. Example
        import axios from "axios";

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 94130bd304d167184d6edf9ba1596d5077f3c345"
        }

        let reqOptions = {
            url: "http://localhost:8002/reimbursement_api/31",
            method: "DELETE",
            headers: headersList,
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

## Club API

### GET all clubs

    1.  Header
        Authorization : Bearer <token> (Any)
    2. GET /club_api/
    3. Response
        [
            {
                "id": 4,
                "name": "Test Club 1",
                "budget": 10000,
                "description": "This is a test club."
            }
        ]

    4. For all other requests ADMIN access is required
    5.  Header
        Authorization : Bearer <token> (ADMIN only)

### Add a club

    3. POST /club_api/
        {
            "name": "Test Club 3",
            "budget": "8000",
            "description": "test description"
        }
    3. Response
        {
            "id": 3,
            "name": "Test Club 3",
            "budget": 15000,
            "description": "test description"
        }
    4. Example
        import axios from "axios";

        let headersList = {
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Accept": "*/*",
            "Authorization": "Bearer 94130bd304d167184d6edf9ba1596d5077f3c345",
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "http://localhost:8002/club_api/",
            method: "POST",
            headers: headersList,
            data: "{\n    \"name\": \"Test Club 4\",\n    \"budget\": \"1500\",\n    \"description\": \"test description\"\n}",
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

### Change Club details

    1. PATCH /club_ap1/3
        {
            "budget": 8000
        }
    2. Response
        {
            "id": 3,
            "name": "Test Club 3",
            "budget": 8000,
            "description": "test description"
        }
    3. Example
        import axios from "axios";

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 94130bd304d167184d6edf9ba1596d5077f3c345",
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "http://localhost:8002/club_api/3/",
            method: "PATCH",
            headers: headersList,
            data: "{\n    \"budget\": 8000\n}",
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

    4. PATCH /club_api/3
    {
        "name": "Test Club 3"
    }
    5. Response
    {
        "id": 3,
        "name": "Test Club 3",
        "budget": 8000,
        "description": "test description"
    }
    6. Example
        import axios from "axios";

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 94130bd304d167184d6edf9ba1596d5077f3c345",
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "http://localhost:8002/club_api/3/",
            method: "PATCH",
            headers: headersList,
            data: "{\n    \"name\": \"Test Club 3\"\n}",
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

### DELETE a club

    1. DELETE /club_api/
    2. Example
        import axios from "axios";

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 94130bd304d167184d6edf9ba1596d5077f3c345"
        }

        let reqOptions = {
            url: "http://localhost:8002/club_api/4",
            method: "DELETE",
            headers: headersList,
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

## Types API

### GET all types

    1.  Header
        Authorization : Bearer <token>
    2. GET /type_api/
    3. Response
        [
            {
                "data": "Club"
            },
            {
                "data": "Faculty"
            },
            {
                "data": "Student"
            }
        ]
    4. Example
        import axios from "axios";

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 94130bd304d167184d6edf9ba1596d5077f3c345"
        }

        let reqOptions = {
            url: "http://localhost:8002/type_api/",
            method: "GET",
            headers: headersList,
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

    5. For all other requests ADMIN access is necessary
    6.  Header
        Authorization : Bearer <token> (ADMIN only)

### ADD type

    3. POST /type_api/
        {
            "data": "TA"
        }
    4. Response
        {
            "id": 4,
            "data": "TA"
        }
    5. Example
        import axios from "axios";

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 94130bd304d167184d6edf9ba1596d5077f3c345",
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "http://localhost:8002/type_api/",
            method: "POST",
            headers: headersList,
            data: "{\n    \"data\": \"TA\"\n}",
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

### DELETE type

    1. DELETE /type_api/{type_name}
    2. Example
        import axios from "axios";

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 94130bd304d167184d6edf9ba1596d5077f3c345"
        }

        let reqOptions = {
            url: "http://localhost:8002/type_api/TA",
            method: "DELETE",
            headers: headersList,
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

### PATCH a type

    1. PATCH /type_api/{type_name}
    2. Example
        import axios from "axios";

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 94130bd304d167184d6edf9ba1596d5077f3c345",
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "http://localhost:8002/type_api/Student/",
            method: "PATCH",
            headers: headersList,
            data: "{\n    \"data\": \"Student\"\n}",
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

## User API

### GET users

    1.  Header
        Authorization : Bearer <token>
        - If ADMIN user sends request then list of all users
        - If normal user sends request then only that
    3. Example
        import axios from "axios";

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 29d349518fbc601d0ff34485d9ee39b02c5f6292",
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "http://localhost:8002/user_api/",
            method: "GET",
            headers: headersList,
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

## Club Request API

## POST a new type request

    1.  Header
        Authorization : Bearer <token>
    2. POST /club_request_api/
    3. Example
        import axios from "axios";

        let headersList = {
            "Accept": "_/_",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 4c7089462736b9b2145ea64c4e7f937f0b3ec29d",
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "http://localhost:8002/club_request_api/",
            method: "POST",
            headers: headersList,
            data: "{\n \"club\": \"Club 2\",\n \"description\": \"\",\n \"purpose\": \"purpose\"\n}",
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

### POST a new club request

    1. Header
        Authorization: Bearer <token>
    2. POST /type_request_api/
    3. Example

        import axios from "axios";

        let headersList = {
            "Accept": "_/_",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 4c7089462736b9b2145ea64c4e7f937f0b3ec29d",
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "http://localhost:8002/type_request_api/",
            method: "POST",
            headers: headersList,
            data: "{\n \"type\": \"Club\",\n \"description\": \"\",\n \"purpose\": \"purpose\"\n}",
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

### Approve a club request

    1. Header
        Authorization: Bearer <token>
    2. /club_request_api/
        {
            "status":"Approved"
        }
    3. Example
        import axios from "axios";

        let headersList = {
            "Accept": "_/_",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 29d349518fbc601d0ff34485d9ee39b02c5f6292",
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "http://localhost:8002/club_request_api/2/",
            method: "PATCH",
            headers: headersList,
            data: "{\n \"status\":\"Approved\"\n}",
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

## Type request API

### New type request

    1. Header
        Authorization: Bearer <Token>
    2. /type_request_api/
        {
            "status":"Approved"
        }
    3. Example
        import axios from "axios";

        let headersList = {
            "Accept": "_/_",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 4c7089462736b9b2145ea64c4e7f937f0b3ec29d",
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "http://localhost:8002/type_request_api/",
            method: "POST",
            headers: headersList,
            data: "{\n \"type\": \"TA\",\n \"description\": \"\",\n \"purpose\": \"purpose\"\n}",
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

### Approving a request

    1. Header
        Authentication: Bearer <Token>
    2. PATCH /type_request_api/
    3. Example
        import axios from "axios";

        let headersList = {
            "Accept": "_/_",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 29d349518fbc601d0ff34485d9ee39b02c5f6292",
            "Content-Type": "application/json"
        }

        let reqOptions = {
            url: "http://localhost:8002/type_request_api/5/",
            method: "PATCH",
            headers: headersList,
            data: "{\n \"status\":\"Approved\"\n}",
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

## GET all the requests
    1. Example
        import axios from "axios";

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.io)",
            "Authorization": "Bearer 29d349518fbc601d0ff34485d9ee39b02c5f6292"
        }

        let reqOptions = {
            url: "http://localhost:8002/get_requests/",
            method: "GET",
            headers: headersList,
        }

        axios.request(reqOptions).then(function (response) {
            console.log(response.data);
        })

### To-Do

-   [x] Complete README
-   [x] Capitalize statuses
-   [x] Mails
-   [ ] Integrate cookies for auth
-   [x] File sending through API request
-   [x] Club Access Request
-   [ ] Host on reimbursement.iiitd.osa.edu
