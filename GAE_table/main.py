import webapp2

class MainPage(webapp2.RequestHandler):

    def get(self):

        self.response.write("<html><body>")

        for i in range(1,11):

            self.response.write(
                "5 x {} = {}<br>".format(i, 5*i)
            )

        self.response.write("</body></html>")


app = webapp2.WSGIApplication([
    ('/', MainPage)
], debug=True)