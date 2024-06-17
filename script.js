const ratingForm = document.getElementById('rating-form');
const resultsContainer = document.getElementById('results');
const healthResult = document.getElementById('health-result');
const financesResult = document.getElementById('finances-result');
const familyResult = document.getElementById('family-result');
const relationshipsResult = document.getElementById('relationships-result');
const careerResult = document.getElementById('career-result');
const self_developmentResult = document.getElementById('self_development-result');
const spiritual_developmentResult = document.getElementById('spiritual_development-result');
const relaxationResult = document.getElementById('relaxation-result');

ratingForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const healthRating = parseInt(document.getElementById('health').value);
    const financesRating = parseInt(document.getElementById('finances').value);
    const familyRating = parseInt(document.getElementById('family').value);
	const relationshipsRating = parseInt(document.getElementById('relationships').value);
	const careerRating = parseInt(document.getElementById('career').value);
	const spiritual_developmentRating = parseInt(document.getElementById('spiritual_development').value);
	const self_developmentRating = parseInt(document.getElementById('self_development').value);
	const relaxationRating = parseInt(document.getElementById('relaxation').value);
	
    healthResult.textContent = healthRating;
    financesResult.textContent = financesRating;
    familyResult.textContent = familyRating;
    relationshipsResult.textContent = relationshipsRating;
	careerResult.textContent = careerRating;
	self_developmentResult.textContent = self_developmentRating;
	spiritual_developmentResult.textContent = spiritual_developmentRating;
	relaxationResult.textContent =relaxationRating;
    resultsContainer.style.display = 'block';
});
