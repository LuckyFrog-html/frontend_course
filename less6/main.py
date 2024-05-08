from flask import Flask, request, redirect
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

feedbacks = []
required_fields = ["name", "phone", "email", "message"]


@app.route("/feedback")
def get_feedbacks():
    return feedbacks


@app.route("/feedback", methods=["POST"])
def post_feedback():
    feedbacks.append(request.json)
    return {"status": "success"}


if __name__ == "__main__":
    app.run()
