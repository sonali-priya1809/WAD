import webapp2

class MainPage(webapp2.RequestHandler):

    def get(self):

        self.response.write("<html><body>")

        for i in range(1,11):
            self.response.write("" \
            "10 X {} = {}<br>".format(i, 10 * i))

            self.response.write("</body></html>")
app = webapp2.WSGIApplication([
    ('/', MainPage)
], debug=True)