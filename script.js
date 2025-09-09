// Daily Challenge Website JavaScript

// Challenge data
const challenges = {
    'self-care': [
        { text: "Take a 10-minute walk outside and notice three things you've never seen before", difficulty: "easy" },
        { text: "Write down three things you're grateful for today", difficulty: "easy" },
        { text: "Spend 15 minutes doing something creative (drawing, writing, crafting)", difficulty: "medium" },
        { text: "Practice 10 minutes of meditation or deep breathing", difficulty: "medium" },
        { text: "Try a new healthy recipe for one meal today", difficulty: "medium" },
        { text: "Write a letter to your future self", difficulty: "hard" },
        { text: "Take a digital detox for 2 hours", difficulty: "hard" },
        { text: "Learn a new skill for 30 minutes", difficulty: "hard" },
        { text: "Take a relaxing bath with essential oils or bath salts", difficulty: "easy" },
        { text: "Organize one small area of your living space", difficulty: "easy" },
        { text: "Read a book for 30 minutes", difficulty: "easy" },
        { text: "Listen to a podcast or audiobook while doing a mundane task", difficulty: "easy" },
        { text: "Try a new skincare routine", difficulty: "medium" },
        { text: "Journal about your day and how you felt", difficulty: "medium" },
        { text: "Practice positive affirmations in the mirror", difficulty: "medium" },
        { text: "Take a nap or rest for 20 minutes", difficulty: "easy" },
        { text: "Declutter your phone by deleting unused apps", difficulty: "easy" },
        { text: "Try a new type of tea or coffee", difficulty: "easy" },
        { text: "Do a 5-minute stretching routine", difficulty: "easy" },
        { text: "Write down your goals for the next month", difficulty: "medium" },
        { text: "Practice mindful eating for one meal", difficulty: "medium" },
        { text: "Create a morning or evening routine", difficulty: "medium" },
        { text: "Try a new form of self-expression", difficulty: "hard" },
        { text: "Confront a fear or anxiety you've been avoiding", difficulty: "hard" },
        { text: "Spend a day without social media", difficulty: "hard" },
        { text: "Learn about a topic that interests you for 1 hour", difficulty: "medium" },
        { text: "Practice saying 'no' to something you don't want to do", difficulty: "medium" },
        { text: "Create a personal mission statement", difficulty: "hard" },
        { text: "Try a new form of therapy or counseling", difficulty: "hard" },
        { text: "Spend 30 minutes in complete silence", difficulty: "hard" }
    ],
    'social': [
        { text: "Call or text someone you haven't spoken to in a while", difficulty: "easy" },
        { text: "Compliment three people today", difficulty: "easy" },
        { text: "Strike up a conversation with a stranger", difficulty: "medium" },
        { text: "Plan a virtual hangout with friends or family", difficulty: "medium" },
        { text: "Join a new online community or group", difficulty: "medium" },
        { text: "Organize a small gathering or event", difficulty: "hard" },
        { text: "Volunteer for a cause you care about", difficulty: "hard" },
        { text: "Mend a broken relationship or apologize to someone", difficulty: "hard" },
        { text: "Send a thank you message to someone who helped you", difficulty: "easy" },
        { text: "Ask someone about their day and really listen", difficulty: "easy" },
        { text: "Share a funny meme or joke with a friend", difficulty: "easy" },
        { text: "Introduce two people who don't know each other", difficulty: "medium" },
        { text: "Host a game night or virtual game session", difficulty: "medium" },
        { text: "Join a club or group related to your interests", difficulty: "medium" },
        { text: "Attend a networking event or meetup", difficulty: "medium" },
        { text: "Reach out to an old friend you've lost touch with", difficulty: "easy" },
        { text: "Give someone a genuine compliment", difficulty: "easy" },
        { text: "Ask for help when you need it", difficulty: "medium" },
        { text: "Share something personal about yourself with someone", difficulty: "medium" },
        { text: "Practice active listening in all conversations today", difficulty: "medium" },
        { text: "Make someone laugh", difficulty: "easy" },
        { text: "Support someone's goal or dream", difficulty: "easy" },
        { text: "Have a deep conversation with someone", difficulty: "medium" },
        { text: "Practice empathy by trying to understand someone's perspective", difficulty: "medium" },
        { text: "Be vulnerable and share a struggle you're facing", difficulty: "hard" },
        { text: "Mentor someone or ask someone to mentor you", difficulty: "hard" },
        { text: "Resolve a conflict with someone", difficulty: "hard" },
        { text: "Speak up for someone who can't speak for themselves", difficulty: "hard" },
        { text: "Practice forgiveness with someone who hurt you", difficulty: "hard" },
        { text: "Create a support group for something you're passionate about", difficulty: "hard" }
    ],
    'outdoor': [
        { text: "Take a 20-minute walk in a park or nature area", difficulty: "easy" },
        { text: "Have a picnic lunch outside", difficulty: "easy" },
        { text: "Go for a bike ride around your neighborhood", difficulty: "medium" },
        { text: "Try a new outdoor activity (hiking, kayaking, etc.)", difficulty: "medium" },
        { text: "Watch the sunrise or sunset", difficulty: "medium" },
        { text: "Go camping for one night", difficulty: "hard" },
        { text: "Take a day trip to a place you've never been", difficulty: "hard" },
        { text: "Try an extreme outdoor sport", difficulty: "hard" },
        { text: "Sit outside and listen to nature sounds for 15 minutes", difficulty: "easy" },
        { text: "Go for a walk without your phone", difficulty: "easy" },
        { text: "Find a new walking route in your area", difficulty: "easy" },
        { text: "Take photos of interesting things you see outside", difficulty: "easy" },
        { text: "Have coffee or tea on your porch, balcony, or in a park", difficulty: "easy" },
        { text: "Go stargazing (even from your backyard)", difficulty: "easy" },
        { text: "Try geocaching in your area", difficulty: "medium" },
        { text: "Go for a swim in a natural body of water", difficulty: "medium" },
        { text: "Try bird watching", difficulty: "medium" },
        { text: "Go rock climbing or bouldering", difficulty: "medium" },
        { text: "Take a photography walk focusing on nature", difficulty: "medium" },
        { text: "Try outdoor yoga or meditation", difficulty: "medium" },
        { text: "Go for a run in a new location", difficulty: "medium" },
        { text: "Have a bonfire or fire pit gathering", difficulty: "medium" },
        { text: "Try fishing", difficulty: "medium" },
        { text: "Go on a multi-day hiking trip", difficulty: "hard" },
        { text: "Try mountain climbing or rock climbing", difficulty: "hard" },
        { text: "Go on a wilderness survival course", difficulty: "hard" },
        { text: "Try white water rafting or kayaking", difficulty: "hard" },
        { text: "Go on a backpacking adventure", difficulty: "hard" },
        { text: "Try skydiving or bungee jumping", difficulty: "hard" },
        { text: "Go on a multi-day camping trip", difficulty: "hard" },
        { text: "Try an outdoor adventure race", difficulty: "hard" }
    ],
    'fitness': [
        { text: "Do 20 push-ups or squats", difficulty: "easy" },
        { text: "Take the stairs instead of the elevator all day", difficulty: "easy" },
        { text: "Go for a 30-minute jog or run", difficulty: "medium" },
        { text: "Try a new workout routine or class", difficulty: "medium" },
        { text: "Do a 15-minute HIIT workout", difficulty: "medium" },
        { text: "Complete a 5K run or walk", difficulty: "hard" },
        { text: "Try a new sport you've never played", difficulty: "hard" },
        { text: "Complete a fitness challenge for a week", difficulty: "hard" },
        { text: "Do 10 minutes of stretching", difficulty: "easy" },
        { text: "Take a 15-minute walk during your lunch break", difficulty: "easy" },
        { text: "Do 50 jumping jacks", difficulty: "easy" },
        { text: "Hold a plank for 1 minute", difficulty: "easy" },
        { text: "Do 20 lunges", difficulty: "easy" },
        { text: "Take a dance break for 10 minutes", difficulty: "easy" },
        { text: "Do 30 seconds of wall sits", difficulty: "easy" },
        { text: "Go for a bike ride", difficulty: "medium" },
        { text: "Try a yoga class or online session", difficulty: "medium" },
        { text: "Do a 20-minute strength training workout", difficulty: "medium" },
        { text: "Try a new fitness app or workout video", difficulty: "medium" },
        { text: "Go swimming for 30 minutes", difficulty: "medium" },
        { text: "Do a 30-minute cardio session", difficulty: "medium" },
        { text: "Try a Pilates class", difficulty: "medium" },
        { text: "Do a full body workout", difficulty: "medium" },
        { text: "Try a martial arts class", difficulty: "medium" },
        { text: "Go for a long hike", difficulty: "medium" },
        { text: "Complete a 10K run or walk", difficulty: "hard" },
        { text: "Try CrossFit or similar high-intensity training", difficulty: "hard" },
        { text: "Complete a triathlon", difficulty: "hard" },
        { text: "Try powerlifting or Olympic lifting", difficulty: "hard" },
        { text: "Complete a marathon or half marathon", difficulty: "hard" },
        { text: "Try a new extreme sport", difficulty: "hard" },
        { text: "Complete a 30-day fitness challenge", difficulty: "hard" }
    ],
    'creative': [
        { text: "Draw or sketch something for 15 minutes", difficulty: "easy" },
        { text: "Write a short poem or story", difficulty: "easy" },
        { text: "Take 10 artistic photos with your phone", difficulty: "medium" },
        { text: "Learn to play a new song on an instrument", difficulty: "medium" },
        { text: "Create a vision board for your goals", difficulty: "medium" },
        { text: "Start a creative project and work on it for 2 hours", difficulty: "hard" },
        { text: "Learn a new art technique or craft", difficulty: "hard" },
        { text: "Create something to give as a gift", difficulty: "hard" },
        { text: "Write a haiku about your day", difficulty: "easy" },
        { text: "Doodle or color for 20 minutes", difficulty: "easy" },
        { text: "Take a creative photo using only natural light", difficulty: "easy" },
        { text: "Write a thank you note to someone", difficulty: "easy" },
        { text: "Create a playlist for a specific mood", difficulty: "easy" },
        { text: "Try a new recipe and make it look beautiful", difficulty: "easy" },
        { text: "Write a letter to your past self", difficulty: "easy" },
        { text: "Create a collage using magazine cutouts", difficulty: "medium" },
        { text: "Learn a new dance routine", difficulty: "medium" },
        { text: "Write and perform a short comedy routine", difficulty: "medium" },
        { text: "Create a stop-motion video", difficulty: "medium" },
        { text: "Design a logo or simple graphic", difficulty: "medium" },
        { text: "Write a song or rap", difficulty: "medium" },
        { text: "Create a short film or video", difficulty: "medium" },
        { text: "Try pottery or ceramics", difficulty: "medium" },
        { text: "Learn a new language and practice it creatively", difficulty: "medium" },
        { text: "Create a podcast episode", difficulty: "medium" },
        { text: "Write a short play or script", difficulty: "medium" },
        { text: "Create a piece of digital art", difficulty: "medium" },
        { text: "Learn to play a new instrument", difficulty: "hard" },
        { text: "Write and publish a blog post or article", difficulty: "hard" },
        { text: "Create a full art portfolio", difficulty: "hard" },
        { text: "Write a novel or book", difficulty: "hard" },
        { text: "Create a business or brand from scratch", difficulty: "hard" },
        { text: "Learn advanced photography techniques", difficulty: "hard" },
        { text: "Create a documentary or film", difficulty: "hard" },
        { text: "Master a complex art form", difficulty: "hard" },
        { text: "Create a mobile app or website", difficulty: "hard" }
    ]
};

