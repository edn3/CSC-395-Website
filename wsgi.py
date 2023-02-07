from flask import Flask, redirect, url_for, render_template
app = Flask(__name__, static_folder='static')

@app.route('/')
def home():
    return render_template('home.html', title = "Home")

@app.route('/about/')
def about():
    return render_template('about.html', title = "About")

@app.route('/test-page/')
def test():
    return render_template('test-page.html') 

@app.route('/static/<path:filename>')
def custom_static(filename):
    return send_from_directory(app.static_folder, filename)
    
#return app.send_static_file('serviceWorker.js')

# Main function (NOT IN USE CURRENTLY)
# if __name__ == '__main__':
  #  app.run() # Flask function to run on local dev server
    
# WSGI application for production
def application(environ, start_response):
    return app(environ, start_response)