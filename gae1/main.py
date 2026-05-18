import webapp2

class MainPage(webapp2.RequestHandler):

    def get(self):

        name = "Sonali Priya"
        seat_no = "123"
        department = "Information Technology"

        self.response.write("<html><body>")

        for i in range(5):

            self.response.write(
                "Name: {} | Seat No: {} | Department: {}<br>".format(
                    name, seat_no, department
                )
            )

        self.response.write("</body></html>")


app = webapp2.WSGIApplication([
    ('/', MainPage)
], debug=True)