// Global variables
let currentCategory = 'all';
let completedChallenges = [];
let currentChallenge = null;

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    
    // Load completed challenges from localStorage
    const saved = localStorage.getItem('completedChallenges');
    if (saved) {
        try {
            completedChallenges = JSON.parse(saved);
        } catch (e) {
            console.error('Error parsing saved challenges:', e);
            completedChallenges = [];
        }
    }
    
    // Load initial challenge
    loadRandomChallenge();
    
    // Update challenge history
    updateChallengeHistory();
    
    // Setup all event listeners
    setupEventListeners();
    
    // Also setup event delegation as backup
    setupEventDelegation();
    
    console.log('App initialized successfully');
});

// Event delegation as backup
function setupEventDelegation() {
    console.log('Setting up event delegation...');
    
    // Use event delegation for all buttons
    document.addEventListener('click', function(e) {
        console.log('Click detected on:', e.target);
        
        // Get Today's Challenge button
        if (e.target && e.target.id === 'getChallengeBtn') {
            e.preventDefault();
            e.stopPropagation();
            console.log('Get Today\'s Challenge clicked (delegation)');
            loadRandomChallenge();
            scrollToChallengeSection();
            return;
        }
        
        // Get New Challenge button
        if (e.target && e.target.id === 'newChallengeBtn') {
            e.preventDefault();
            e.stopPropagation();
            console.log('Get New Challenge clicked (delegation)');
            loadRandomChallenge();
            return;
        }
        
        // Mark Complete button
        if (e.target && e.target.id === 'markCompleteBtn') {
            e.preventDefault();
            e.stopPropagation();
            console.log('Mark Complete clicked (delegation)');
            markChallengeComplete();
            return;
        }
        
        // Share button
        if (e.target && e.target.id === 'shareBtn') {
            e.preventDefault();
            e.stopPropagation();
            console.log('Share clicked (delegation)');
            shareChallenge();
            return;
        }
        
        // Category buttons
        if (e.target && e.target.classList.contains('category-btn')) {
            e.preventDefault();
            e.stopPropagation();
            const category = e.target.getAttribute('data-category');
            console.log('Category clicked (delegation):', category);
            setActiveCategory(category);
            loadRandomChallenge();
            return;
        }
        
        // Hamburger menu
        if (e.target && e.target.classList.contains('hamburger')) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked (delegation)');
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.classList.toggle('active');
                e.target.classList.toggle('active');
            }
            return;
        }
    });
    
    console.log('Event delegation setup complete');
}

