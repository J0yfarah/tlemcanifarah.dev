const tools = [
    {
        id: 'vscode',
        name: 'Visual Studio Code',
        icon: '<i class="bi bi-code-square"></i>', // Fallback icon
        imgIcon: 'images\\tools\\Vscode.svg',
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
        icon: '<i class="bi bi-code-slash"></i>',
        imgIcon: 'images\\tools\\Apache_NetBeans_Logo.svg',
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
        icon: '<i class="bi bi-code"></i>',
        imgIcon: 'images\\tools\\eclipse-icon-svgrepo-com.svg',
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
        icon: '<i class="bi bi-box-arrow-in-right"></i>',
        imgIcon: 'images\\tools\\postman-icon-svgrepo-com.svg',
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
        icon: '<i class="bi bi-kanban"></i>',
        imgIcon: 'images\\tools\\jira-1.svg',
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
        icon: '<i class="bi bi-journal"></i>',
        imgIcon: 'images\\tools\\notion-logo-svgrepo-com.svg',
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
        icon: '<i class="bi bi-chat-dots"></i>',
        imgIcon: 'images\\tools\\Slack_Technologies_Logo.svg',
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
        icon: '<i class="bi bi-phone"></i>',
        imgIcon: 'images\\tools\\responsively.svg',
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
                ${this.renderToolIcon(tool)}
                <h3 class="tool-name">${tool.name}</h3>
                <div class="tool-category">${this.formatCategory(tool.category)}</div>
            </div>
        `).join('');

        this.addToolCardListeners();
    }

    renderToolIcon(tool) {
        // Try to load image, fallback to icon if image fails
        return `
            <div class="tool-icon-wrapper">
                <img src="${tool.imgIcon}" 
                     alt="${tool.name}" 
                     class="tool-icon"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                <div class="tool-icon-fallback" style="display:none">
                    ${tool.icon}
                </div>
            </div>
        `;
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
        // Get the button element, whether clicked directly or through the span
        const button = e.target.closest('.tool-filter');
        if (!button) return;

        const filter = button.dataset.filter;
        this.currentFilter = filter;
        
        // Update active state
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

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

        // Create modal if it doesn't exist
        let modalElement = document.getElementById('toolModal');
        if (!modalElement) {
            modalElement = document.createElement('div');
            modalElement.id = 'toolModal';
            modalElement.className = 'modal fade tool-modal';
            modalElement.setAttribute('tabindex', '-1');
            document.body.appendChild(modalElement);
        }

        modalElement.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="d-flex align-items-center">
                            ${this.renderToolIcon(tool)}
                            <h5 class="modal-title">${tool.name}</h5>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>${tool.description}</p>
                        
                        <div class="proficiency-wrapper">
                            <h6>Proficiency</h6>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: ${tool.proficiency}%" 
                                     aria-valuenow="${tool.proficiency}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <h6>Use Cases</h6>
                        <ul class="use-cases-list">
                            ${tool.useCases.map(useCase => `
                                <li><i class="bi bi-check-circle"></i>${useCase}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        // Initialize Bootstrap modal
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ToolsDashboard();
});
