// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.7)';
    }
});

// Project data
const projects = {
    design: [
        {
            title: 'Octadot Brand Identity',
            description: 'Designed comprehensive brand identity system including logo, typography, and visual elements.',
            shortDescription: 'Modern tech brand identity design',
            tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
            image: 'https://picsum.photos/800/600?random=1',
            gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
            problem: 'Create a modern tech-focused brand identity that reflects innovation and reliability.',
            approach: 'Started with extensive market research and competitor analysis. Developed multiple concepts focusing on geometric shapes and modern typography.',
            solution: 'Developed a minimalist yet dynamic visual language with a bold color palette and versatile design system.',
            results: [
                'Increased brand recognition by 45%',
                'Improved social media engagement by 60%',
                'Successfully implemented across all platforms'
            ],
            link: 'https://example.com/octadot'
        },
        {
            title: 'Elare Brand Identity',
            description: 'Developed cohesive visual branding for Elare.',
            tools: ['Adobe Illustrator', 'Adobe Photoshop'],
            image: 'https://picsum.photos/800/600?random=4',
            gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
            problem: 'Establish a distinctive brand identity in a competitive market.',
            solution: 'Created a comprehensive brand guide with versatile design elements.',
            results: 'Successfully launched brand across multiple platforms.',
            link: 'https://example.com/octadot'
        },
        {
            title: 'Morchid UI/UX Design',
            description: 'Comprehensive UI/UX design for Morchid platform',
            tools: ['Figma', 'Adobe XD', 'Sketch'],
            image: 'https://picsum.photos/800/600?random=11',
            gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
            problem: 'Create intuitive user interface for complex platform',
            solution: 'Designed user-centric interface with modern design principles',
            results: 'Improved user satisfaction by 40%',
            link: 'https://example.com/octadot'
        },
        {
            title: 'Audissey UI/UX Design',
            description: 'User interface and experience design for Audissey',
            tools: ['Figma', 'InVision', 'Adobe Creative Suite'],
            image: 'https://picsum.photos/800/600?random=12',
            gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
            problem: 'Design engaging and accessible user interface',
            solution: 'Created responsive and intuitive design system',
            results: 'Reduced user drop-off rate by 35%',
            link: 'https://example.com/octadot'
        },
        {
            title: 'Farah Tlemcani Portfolio',
            description: 'Personal brand identity and portfolio design',
            tools: ['Adobe Illustrator', 'Figma', 'Photoshop'],
            image: 'https://picsum.photos/800/600?random=13',
            gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
            problem: 'Create distinctive personal brand identity',
            solution: 'Developed unique visual style and portfolio layout',
            results: 'Successfully launched personal brand',
            link: 'https://example.com/octadot'
        },
        {
            title: 'Hurudza Brand Identity',
            description: 'Complete brand identity for agriculture platform',
            tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
            image: 'https://picsum.photos/800/600?random=14',
            gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
            problem: 'Design modern agricultural brand identity',
            solution: 'Created cohesive brand system with organic elements',
            results: 'Increased brand recognition in target market',
            link: 'https://example.com/octadot'
        },
        {
            title: 'Plus Express Social Media',
            description: 'Social media content design and strategy',
            tools: ['Adobe Photoshop', 'Canva', 'Adobe Illustrator'],
            image: 'https://picsum.photos/800/600?random=15',
            gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
            problem: 'Create engaging social media presence',
            solution: 'Designed consistent and appealing content series',
            results: 'Increased engagement by 50%',
            link: 'https://example.com/octadot'
        }
    ],
    'data-science': [
        {
            title: 'Crop Recommendation Model',
            description: 'ML model for optimal crop selection using environmental data.',
            tools: ['Python', 'Scikit-learn', 'Flask', 'Pandas'],
            image: 'https://picsum.photos/800/600?random=5',
            gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
            problem: 'Help farmers make data-driven decisions for crop selection.',
            solution: 'Developed an ML model with 92% accuracy using historical agricultural data.',
            results: 'Improved crop yield by 30% for test group farmers.',
            link: 'https://example.com/octadot'
        },
        {
            title: 'Plant Disease Detection',
            description: 'Deep learning model for identifying plant diseases from images.',
            tools: ['Python', 'TensorFlow', 'ResNet', 'OpenCV'],
            image: 'https://picsum.photos/800/600?random=6',
            gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
            problem: 'Early detection of plant diseases to prevent crop loss.',
            solution: 'Implemented ResNet architecture with transfer learning.',
            results: '95% accuracy in disease classification.',
            link: 'https://example.com/octadot'
        },
        // Add more data science projects...
    {
        title: 'Irrigation Prediction Model',
        description: 'ML solution for predicting irrigation needs in agriculture',
        tools: ['Python', 'FastAPI', 'NumPy', 'Pandas'],
        image: 'https://picsum.photos/800/600?random=16',
        gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
        problem: 'Optimize water usage in agriculture through predictive modeling',
        solution: 'Developed ML model using weather and soil data',
        results: '25% reduction in water consumption',
            link: 'https://example.com/octadot'
    },
    {
        title: 'Fertilizer Type Recommendation',
        description: 'Data-driven fertilizer recommendation system',
        tools: ['Python', 'Flask', 'Scikit-learn', 'Bootstrap'],
        image: 'https://picsum.photos/800/600?random=17',
        gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
        problem: 'Optimize fertilizer selection for different soil types',
        solution: 'Created ML model with bootstrapped training data',
        results: 'Improved crop yield by 20%',
            link: 'https://example.com/octadot'
    },
    {
        title: 'Telco Customer Churn Analysis',
        description: 'Predictive modeling for customer churn',
        tools: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
        image: 'https://picsum.photos/800/600?random=18',
        gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
        problem: 'Identify factors leading to customer churn',
        solution: 'Performed EDA and built predictive models',
        results: 'Identified key churn indicators with 88% accuracy',
            link: 'https://example.com/octadot'
    },
    {
        title: 'Shopping Data EDA',
        description: 'Analysis of customer shopping behavior',
        tools: ['Python', 'Pandas', 'Seaborn', 'Jupyter'],
        image: 'https://picsum.photos/800/600?random=19',
        gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
        problem: 'Understand customer shopping patterns',
        solution: 'Conducted comprehensive data analysis',
        results: 'Revealed key shopping trends and patterns',
            link: 'https://example.com/octadot'
    },
    {
        title: 'Building Energy Analysis',
        description: 'Time-series analysis of building energy consumption',
        tools: ['Python', 'Pandas', 'Plotly', 'Prophet'],
        image: 'https://picsum.photos/800/600?random=20',
        gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
        problem: 'Analyze energy consumption patterns',
        solution: 'Implemented time-series analysis and visualization',
        results: 'Identified 15% potential energy savings',
            link: 'https://example.com/octadot'
    },
    {
        title: 'Credit Card Fraud Detection',
        description: 'Anomaly detection in financial transactions',
        tools: ['Python', 'Scikit-learn', 'DBSCAN', 'NumPy'],
        image: 'https://picsum.photos/800/600?random=20',
        gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
        problem: 'Detect fraudulent credit card transactions',
        solution: 'Implemented multiple anomaly detection algorithms',
        results: '95% accuracy in fraud detection',
            link: 'https://example.com/octadot'
    }
    ],
    software: [
        {
            title: 'Hurudza React Native App',
            description: 'Mobile app for agricultural automation and monitoring.',
            tools: ['React Native', 'Node.js', 'MongoDB'],
            image: 'https://picsum.photos/800/600?random=7',
            gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
            problem: 'Create a user-friendly mobile interface for farm management.',
            solution: 'Built a cross-platform app with offline capabilities.',
            results: 'Over 10,000 downloads with 4.8/5 rating.',
            link: 'https://example.com/octadot'
        },
        {
            title: 'Wejha Next.js Platform',
            description: 'Modern web platform for user interactions.',
            tools: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
            image: 'https://picsum.photos/800/600?random=8',
            gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
            problem: 'Build a scalable and performant web platform.',
            solution: 'Implemented Next.js with SSR and optimized performance.',
            results: '40% improvement in load times.',
            link: 'https://example.com/octadot'
        },
        // Add more software projects...
    {
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory management',
        tools: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
        image: 'https://picsum.photos/800/600?random=9',
        gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
        problem: 'Create a scalable e-commerce platform with real-time inventory tracking',
        solution: 'Built microservices architecture with caching layer',
        results: 'Handled 10k concurrent users with 99.9% uptime',
            link: 'https://example.com/octadot'
    },
    {
        title: 'IoT Dashboard',
        description: 'Real-time monitoring dashboard for IoT devices',
        tools: ['Vue.js', 'Socket.io', 'Express', 'InfluxDB'],
        image: 'https://picsum.photos/800/600?random=10',
        gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
        problem: 'Monitor thousands of IoT devices in real-time',
        solution: 'Implemented WebSocket connections with time-series database',
        results: 'Reduced monitoring latency by 75%',
            link: 'https://example.com/octadot'
    },
    
{
    title: 'Ouine Nakol App',
    description: 'Cross-platform food recommendation application',
    tools: ['Ionic', 'Angular', 'Firebase', 'Node.js'],
    image: 'https://picsum.photos/800/600?random=12',
    gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
    problem: 'Create personalized food recommendations based on user preferences',
    solution: 'Implemented machine learning algorithms with Ionic framework',
    results: 'Achieved 15k+ downloads with 4.7/5 rating',
            link: 'https://example.com/octadot'
},
{
    title: 'Hurudza Web Dashboard',
    description: 'Admin dashboard for agricultural management system',
    tools: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
    image: 'https://picsum.photos/800/600?random=13',
    gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
    problem: 'Develop intuitive dashboard for farm management',
    solution: 'Created responsive dashboard with real-time data visualization',
    results: 'Reduced management time by 40%',
            link: 'https://example.com/octadot'
},
{
    title: 'PyQt Travel Agency System',
    description: 'Desktop application for travel agency management',
    tools: ['Python', 'PyQt', 'SQLite', 'Qt Designer'],
    image: 'https://picsum.photos/800/600?random=14',
    gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
    problem: 'Streamline visa application tracking and client management',
    solution: 'Built desktop app with intuitive interface and database integration',
    results: '60% improvement in processing efficiency',
            link: 'https://example.com/octadot'
},
{
    title: 'Hakeem Healthcare Platform',
    description: 'Healthcare platform for patient-doctor interactions',
    tools: ['React', 'Express.js', 'MongoDB', 'WebRTC'],
    image: 'https://picsum.photos/800/600?random=15',
    gallery: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=3'],
    problem: 'Improve healthcare accessibility through telemedicine',
    solution: 'Developed secure platform with video consultation features',
    results: 'Connected 500+ doctors with 10000+ patients',
            link: 'https://example.com/octadot'
}
],
};

