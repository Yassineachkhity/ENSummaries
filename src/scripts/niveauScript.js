
    // Structure dee niveau etude (chemin )
const NIVEAU_ETUDE = {
    API: {
        levels: ['API1', 'API2'],
        fields: []
    },
    CI: {
        levels: ['CI1', 'CI2', 'CI3'],
        fields: ['IAGI', 'GSMI', 'GSI', 'MSEI', 'GEM']
    }
};

// Etat de l'application
const state = {
    selectedPath: {
        cycle: '',
        level: '',
        field: ''
    },
    modules: []
};

// Initialisation de l'interface
document.addEventListener('DOMContentLoaded', () => {
    initializeEngineering();
    loadMockModules();
});

function initializeEngineering() {
    const container = document.querySelector('#engineering-content .space-y-4');
    NIVEAU_ETUDE.CI.levels.forEach(level => {
        const levelSection = createLevelSection(level);
        container.appendChild(levelSection);
    });
}

function createLevelSection(level) {
    const section = document.createElement('div');
    section.className = 'space-y-2';
    
    const levelButton = document.createElement('button');
    levelButton.className = 'w-full p-3 text-left rounded-lg hover:bg-purple-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500';
    levelButton.textContent = level;
    levelButton.onclick = () => toggleCILevel(level);
    
    const fieldsContainer = document.createElement('div');
    fieldsContainer.id = `${level}-fields`;
    fieldsContainer.className = 'hidden pl-6 space-y-2 mt-2';
    
    NIVEAU_ETUDE.CI.fields.forEach(field => {
        const fieldButton = document.createElement('button');
        fieldButton.className = 'w-full p-2 text-left rounded-lg hover:bg-purple-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500';
        fieldButton.textContent = field;
        fieldButton.onclick = () => selectField(level, field);
        fieldsContainer.appendChild(fieldButton);
    });
    
    section.appendChild(levelButton);
    section.appendChild(fieldsContainer);
    return section;
}

function toggleSection(sectionId) {
    const content = document.getElementById(`${sectionId}-content`);
    const icon = document.querySelector(`svg[data-section="${sectionId}"]`);
    const button = icon.closest('button');
    
    const isExpanded = content.classList.toggle('hidden');
    button.setAttribute('aria-expanded', !isExpanded);
    icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
}

function toggleCILevel(level) {
    const fieldsContainer = document.getElementById(`${level}-fields`);
    fieldsContainer.classList.toggle('hidden');
}

function selectLevel(cycle, level) {
    state.selectedPath = { cycle, level, field: '' };
    updateSelectionDisplay();
}

function selectField(level, field) {
    state.selectedPath = { cycle: 'CI', level, field };
    updateSelectionDisplay();
}

function updateSelectionDisplay() {
    const display = document.getElementById('selection-display');
    const path = document.getElementById('selection-path');
    
    const { cycle, level, field } = state.selectedPath;
    path.textContent = field ? `${level} → ${field}` : level;
    display.classList.remove('hidden');
}

function loadMockModules() {
    state.modules = Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        title: `Module ${i + 1}`,
        documentCount: Math.floor(Math.random() * 10) + 1,
        lastUpdated: new Date().toLocaleDateString('fr-FR')
    }));
}

function searchModules() {
    const grid = document.getElementById('modules-grid');
    grid.innerHTML = state.modules.map(module => `
        <article class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">${module.title}</h3>
                <p class="text-sm text-gray-600">${module.documentCount} documents disponibles</p>
                <p class="text-xs text-gray-500 mt-2">Dernière mise à jour: ${module.lastUpdated}</p>
                <a href="module.html?title=${module.title}&course=${state.selectedPath.level}-${state.selectedPath.field}" class="mt-4 inline-block text-purple-600 hover:text-purple-700 transition-colors duration-200">
                    Voir les résumés →
                </a>
            </div>
        </article>
    `).join('');
    
    grid.classList.remove('hidden');
}