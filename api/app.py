from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
  return jsonify({"message": "Welcome to the API"})

@app.route('/api/hello')
def hello():
  name = request.args.get('name', 'World')
  return jsonify({"message": f"Hello, {name}!"})

if __name__ == '__main__':
  app.run(debug=True)