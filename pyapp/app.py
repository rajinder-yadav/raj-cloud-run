import os

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    target = os.environ.get('TARGET', 'World')
    return 'Hello {}!\n'.format(target)

@app.route('/message')
def message():
  return "Sony Corp.'s (sne) subsidiary Sony Pictures Entertainment has acquired a minority stake in AT&T Inc.'s (t) Game Show Network LLC and now owns the game programming network. Before the deal, Sony Pictures owned a 58% stake in Game Show Network, and AT&T owned the remaining 42%. In connection with the transaction, AT&T received approximately $500 million, including proceeds for its equity stake valued at $380 million and dividends of about $130 million, the companies said in a press release."

print(__name__)

if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0',port=int(os.environ.get('PORT', 8080)))