// Load projects with enhanced filtering and error handling
function loadProjects(category = 'all') {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) {
        console.error('Project grid container not found!');
        return;
    }

    let projectsToShow = [];
    try {
        if (category === 'all') {
            projectsToShow = Object.values(projects).flat();
        } else {
            projectsToShow = projects[category] || [];
        }

        if (projectsToShow.length === 0) {
            projectGrid.innerHTML = '<div class="col-12"><p class="text-center">No projects found.</p></div>';
            return;
        }

        projectGrid.innerHTML = projectsToShow.map(project => `
            <div class="project-card" data-project='${JSON.stringify(project)}'>
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="project-overlay">
                        <span class="view-project">View Project</span>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.shortDescription || project.description}</p>
                    <div class="project-tools">
                        ${project.tools.slice(0, 3).map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // Add click handlers to project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                const projectData = JSON.parse(card.dataset.project);
                showProjectDetails(projectData);
            });
        });

    } catch (error) {
        console.error('Error in loadProjects:', error);
        projectGrid.innerHTML = '<div class="col-12"><p class="text-center text-danger">Error loading projects.</p></div>';
    }
}

// Project details modal function
function showProjectDetails(project) {
    const modalId = 'projectModal';
    let modal = document.getElementById(modalId);
    
    // Remove existing modal if present
    if (modal) {
        modal.remove();
    }

    // Create new modal
    modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = modalId;
    
    modal.innerHTML = `
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${project.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="project-gallery mb-4">
                        ${project.gallery ? `
                            <div id="projectGalleryCarousel" class="carousel slide gallery-carousel" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    ${[project.image, ...(project.gallery || [])].map((_, index) => `
                                        <button type="button" 
                                            data-bs-target="#projectGalleryCarousel" 
                                            data-bs-slide-to="${index}"
                                            ${index === 0 ? 'class="active"' : ''}
                                            aria-label="Slide ${index + 1}">
                                        </button>
                                    `).join('')}
                                </div>
                                <div class="carousel-inner">
                                    ${[project.image, ...(project.gallery || [])].map((img, index) => `
                                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                            <img src="${img}" class="d-block" alt="${project.title} slide ${index + 1}">
                                        </div>
                                    `).join('')}
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#projectGalleryCarousel" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#projectGalleryCarousel" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        ` : `
                            <div class="gallery-carousel">
                                <img src="${project.image}" class="img-fluid" alt="${project.title}">
                            </div>
                        `}
                    </div>
                    <div class="project-details">
                        <section class="mb-4">
                            <h6>Overview</h6>
                            <p>${project.description}</p>
                        </section>
                        <section class="mb-4">
                            <h6>Challenge</h6>
                            <p>${project.problem}</p>
                        </section>
                        <section class="mb-4">
                            <h6>Approach</h6>
                            <p>${project.approach || project.solution}</p>
                        </section>
                        <section class="mb-4">
                            <h6>Results</h6>
                            ${Array.isArray(project.results) ? 
                                `<ul>${project.results.map(result => `<li>${result}</li>`).join('')}</ul>` :
                                `<p>${project.results}</p>`
                            }
                        </section>
                        <section>
                            <h6>Technologies Used</h6>
                            <div class="project-tools">
                                ${project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                            </div>
                        </section>
                        ${project.link ? 
                            `<div class="mt-4">
                                <a href="${project.link}" class="btn btn-primary" target="_blank">View Live Project</a>
                            </div>` : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Initialize Bootstrap modal
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
    
    // Initialize carousel if exists
    const carousel = modal.querySelector('.carousel');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true
        });
    }
    
    // Clean up on hide
    modal.addEventListener('hidden.bs.modal', () => {
        modal.remove();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Load initial projects
    loadProjects('all');

    // Initialize filter buttons
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadProjects(this.getAttribute('data-filter'));
        });
    });
});

