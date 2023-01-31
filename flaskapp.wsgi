from flask import Flask, redirect, url_for, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', title = "Home")

@app.route('/about/')
def about():
    return render_template('about.html', title = "About")

@app.route('/test-page/')
def test():
    return render_template('test-page.html') 
    
#return app.send_static_file('serviceWorker.js')

# Main function
if __name__ == '__main__':
    # app.run() # Flask function to run on local dev server
    app.run(debug=False, host='0.0.0.0')