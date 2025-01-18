const tools = [
    {
        id: 'vscode',
        name: 'Visual Studio Code',
        icon: 'assets/tools/vscode.png',
        category: 'ide',
        description: 'Powerful source code editor with extensive plugin support.',
        proficiency: 95,
        useCases: [
            'Primary IDE for web development',
            'JavaScript and TypeScript development',
            'Python development with debugging'
        ]
    },
    {
        id: 'netbeans',
        name: 'NetBeans',
        icon: 'assets/tools/netbeans.png',
        category: 'ide',
        description: 'Full-featured Java development environment.',
        proficiency: 85,
        useCases: [
            'Java enterprise development',
            'Web application development',
            'Database integration projects'
        ]
    },
    {
        id: 'eclipse',
        name: 'Eclipse',
        icon: 'assets/tools/eclipse.png',
        category: 'ide',
        description: 'Multi-language development environment.',
        proficiency: 80,
        useCases: [
            'Java development',
            'Plugin development',
            'Android development'
        ]
    },
    {
        id: 'postman',
        name: 'Postman',
        icon: 'assets/tools/postman.png',
        category: 'testing',
        description: 'API development and testing tool.',
        proficiency: 90,
        useCases: [
            'API testing and documentation',
            'Automated API testing',
            'API development workflow'
        ]
    },
    {
        id: 'jira',
        name: 'Jira',
        icon: 'assets/tools/jira.png',
        category: 'project-management',
        description: 'Project management tool for agile teams.',
        proficiency: 85,
        useCases: [
            'Agile project management',
            'Sprint planning and tracking',
            'Issue tracking'
        ]
    },
    {
        id: 'notion',
        name: 'Notion',
        icon: 'assets/tools/notion.png',
        category: 'collaboration',
        description: 'All-in-one workspace for notes and collaboration.',
        proficiency: 90,
        useCases: [
            'Project documentation',
            'Knowledge base management',
            'Team collaboration'
        ]
    },
    {
        id: 'slack',
        name: 'Slack',
        icon: 'assets/tools/slack.png',
        category: 'collaboration',
        description: 'Team communication and collaboration platform.',
        proficiency: 95,
        useCases: [
            'Team communication',
            'Project coordination',
            'Integration with development tools'
        ]
    },
    {
        id: 'responsively',
        name: 'Responsively',
        icon: 'assets/tools/responsively.png',
        category: 'development',
        description: 'Responsive web development testing tool.',
        proficiency: 85,
        useCases: [
            'Responsive design testing',
            'Cross-device development',
            'UI debugging'
        ]
    }
];

class ToolsDashboard {
    constructor() {
        this.initializeUI();
        this.bindEvents();
        this.renderTools(tools);
    }

    initializeUI() {
        this.toolsGrid = document.querySelector('.tools-grid');
        this.searchInput = document.querySelector('#toolSearch');
        this.filterButtons = document.querySelectorAll('.tool-filter');
        this.currentFilter = 'all';
    }

    bindEvents() {
        this.searchInput?.addEventListener('input', (e) => this.handleSearch(e));
        this.filterButtons?.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });
    }

    renderTools(toolsToShow) {
        if (!this.toolsGrid) return;
        
        this.toolsGrid.innerHTML = toolsToShow.map(tool => `
            <div class="tool-card" data-tool-id="${tool.id}" data-category="${tool.category}">
                <img src="${tool.icon}" alt="${tool.name}" class="tool-icon">
                <h3 class="tool-name">${tool.name}</h3>
                <div class="tool-category">${this.formatCategory(tool.category)}</div>
            </div>
        `).join('');

        this.addToolCardListeners();
    }

    formatCategory(category) {
        return category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    addToolCardListeners() {
        document.querySelectorAll('.tool-card').forEach(card => {
            card.addEventListener('click', (e) => this.showToolModal(e));
        });
    }

    handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTools = tools.filter(tool => {
            const matchesSearch = tool.name.toLowerCase().includes(searchTerm);
            const matchesFilter = this.currentFilter === 'all' || tool.category === this.currentFilter;
            return matchesSearch && matchesFilter;
        });
        this.renderTools(filteredTools);
    }

    handleFilter(e) {
        const filter = e.target.dataset.filter;
        this.currentFilter = filter;
        
        // Update active state
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Filter tools
        const filteredTools = filter === 'all' 
            ? tools 
            : tools.filter(tool => tool.category === filter);
        
        this.renderTools(filteredTools);
    }

    showToolModal(e) {
        const toolId = e.currentTarget.dataset.toolId;
        const tool = tools.find(t => t.id === toolId);
        if (!tool) return;

        const modal = new bootstrap.Modal(document.getElementById('toolModal'));
        const modalContent = `
            <div class="modal-header">
                <div class="d-flex align-items-center">
                    <img src="${tool.icon}" alt="${tool.name}" class="tool-icon-large">
                    <h5 class="modal-title">${tool.name}</h5>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <p>${tool.description}</p>
                
                <div class="proficiency-wrapper">
                    <h6>Proficiency</h6>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${tool.proficiency}%"></div>
                    </div>
                </div>

                <h6>Use Cases</h6>
                <ul class="use-cases-list">
                    ${tool.useCases.map(useCase => `
                        <li><i class="bi bi-check-circle"></i>${useCase}</li>
                    `).join('')}
                </ul>
            </div>
        `;

        document.querySelector('#toolModal .modal-content').innerHTML = modalContent;
        modal.show();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ToolsDashboard();
});