// Particles Configuration
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ff69b4"
      },
      "shape": {
        "type": "circle",
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
        }
      },
      "size": {
        "value": 3,
        "random": true,
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ff69b4",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  }
);

// Skills Section Interaction
function initializeSkillsSection() {
    const categoryBtns = document.querySelectorAll('.skill-category-btn');
    const skillTrees = document.querySelectorAll('.skill-tree');
    const skillNodes = document.querySelectorAll('.skill-subnode');
    const detailsPanel = document.querySelector('.skill-details-panel');

    // Category switching
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Update active states
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show corresponding skill tree
            skillTrees.forEach(tree => {
                tree.classList.remove('active');
                if (tree.id === `${category}-tree`) {
                    tree.classList.add('active');
                    // Trigger animation
                    tree.style.animation = 'none';
                    tree.offsetHeight; // Trigger reflow
                    tree.style.animation = null;
                }
            });
        });
    });

    // Skill node interaction
    skillNodes.forEach(node => {
        node.addEventListener('click', () => {
            // Remove active state from other nodes
            skillNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');

            const skill = node.dataset.skill;
            const details = node.querySelector('.skill-details');
            const level = node.dataset.level || '85'; // Default level if not specified
            
            // Update details panel with animation
            detailsPanel.innerHTML = `
                <div class="panel-content" data-aos="fade-left">
                    <h3>${skill}</h3>
                    <div class="skill-details mt-3">
                        ${details.innerHTML}
                    </div>
                    <div class="skill-level mt-4">
                        <div class="d-flex justify-content-between mb-2">
                            <span>Proficiency</span>
                            <span>${level}%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar" style="width: 0%"></div>
                        </div>
                    </div>
                </div>
            `;

            // Animate progress bar
            setTimeout(() => {
                const progressBar = detailsPanel.querySelector('.progress-bar');
                progressBar.style.width = `${level}%`;
            }, 100);
        });

        // Add hover effects
        node.addEventListener('mouseenter', () => {
            node.style.transform = 'translateY(-5px)';
        });

        node.addEventListener('mouseleave', () => {
            node.style.transform = 'translateY(0)';
        });
    });
}

// Initialize skills section when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeSkillsSection);

// Wait for DOM and assets to load
window.addEventListener('load', () => {
    console.log('Window load event fired');
    loadProjects('all');
});

// Initialize filter buttons
const filterButtons = document.querySelectorAll('.btn-filter');
filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('Filter button clicked:', this.getAttribute('data-filter'));
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        loadProjects(this.getAttribute('data-filter'));
    });
});

// Contact Form Handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    this.reset();
});
