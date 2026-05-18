import webapp2

class MainPage(webapp2.RequestHandler):

    def get(self):
        self.response.write("<html><body>")

        self.response.write("<h1>Fibonacci Series of 8 elements</h1>")

        a = 0
        b = 1

        for i in range(8):

            self.response.write("{}<br>".format(a))

            c = a + b
            a = b
            b = c
        self.response.write("</body></html>")

app = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)