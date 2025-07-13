from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json
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

@app.route('/calculate', methods=['POST'])
def unified_calculate():
    try:
        req = request.get_json()
        category = req.get("category")
        employee_id = req.get("employeeId")
        location = req.get("location")
        outer_data = req.get("data", {})
        month = req.get("month", "")

        # 🔄 Inject month into data if not already present
        if isinstance(outer_data, dict) and 'month' not in outer_data:
            outer_data['month'] = month

        # ✅ Inject additional useful fields
        outer_data['employeeId'] = employee_id
        outer_data['location'] = location

        result = calculate_incentive_by_category(category, outer_data)
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/save', methods=['POST'])
def save_data():
    try:
        req = request.get_json()
        location = req.get("location")
        category = req.get("category")
        employee_id = req.get("employeeId")
        employee_name = req.get("employeeName", "")  # ✅ Accept employeeName from frontend
        data = req.get("data", {})

        os.makedirs("data", exist_ok=True)
        file_path = f"data/{location}.json"

        # Load existing data
        if os.path.exists(file_path):
            with open(file_path, "r") as f:
                existing_data = json.load(f)
        else:
            existing_data = []

        # Add new entry
        entry = {
            "employeeId": employee_id,
            "employeeName": employee_name,  # ✅ Save employee name
            "category": category,
            "data": data
        }
        existing_data.append(entry)

        # Save updated data
        with open(file_path, "w") as f:
            json.dump(existing_data, f, indent=2)

        return jsonify({"status": "success", "file": file_path})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/view/<location>', methods=['GET'])
def view_data(location):
    try:
        file_path = f"data/{location}.json"
        if not os.path.exists(file_path):
            return jsonify([])

        with open(file_path, "r") as f:
            data = json.load(f)
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)
