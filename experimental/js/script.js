// CrazyCook - JavaScript Experimental Features
// This file contains advanced JS features - for learning purposes

document.addEventListener('DOMContentLoaded', () => {
    loadRecipes();
    initForms();
});

// Load recipes from JSON
async function loadRecipes() {
    const container = document.getElementById('recipes-container');
    if (!container) return;

    try {
        const response = await fetch('../assets/data/recipes.json');
        const data = await response.json();
        const recipes = data.recipes;

        const categoryFilter = document.getElementById('category-filter');
        const difficultyFilter = document.getElementById('difficulty-filter');

        function renderRecipes(recipesToRender) {
            if (recipesToRender.length === 0) {
                container.innerHTML = '<div class="loading">Aucune recette trouvée</div>';
                return;
            }

            container.innerHTML = recipesToRender.map(recipe => `
                <article class="recipe-card" data-category="${recipe.category}" data-difficulty="${recipe.difficulty}">
                    <div class="recipe-image">
                        <img src="${recipe.image}" alt="${recipe.title}">
                    </div>
                    <div class="recipe-content">
                        <h3>${recipe.title}</h3>
                        <p>${recipe.description}</p>
                        <div class="recipe-meta">
                            <span class="recipe-time">⏱ ${recipe.time}</span>
                            <span class="recipe-difficulty">${recipe.difficulty}</span>
                        </div>
                    </div>
                </article>
            `).join('');
        }

        renderRecipes(recipes);

        function filterRecipes() {
            const category = categoryFilter?.value || '';
            const difficulty = difficultyFilter?.value || '';

            const filtered = recipes.filter(recipe => {
                const matchCategory = !category || recipe.category === category;
                const matchDifficulty = !difficulty || recipe.difficulty === difficulty;
                return matchCategory && matchDifficulty;
            });

            renderRecipes(filtered);
        }

        categoryFilter?.addEventListener('change', filterRecipes);
        difficultyFilter?.addEventListener('change', filterRecipes);

        const searchParams = new URLSearchParams(window.location.search);
        const searchQuery = searchParams.get('q');
        if (searchQuery) {
            const searchFiltered = recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
            renderRecipes(searchFiltered);
        }

    } catch (error) {
        container.innerHTML = '<div class="loading">Erreur lors du chargement des recettes</div>';
        console.error('Error loading recipes:', error);
    }
}

// Form validation
function initForms() {
    const signupForm = document.querySelector('form[action*="signup"]');
    if (signupForm) {
        signupForm.addEventListener('submit', validateSignup);
    }

    const loginForm = document.querySelector('form[action*="login"]');
    if (loginForm) {
        loginForm.addEventListener('submit', validateLogin);
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message envoyé ! Nous vous répondrons bientôt.');
            contactForm.reset();
        });
    }
}

function validateSignup(e) {
    e.preventDefault();

    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('password-confirm');
    const email = document.getElementById('email');

    let errors = [];

    if (password.value.length < 8) {
        errors.push('Le mot de passe doit contenir au moins 8 caractères');
    }

    if (password.value !== passwordConfirm.value) {
        errors.push('Les mots de passe ne correspondent pas');
    }

    if (!email.value.includes('@')) {
        errors.push('Veuillez entrer une adresse email valide');
    }

    if (errors.length > 0) {
        alert('Erreurs:\n' + errors.join('\n'));
        return;
    }

    alert('Compte créé avec succès !');
    e.target.submit();
}

function validateLogin(e) {
    e.preventDefault();

    const email = document.querySelector('input[type="email"]') || document.getElementById('email');
    const password = document.querySelector('input[type="password"]');

    if (!email.value || !password.value) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    alert('Connexion réussie !');
    e.target.submit();
}