// Setup all event listeners
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
        console.log('Setting up event listeners after delay...');
        
        // Get Today's Challenge button
        const getChallengeBtn = document.getElementById('getChallengeBtn');
        console.log('Get Challenge button found:', !!getChallengeBtn);
        if (getChallengeBtn) {
            getChallengeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Get Today\'s Challenge clicked');
                loadRandomChallenge();
                scrollToChallengeSection();
            });
        }
        
        // Get New Challenge button
        const newChallengeBtn = document.getElementById('newChallengeBtn');
        console.log('New Challenge button found:', !!newChallengeBtn);
        if (newChallengeBtn) {
            newChallengeBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Get New Challenge clicked');
                loadRandomChallenge();
            });
        }
        
        // Mark Complete button
        const markCompleteBtn = document.getElementById('markCompleteBtn');
        console.log('Mark Complete button found:', !!markCompleteBtn);
        if (markCompleteBtn) {
            markCompleteBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Mark Complete clicked');
                markChallengeComplete();
            });
        }
        
        // Share button
        const shareBtn = document.getElementById('shareBtn');
        console.log('Share button found:', !!shareBtn);
        if (shareBtn) {
            shareBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Share clicked');
                shareChallenge();
            });
        }
        
        // Category buttons
        const categoryBtns = document.querySelectorAll('.category-btn');
        console.log('Category buttons found:', categoryBtns.length);
        categoryBtns.forEach((btn, index) => {
            console.log(`Category button ${index}:`, btn.textContent, btn.getAttribute('data-category'));
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const category = this.getAttribute('data-category');
                console.log('Category clicked:', category);
                setActiveCategory(category);
                loadRandomChallenge();
            });
        });
        
        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        console.log('Hamburger found:', !!hamburger, 'Nav menu found:', !!navMenu);
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', function() {
                console.log('Hamburger clicked');
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
        
        // Contact form
        const contactForm = document.querySelector('.contact-form');
        console.log('Contact form found:', !!contactForm);
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                console.log('Contact form submitted');
                handleContactForm(e);
            });
        }
        
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        console.log('Nav links found:', navLinks.length);
        navLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        console.log('Event listeners setup complete');
    }, 100);
}

