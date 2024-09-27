from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/workout_plan/<int:experience>', methods=['GET'])
def get_workout_plan(experience):
    if experience == 1:
        return jsonify({"plan": "Beginner Workout Plan: 3 days a week"})
    elif experience == 2:
        return jsonify({"plan": "Intermediate Workout Plan: 5 days a week"})
    else:
        return jsonify({"plan": "Advanced Workout Plan: 6 days a week"})

if __name__ == '__main__':
    app.run(debug=True)
