from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/google-auth', methods=['POST'])
def google_auth():
    id_token = request.json.get('id_token')
    
    # Validate the Google token with Google's API
    response = requests.post('https://www.googleapis.com/oauth2/v3/tokeninfo', params={'id_token': id_token})
    token_info = response.json()

    if 'sub' in token_info:
        # User is authenticated, you can now register or log in the user
        # You may use a database to store user information
        
        # Example response
        response_data = {'message': 'Google sign-in successful'}
        return jsonify(response_data), 200
    else:
        response_data = {'message': 'Google sign-in failed'}
        return jsonify(response_data), 401

if __name__ == '__main__':
    app.run(debug=True)
