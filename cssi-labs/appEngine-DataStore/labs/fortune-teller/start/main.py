#!/usr/bin/python
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import os
import random
import jinja2
from google.appengine.api import urlfetch
import urllib
import json

KEY = 'AIzaSyDOSZVsXH2-oE0xVsXreZluHG_LMilLpe8'
URL = "https://www.googleapis.com/customsearch/v1?"
CX = '011134681791985263751:f3xi8cytcc8'

class SimpleURLFetcher(webapp2.RequestHandler):
    def get(self):
        query = "cat"
        query_params = {'key': KEY, 'cx': CX, 'q' : query}
        result = urlfetch.fetch(URL + urllib.urlencode(query_params))
        if result.status_code == 200:
            self.response.write(result.status_code)
            self.response.write(result.content)
        else:
            self.response.status_code = result.status_code


def get_fortune():
    #add a list of fortunes to the empty fortune_list arrayd
    fortune_list=['A cynic is only a frustrated optimist.', 'He who throws dirt loses ground.', 'If you look back, you\'ll soon be going that way.']
    #use the random library to return a random element from the array
    random_fortune = fortune_list[random.randint(0,2)]
    return(random_fortune)

#remember, you can get this by searching for jinja2 google app engine
#jinja_current_directory = "insert jinja2 environment variable here"

jinja_current_directory = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)


class FortuneHandler(webapp2.RequestHandler):
    def get(self):

        # In part 2, instead of returning this string,en
        # make a function call that returns a random fortune.en
        #self.response.write(fortune)
        results_template = jinja_current_directory.get_template('templates/fortune-start.html')
        #results_dic = {'fortune':fortune}
        self.response.write(results_template.render())
    def post(self):
        fortune = get_fortune()
        user_astro_sign = self.request.get("user_astrological_sign")
        my_dic = {'fortune': fortune, 'userSign': user_astro_sign}
        end_template = jinja_current_directory.get_template('templates/fortune-results.html')
        self.response.write(end_template.render(my_dic))



    #add a post method
    #def post(self):

class HelloHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('Hello World. Welcome to the root route of my app')

class GoodbyeHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write("My response is Goodbye world")
#the route mapping
app = webapp2.WSGIApplication([
    #this line routes the main url ('/')  - also know as
    #the root route - to the Fortune Handler
    ('/', HelloHandler),
    ('/predict', FortuneHandler),
    ("/farewell", GoodbyeHandler) ,
    ("/simple", SimpleURLFetcher) #maps '/predict' to the FortuneHandler
], debug=True)
