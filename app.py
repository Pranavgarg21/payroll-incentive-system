from flask import Flask, request, jsonify
from flask_cors import CORS
from category_incentive_logic import calculate_incentive_by_category

app = Flask(__name__)
CORS(app)

@app.route('/calculate/<category>', methods=['POST'])
def calculate_incentive(category):
    try:
        data = request.get_json()
        result = calculate_incentive_by_category(category, data)
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
