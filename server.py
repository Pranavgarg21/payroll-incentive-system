from flask import Flask, request, jsonify
import os
import json

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    req = request.get_json()
    category = req.get("category")
    data = req.get("data", {})

    # Sample incentive logic based on category
    if category == "technician_atholi":
        total = (
            int(data.get("labour", 0)) * 20 +
            int(data.get("freeServices", 0)) * 10 +
            int(data.get("pdi", 0)) * 10 +
            int(data.get("fittings", 0)) * 15
        )
        return jsonify({
            "labourIncentive": total,
            "serviceIncentive": total,
            "salary": int(data.get("baseSalary", 0)),
            "advance": int(data.get("advance", 0)),
            "overtimePay": int(data.get("overtimeHours", 0)) * 50,
            "holidayBonus": 1000,
            "totalIncentive": total + 1000
        })

    if category == "sales_exec_atholi":
        count = int(data.get("bikeCount", 0))
        tsy_bonus = 2000 if data.get("tsyTargetAchieved") else 0
        base = count * 300
        return jsonify({
            "retailIncentive": base,
            "salary": int(data.get("baseSalary", 0)),
            "advance": int(data.get("advance", 0)),
            "overtimePay": int(data.get("overtimeHours", 0)) * 50,
            "holidayBonus": 1000,
            "totalIncentive": base + tsy_bonus + 1000
        })

    return jsonify({"error": "Invalid category"}), 400

@app.route('/save', methods=['POST'])
def save():
    req = request.get_json()
    location = req.get("location")
    category = req.get("category")
    employeeId = req.get("employeeId")
    data = req.get("data")

    os.makedirs(f"data/{location}", exist_ok=True)
    filepath = f"data/{location}/{category}__{employeeId}.json"

    with open(filepath, "w") as f:
        json.dump(data, f, indent=2)

    return jsonify({"status": "saved", "path": filepath})

if __name__ == '__main__':
    app.run(debug=True)