// Set active category
function setActiveCategory(category) {
    console.log('Setting active category to:', category);
    
    // Update button states
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
    
    currentCategory = category;
}

// Load random challenge
function loadRandomChallenge() {
    console.log('Loading random challenge for category:', currentCategory);
    
    let availableChallenges = [];
    
    if (currentCategory === 'all') {
        // Get all challenges from all categories
        Object.values(challenges).forEach(categoryChallenges => {
            availableChallenges = availableChallenges.concat(categoryChallenges);
        });
    } else {
        // Get challenges from specific category
        availableChallenges = challenges[currentCategory] || [];
    }
    
    console.log('Available challenges:', availableChallenges.length);
    
    if (availableChallenges.length === 0) {
        console.log('No challenges available');
        updateChallengeDisplay("No challenges available for this category.", currentCategory, "N/A");
        return;
    }
    
    // Select random challenge
    const randomIndex = Math.floor(Math.random() * availableChallenges.length);
    const challenge = availableChallenges[randomIndex];
    
    // Determine category for display
    let displayCategory = currentCategory;
    if (currentCategory === 'all') {
        displayCategory = getChallengeCategory(challenge);
    }
    
    // Store current challenge
    currentChallenge = {
        ...challenge,
        category: displayCategory,
        timestamp: new Date().toISOString()
    };
    
    console.log('Selected challenge:', currentChallenge);
    
    // Update display
    updateChallengeDisplay(challenge.text, displayCategory, challenge.difficulty);
    
    // Add animation
    const challengeCard = document.querySelector('.challenge-card');
    if (challengeCard) {
        challengeCard.classList.add('fade-in-up');
        setTimeout(() => challengeCard.classList.remove('fade-in-up'), 600);
    }
    
    // Reset mark complete button
    const markCompleteBtn = document.getElementById('markCompleteBtn');
    if (markCompleteBtn) {
        markCompleteBtn.textContent = 'Mark Complete';
        markCompleteBtn.disabled = false;
        markCompleteBtn.classList.remove('success-animation');
    }
}

