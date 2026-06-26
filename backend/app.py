
from flask import Flask
import mysql.connector

app = Flask(__name__)

@app.route("/")
def home():
    return "✅ Python Backend Running!"

@app.route("/db")
def db():
    try:
        conn = mysql.connector.connect(
            host="mysql-service",
            user="root",
            password="root",
            database="mydb"
        )
        return "✅ Connected to MySQL"
    except:
        return "❌ DB connection failed"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
``
