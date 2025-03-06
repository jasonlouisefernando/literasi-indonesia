document.addEventListener('DOMContentLoaded', () => {
    const correctAnswers = {
        q1: 'a', // 359 poin
        q2: 'b', // Keterbatasan akses terhadap bahan bacaan
        q3: 'd', // 85%
        q4: 'b', // Melemahkan kemampuan berpikir kritis
        q5: 'b', // Menghambat produktivitas kerja
        q6: 'b', // Menghambat kemampuan adaptasi terhadap perkembangan teknologi
        q7: 'a', // Tingkat literasi yang rendah
        q8: 'b', // Meningkatkan akses bahan bacaan yang lebih merata
        q9: 'b', // Kampanye literasi
        q10: 'a' // Penyediaan akses bahan bacaan yang lebih merata
    };

    function submitQuiz() {
        const form = document.getElementById('quiz-form');
        let score = 0;

        for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
            const selectedOption = form.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption && selectedOption.value === correctAnswer) {
                score++;
            }
        }

        localStorage.setItem('quizScore', score);
        window.location.href = 'hasil.html';
    }

    document.querySelector('.submit-button').addEventListener('click', submitQuiz);
});