// Update challenge display
function updateChallengeDisplay(text, category, difficulty) {
    console.log('Updating challenge display:', { text, category, difficulty });
    
    const challengeText = document.getElementById('challengeText');
    const challengeCategory = document.getElementById('challengeCategory');
    const challengeDifficulty = document.getElementById('challengeDifficulty');
    
    if (challengeText) challengeText.textContent = text;
    if (challengeCategory) challengeCategory.textContent = category;
    if (challengeDifficulty) {
        challengeDifficulty.textContent = difficulty;
        challengeDifficulty.className = `challenge-difficulty ${difficulty}`;
    }
}

// Get challenge category for 'all' category
function getChallengeCategory(challenge) {
    for (const [category, challenges] of Object.entries(challenges)) {
        if (challenges.includes(challenge)) {
            return category;
        }
    }
    return 'general';
}

// User data storage (localStorage demo)
function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
}
function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Registration
function registerUser() {
    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    if (!username || !email || !password) return alert('Fill all fields!');
    let users = getUsers();
    if (users.find(u => u.username === username)) return alert('Username taken!');
    users.push({ username, email, password, points: 0 });
    saveUsers(users);
    closeModal('registerModal');
    alert('Registered! Please login.');
}

// Login
function loginUser() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    let users = getUsers();
    let user = users.find(u => u.username === username && u.password === password);
    if (!user) return alert('Invalid credentials!');
    setCurrentUser(user);
    closeModal('loginModal');
    alert('Logged in!');
    updateStats();
}

// Modal helpers
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Update stats and leaderboard
function updateStats() {
    let user = getCurrentUser();
    if (user) {
        document.getElementById('statPoints').textContent = user.points;
        // ...update other stats...
    }
    updateLeaderboard();
}

function updateLeaderboard() {
    let users = getUsers();
    users.sort((a, b) => b.points - a.points);
    let top10 = users.slice(0, 10);
    let html = top10.map(u => 
        `<div class="leaderboard-item"><span>${u.username}</span><span>${u.points}</span></div>`
    ).join('');
    document.getElementById('leaderboardList').innerHTML = html;
}

// Award points when challenge is completed
function markChallengeComplete() {
    let user = getCurrentUser();
    if (!user) {
        alert('Login to earn points!');
        openModal('loginModal');
        return;
    }
    user.points += 10;
    let users = getUsers();
    let idx = users.findIndex(u => u.username === user.username);
    users[idx] = user;
    saveUsers(users);
    setCurrentUser(user);
    updateStats();
    alert('Challenge completed! +10 points');
}

