from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://username:password@localhost/dbname' # Replace with your MySQL details
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    dob = db.Column(db.Date, nullable=False)
    college = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    register_number = db.Column(db.String(20), nullable=False)
    college_id_photo = db.Column(db.String(255), nullable=False)

@app.route('/')
def index():
    return render_template('signup.html')

@app.route('/signup', methods=['POST'])
def signup():
    if request.method == 'POST':
        name = request.form['name']
        dob = request.form['dob']
        college = request.form['college']
        email = request.form['email']
        password = request.form['password']
        register_number = request.form['register-number']
        college_id_photo = request.form['college-id-photo']  # You should handle file upload properly
        
        new_user = User(name=name, dob=dob, college=college, email=email, password=password,
                        register_number=register_number, college_id_photo=college_id_photo)
        db.session.add(new_user)
        db.session.commit()
        
        return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
