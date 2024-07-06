from flask import Flask, render_template
import pathlib
app = Flask(__name__)

py_path = pathlib.Path(__file__).parent.resolve()



@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

if __name__ == "__main__":
    # Start the Flask server
    app.run(debug=True, threaded=True, host='0.0.0.0',port=5000)