// Show modals from nav (add buttons in nav or elsewhere)
document.querySelector('.nav-menu').insertAdjacentHTML('beforeend', `
    <a href="#" class="nav-link" onclick="openModal('loginModal');return false;">Login</a>
    <a href="#" class="nav-link" onclick="openModal('registerModal');return false;">Register</a>
`);

// Initialize UI on load
document.addEventListener('DOMContentLoaded', () => {
    updateGamificationUI();
    updateBadgesUI();
});

// Update challenge history
function updateChallengeHistory() {
    console.log('Updating challenge history, completed challenges:', completedChallenges.length);
    
    const challengeHistory = document.getElementById('challengeHistory');
    if (!challengeHistory) {
        console.log('Challenge history element not found');
        return;
    }
    
    if (completedChallenges.length === 0) {
        challengeHistory.innerHTML = '<p style="text-align: center; color: var(--text-light);">No completed challenges yet. Complete your first challenge to see it here!</p>';
        return;
    }
    
    challengeHistory.innerHTML = completedChallenges.map(challenge => `
        <div class="history-item fade-in">
            <div class="challenge-meta">
                <span class="challenge-category">${challenge.category}</span>
                <span class="challenge-difficulty ${challenge.difficulty}">${challenge.difficulty}</span>
                <span style="color: var(--text-light); font-size: 0.875rem;">
                    ${new Date(challenge.completedAt).toLocaleDateString()}
                </span>
            </div>
            <p>${challenge.text}</p>
        </div>
    `).join('');
}

// Share challenge
function shareChallenge() {
    if (!currentChallenge) {
        console.log('No current challenge to share');
        showNotification('No challenge to share!');
        return;
    }
    
    console.log('Sharing challenge:', currentChallenge);
    
    const shareText = `I'm taking on today's challenge: "${currentChallenge.text}"\n\nJoin me at Daily Challenge!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Daily Challenge',
            text: shareText,
            url: window.location.href
        }).catch(err => {
            console.log('Share failed:', err);
            fallbackShare(shareText);
        });
    } else {
        fallbackShare(shareText);
    }
}

// Fallback share method
function fallbackShare(shareText) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('Challenge copied to clipboard!');
        }).catch(() => {
            showNotification(shareText);
        });
    } else {
        showNotification(shareText);
    }
}

// Handle contact form
function handleContactForm(e) {
    console.log('Handling contact form submission');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log('Form data:', data);
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Show popup message
        alert('Thank you for your kind feedback.');
        
        // Also show notification
        showNotification('Thank you for your kind feedback.');
        
        // Reset form
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Show notification
function showNotification(message) {
    console.log('Showing notification:', message);
    
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--gradient-primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 12px;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Scroll to challenge section
function scrollToChallengeSection() {
    console.log('Scrolling to challenge section');
    
    const challengeSection = document.getElementById('challenges');
    if (challengeSection) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const offsetTop = challengeSection.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Scroll to contact section
function scrollToContactSection() {
    console.log('Scrolling to contact section');
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const offsetTop = contactSection.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature, .history-item, .challenge-card').forEach(el => {
        observer.observe(el);
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Space bar to get new challenge
    if (e.code === 'Space' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        loadRandomChallenge();
    }
    
    // Enter to mark complete
    if (e.code === 'Enter' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        markChallengeComplete();
    }
});

// Initialize challenge on page load
window.addEventListener('load', () => {
    console.log('Window loaded');
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
    
    // Add stagger animation to hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons button');
    heroButtons.forEach((btn, index) => {
        setTimeout(() => {
            btn.classList.add('fade-in-up');
        }, 300 + (index * 100));
    });
    
    // Add scroll animatios
    addScrollAnimations();
});

// Inline contact form handler
function handleContactFormInline(e) {
    e.preventDefault();
    console.log('Contact form submitted inline');
    
    // Get form data
    const form = e.target.closest('form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log('Form data:', data);
    
    // Get submit button
    const submitBtn = e.target;
    const originalText = submitBtn.textContent;
    
    // Show sending state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate sending
    setTimeout(() => {
        // Show popup
        alert('Thank you for your kind feedback.');
        
        // Reset form
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        console.log('Form submitted successfully');
    }, 2000);
}

console.log('Script loaded successfully');