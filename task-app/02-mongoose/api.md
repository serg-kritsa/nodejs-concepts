books api

create
    >>> POST /books HTTP/1.1
    Accept: apliction/json
    Connection: Keep-alive
    Authorization: Bearer zzz

    body as json
    <<< HTTP/1.1 201 Created
    Date: 
    Server: Express
    Content-Type: application/json

    response from mongodb as json 
read
    GET /books <<< 200
    GET /books/:id <<< 200
update
    PATCH /books/:id
delete
    DELETE /books/:id

https://app.getpostman.com/app/download/win64
    Collections
        Requests

