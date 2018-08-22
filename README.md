Google API test on Ionic 
==

### Install dependencies:
```bash
$ npm i
```

### Use AccessToken to authenticate the Google REST API
#####Add authorization header:

```bash
Authorization:  Bearer 'ACCESS_TOKEN'
```

### For Example, get Messages (Gmail):
```bash
HTTP/1.1 GET https://content.googleapis.com/gmail/v1/users/{EMAIL}/messages
Authorization: Bearer 'ACCESS_TOKEN'
x-referer: http://localhost
Origin: http://localhost:8080
```
<font color="red">**IMPORTANT:** calls must be from the server, because we did not implement the OPTIONS method in Google Api Rest</font>



 
