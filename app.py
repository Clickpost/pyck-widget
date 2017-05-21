from bottle import route, run, static_file, template, request


@route('/')
def index():
    param_value = request.query.param_name
    print (param_value)
    return template('templates/index.html')


@route('/main')
def main_js():
    return static_file('main.js', root='static/')


@route('/jquery')
def down_arrow():
    return static_file('jquery-3.1.1.slim.min.js', root='static/')

if __name__ == '__main__':
    run(host='0.0.0.0', port=8090, server='waitress')