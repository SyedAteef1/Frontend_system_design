# Frontend  system design | Browser and communication techniques

https://youtu.be/M2RpzmyKfvQ?si=PKaCQl6TP5RVjvGl

So it will teach you

**Graphql**

**Rest api.** etc… 

---

## Basics

Html,Css {render blocking,cssOM} and Js {parser blocking DOM}

---

## **Network Protocol**

8 network protocols:{HTTP,HTTP3,HTTPS,WEB SOCKETS,UDP,SMTP,TCP,FTP}

---

## **HTTP STATUS CODE**

1XX{informational codes},2XX{Success codes},3XX{Redirection codes},4XX{Client error codes},5XX{Server error codes}

---

## **REST API’s**{Representational state transfer)

Only the type changes but the Routes will be same

- Get{ Retrieve Data from a Server}

`⇒ Endpoint: https://www.ateef.dev/api/services`

`⇒ Method:GET`

`⇒Body:None`

`⇒Query PARAMS:Optional as per need`

- Post{Send data to the server to create a new resource}

`⇒ Endpoint: https://www.ateef.dev/api/services`

`⇒ Method:Post`

`⇒Body:Yes`

`⇒Query PARAMS:Optional as per need`

- Put{Update a specific resource}  (remember to content-type should be application/json—-map)

 `⇒ Endpoint: https://www.ateef.dev/api/services`

`⇒ Method:Put`

`⇒Body:Yes`

`⇒Query PARAMS:Optional as per need`

- Delete{Delete specific resource using params}(same as put but we have created a array with the existing array)

 `⇒ Endpoint: https://www.ateef.dev/api/services`

`⇒ Method:Delete`

`⇒Body:No`

`⇒Query PARAMS:Optional as per need`

- Patch{Updates a specific Part of the Object }(Here we have used Find Function)

 `⇒ Endpoint: https://www.ateef.dev/api/services`

`⇒ Method:Patch`

`⇒Body:No`

`⇒Query PARAMS:Optional as per need`