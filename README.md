# CS-OSU
OSU CS Projects
Group project for CS 361 Software Engineering 1

To progrommatically REQUEST data from my microservice you have to connect to the same URL and PORT. Right now it is at http://127.0.0.1:8000 You can make a call to request the data in any language using an HTTP GET request. 

To RECEIVE data you receive it as a byte and have to decode it as a sting to use it or log it for example. 

Here is an example in python using the module urllib.request

import urllib.request # import the module
contents = urllib.request.urlopen("http://127.0.0.1:8000").read() # send the GET request and get the data
print(contents.decode()) # decode the data from byte to sting and print


