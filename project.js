document.addEventListener('DOMContentLoaded', () => {
    const workouts = [
        { name: "Push Workout", description: "Chest, Shoulders, and Triceps." },
        { name: "Pull Workout", description: "Back and Biceps." },
        { name: "Leg Day", description: "Quads, Hamstrings, and Calves." },
    ];

    const workoutList = document.getElementById('workout-list');
    workouts.forEach(workout => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${workout.name}</h3><p>${workout.description}</p>`;
        workoutList.appendChild(div);
    });
});
