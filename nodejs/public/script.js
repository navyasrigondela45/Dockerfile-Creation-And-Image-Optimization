// Fetch and display prime ministers data
async function loadPrimeMinisters() {
    try {
        const response = await fetch('/api/prime-ministers');
        const pmData = await response.json();
        
        // Update total PM count
        document.getElementById('totalPMs').textContent = pmData.length;
        
        // Display PMs in grid
        displayPMs(pmData);
    } catch (error) {
        console.error('Error loading data:', error);
        document.getElementById('pmGrid').innerHTML = '<div class="error">❌ Failed to load data. Please refresh the page.</div>';
    }
}

function displayPMs(primeMinisters) {
    const grid = document.getElementById('pmGrid');
    grid.innerHTML = '';
    
    primeMinisters.forEach((pm, index) => {
        const pmCard = document.createElement('div');
        pmCard.className = 'pm-card';
        pmCard.innerHTML = `
            <div class="pm-image">
                ${getEmojiForPM(pm.name)}
                <div class="pm-term">${pm.term}</div>
            </div>
            <div class="pm-info">
                <h3>${pm.name}</h3>
                <div class="pm-party">${pm.party}</div>
                <div class="pm-desc">${pm.description}</div>
                <div class="pm-footer">
                    <span class="pm-order">#${index + 1}</span>
                    <button class="detail-btn" onclick="showDetails(${pm.id})">View Details →</button>
                </div>
            </div>
        `;
        grid.appendChild(pmCard);
    });
}

function getEmojiForPM(name) {
    const emojis = {
        'Jawaharlal Nehru': '🇮🇳',
        'Lal Bahadur Shastri': '🌾',
        'Indira Gandhi': '👩‍⚖️',
        'Rajiv Gandhi': '💻',
        'Narendra Modi': '🔱'
    };
    return emojis[name] || '👤';
}

async function showDetails(id) {
    try {
        const response = await fetch(`/api/prime-ministers`);
        const pmData = await response.json();
        const pm = pmData.find(p => p.id === id);
        
        if (pm) {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>${pm.name}</h2>
                        <span class="close-modal">&times;</span>
                    </div>
                    <div class="modal-body">
                        <p><strong>📅 Term:</strong> ${pm.term}</p>
                        <p><strong>🎭 Party:</strong> ${pm.party}</p>
                        <p><strong>📖 About:</strong> ${pm.description}</p>
                        <hr style="margin: 15px 0;">
                        <p><em>🇮🇳 A true leader who contributed to India's growth 🇮🇳</em></p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            modal.style.display = 'flex';
            
            // Close modal functionality
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.onclick = () => modal.remove();
            
            // Close on outside click
            modal.onclick = (e) => {
                if (e.target === modal) modal.remove();
            };
        }
    } catch (error) {
        console.error('Error showing details:', error);
        alert('Unable to load details. Please try again.');
    }
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadPrimeMinisters);
