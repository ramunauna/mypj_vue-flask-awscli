from flask import Flask, render_template

app = Flask(
    __name__,
    static_folder = '../frontend/dist/static',
    template_folder = '../frontend/dist'
)

app.config.from_object(__name__)

@app.route('/', defaults={'path':''})
@app.route('/<path:path>')
def catch(path):
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)