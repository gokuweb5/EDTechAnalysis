// Content sections HTML with multiple Figma images
const contentHTML = `
    <!-- Overview Section -->
    <section id="overview" class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Executive Overview</h2>
                <p class="section-subtitle">Current MVP state vs Figma Design Vision</p>
            </div>
            
            <div class="overview-grid">
                <div class="overview-card critical">
                    <div class="card-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <h3>Critical Gaps</h3>
                    <ul class="feature-list">
                        <li><i class="fas fa-times"></i> No AI/ML features implemented</li>
                        <li><i class="fas fa-times"></i> Missing gamification system</li>
                        <li><i class="fas fa-times"></i> No dark theme/glassmorphism</li>
                        <li><i class="fas fa-times"></i> Lack of adaptive personalization</li>
                        <li><i class="fas fa-times"></i> No chat bot/AI assistant</li>
                    </ul>
                </div>
                
                <div class="overview-card warning">
                    <div class="card-icon">
                        <i class="fas fa-palette"></i>
                    </div>
                    <h3>Visual Differences</h3>
                    <ul class="feature-list">
                        <li><i class="fas fa-minus"></i> Flat design vs modern 3D</li>
                        <li><i class="fas fa-minus"></i> No animations/transitions</li>
                        <li><i class="fas fa-minus"></i> Basic layout vs sidebar navigation</li>
                        <li><i class="fas fa-minus"></i> Simple cards without effects</li>
                        <li><i class="fas fa-minus"></i> Missing gradients and glassmorphism</li>
                    </ul>
                </div>
                
                <div class="overview-card success">
                    <div class="card-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3>Working Features</h3>
                    <ul class="feature-list">
                        <li><i class="fas fa-check"></i> Authentication system</li>
                        <li><i class="fas fa-check"></i> Content CRUD operations</li>
                        <li><i class="fas fa-check"></i> Basic quiz system</li>
                        <li><i class="fas fa-check"></i> Dashboard with metrics</li>
                        <li><i class="fas fa-check"></i> Assignment management</li>
                    </ul>
                </div>
            </div>

            <div style="margin-top: 4rem; text-align: center;">
                <h3 style="font-size: 2rem; margin-bottom: 2rem;">Gap Analysis Summary</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 800px; margin: 0 auto;">
                    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid var(--danger); padding: 1.5rem; border-radius: 12px;">
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--danger);">12+</div>
                        <div style="color: var(--gray); margin-top: 0.5rem;">Missing AI Features</div>
                    </div>
                    <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid var(--warning); padding: 1.5rem; border-radius: 12px;">
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--warning);">75%</div>
                        <div style="color: var(--gray); margin-top: 0.5rem;">Visual/UX Gap</div>
                    </div>
                    <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid var(--primary); padding: 1.5rem; border-radius: 12px;">
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary);">10-12</div>
                        <div style="color: var(--gray); margin-top: 0.5rem;">Weeks Estimated</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Visual Comparison Section -->
    <section id="visual-comparison" class="section dark-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Detailed Visual Comparison</h2>
                <p class="section-subtitle">Side-by-side analysis of all major screens</p>
            </div>

            <!-- Dashboard Comparison -->
            <div class="comparison-block">
                <h3 class="comparison-title">
                    <i class="fas fa-dashboard"></i> Main Dashboard
                </h3>
                <div class="comparison-grid">
                    <div class="comparison-item">
                        <h4>Current MVP</h4>
                        <div class="image-wrapper">
                            <img src="Figma/DashboardReal01.png" alt="Dashboard MVP">
                            <div class="image-overlay">
                                <span class="label bad">Basic Design</span>
                            </div>
                        </div>
                        <div class="comparison-details">
                            <ul>
                                <li>❌ Flat design without depth</li>
                                <li>❌ No user personalization</li>
                                <li>❌ Basic horizontal navigation</li>
                                <li>❌ No advanced interactive elements</li>
                                <li>❌ Limited and static metrics</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="comparison-item">
                        <h4>Figma Design</h4>
                        <div class="image-wrapper">
                            <img src="Figma/DashboardA01-G3340.png" alt="Dashboard Figma">
                            <div class="image-overlay">
                                <span class="label good">Premium Design</span>
                            </div>
                        </div>
                        <div class="comparison-details">
                            <ul>
                                <li>✅ Glassmorphism and 3D effects</li>
                                <li>✅ Avatar and full personalization</li>
                                <li>✅ Sidebar with vertical navigation</li>
                                <li>✅ Animated interactive charts</li>
                                <li>✅ Real-time metrics with AI insights</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="tech-requirements">
                    <h4>Technologies Needed for Transition</h4>
                    <div class="tech-pills">
                        <span class="tech-pill">TailwindCSS</span>
                        <span class="tech-pill">Framer Motion</span>
                        <span class="tech-pill">React Spring</span>
                        <span class="tech-pill">Recharts</span>
                    </div>
                </div>
            </div>

            <!-- Alternative Dashboard Views -->
            <div class="comparison-block">
                <h3 class="comparison-title">
                    <i class="fas fa-th-large"></i> Dashboard Variations
                </h3>
                <div class="gallery-grid">
                    <div class="gallery-item">
                        <img src="Figma/Dashboard01-G626542.png" alt="Dashboard Variation 1">
                        <div class="gallery-caption">
                            <h4>Colorful Dashboard</h4>
                            <p>Vibrant design with AI chat integration</p>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="Figma/Dashboard02-G626537.png" alt="Dashboard Variation 2">
                        <div class="gallery-caption">
                            <h4>Activity Dashboard</h4>
                            <p>Focus on time tracking and progress</p>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="Figma/Dashboard03-G626526.png" alt="Dashboard Variation 3">
                        <div class="gallery-caption">
                            <h4>Analytics Dashboard</h4>
                            <p>Data-driven insights and metrics</p>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="Figma/DashboardA02-G3364.png" alt="Dashboard Alternative">
                        <div class="gallery-caption">
                            <h4>Alternative Layout</h4>
                            <p>Different approach to information architecture</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Login/Signup Comparison -->
            <div class="comparison-block">
                <h3 class="comparison-title">
                    <i class="fas fa-sign-in-alt"></i> Authentication Screens
                </h3>
                <div class="comparison-grid">
                    <div class="comparison-item">
                        <h4>Current MVP - Login</h4>
                        <div class="image-wrapper">
                            <img src="Figma/LoginReal.png" alt="Login MVP">
                            <div class="image-overlay">
                                <span class="label bad">Basic Form</span>
                            </div>
                        </div>
                        <div class="comparison-details">
                            <ul>
                                <li>❌ Minimalist design without branding</li>
                                <li>❌ No social login options</li>
                                <li>❌ Simple centered layout</li>
                                <li>❌ No animations or effects</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="comparison-item">
                        <h4>Figma Design - Login</h4>
                        <div class="image-wrapper">
                            <img src="Figma/SignIn01-G3092.png" alt="Login Figma">
                            <div class="image-overlay">
                                <span class="label good">Immersive Experience</span>
                            </div>
                        </div>
                        <div class="comparison-details">
                            <ul>
                                <li>✅ Futuristic design with AI visuals</li>
                                <li>✅ Social login (Google/Apple)</li>
                                <li>✅ Split layout with 3D graphics</li>
                                <li>✅ Animations and particles</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Signup Screens -->
                <div class="comparison-grid" style="margin-top: 2rem;">
                    <div class="comparison-item">
                        <h4>Current MVP - Signup</h4>
                        <div class="image-wrapper">
                            <img src="Figma/SignupReal.png" alt="Signup MVP">
                            <div class="image-overlay">
                                <span class="label bad">Standard Form</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="comparison-item">
                        <h4>Figma Design - Signup</h4>
                        <div class="image-wrapper">
                            <img src="Figma/SignUp01-G3093.png" alt="Signup Figma">
                            <div class="image-overlay">
                                <span class="label good">Modern Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="tech-requirements">
                    <h4>Technologies Needed for Enhancement</h4>
                    <div class="tech-pills">
                        <span class="tech-pill">NextAuth (existing)</span>
                        <span class="tech-pill">Social OAuth</span>
                        <span class="tech-pill">Particles.js</span>
                        <span class="tech-pill">CSS Animations</span>
                    </div>
                </div>
            </div>

            <!-- Personal AI Comparison -->
            <div class="comparison-block">
                <h3 class="comparison-title">
                    <i class="fas fa-robot"></i> Personal AI Assistant
                </h3>
                <div class="comparison-grid">
                    <div class="comparison-item">
                        <h4>Current MVP</h4>
                        <div style="background: rgba(239, 68, 68, 0.1); border: 2px dashed var(--danger); border-radius: 12px; padding: 4rem; text-align: center;">
                            <i class="fas fa-times-circle" style="font-size: 4rem; color: var(--danger); margin-bottom: 1rem;"></i>
                            <h3 style="color: var(--danger);">NOT IMPLEMENTED</h3>
                            <p style="color: var(--gray); margin-top: 1rem;">MVP has no AI functionality</p>
                        </div>
                        <div class="comparison-details">
                            <ul>
                                <li>❌ No chat bot</li>
                                <li>❌ No virtual assistant</li>
                                <li>❌ No natural language processing</li>
                                <li>❌ No content generation</li>
                                <li>❌ No predictive analytics</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="comparison-item">
                        <h4>Figma Design</h4>
                        <div class="image-wrapper">
                            <img src="Figma/PersonalAI01-G626528.png" alt="Personal AI Figma">
                            <div class="image-overlay">
                                <span class="label good">Advanced AI</span>
                            </div>
                        </div>
                        <div class="comparison-details">
                            <ul>
                                <li>✅ Intelligent conversational chat</li>
                                <li>✅ Personalized virtual tutor</li>
                                <li>✅ Document processing</li>
                                <li>✅ Educational content generation</li>
                                <li>✅ Analysis and recommendations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- AI Variations Gallery -->
                <h4 style="margin: 2rem 0 1rem;">Personal AI Interface Variations</h4>
                <div class="gallery-grid">
                    <div class="gallery-item">
                        <img src="Figma/PersonalAI02-G3366.png" alt="AI Variation 1">
                        <div class="gallery-caption">
                            <h4>AI Chat Interface</h4>
                            <p>Conversational learning assistant</p>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="Figma/PersonalAI02-G3368.png" alt="AI Variation 2">
                        <div class="gallery-caption">
                            <h4>AI Dashboard</h4>
                            <p>AI-powered insights and analytics</p>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="Figma/PersonalAI02-G3370.png" alt="AI Variation 3">
                        <div class="gallery-caption">
                            <h4>Document Analysis</h4>
                            <p>AI document processing interface</p>
                        </div>
                    </div>
                </div>
                
                <div class="tech-requirements">
                    <h4>Technologies Needed for AI Implementation</h4>
                    <div class="tech-pills">
                        <span class="tech-pill">OpenAI API</span>
                        <span class="tech-pill">LangChain</span>
                        <span class="tech-pill">Vector Database</span>
                        <span class="tech-pill">WebSockets</span>
                    </div>
                </div>
            </div>

            <!-- Chat Bot Interface -->
            <div class="comparison-block">
                <h3 class="comparison-title">
                    <i class="fas fa-comments"></i> Chat Bot Interface
                </h3>
                <div class="gallery-grid">
                    <div class="gallery-item">
                        <img src="Figma/ChatBot01-G626550.png" alt="Chat Bot">
                        <div class="gallery-caption">
                            <h4>AI Chat Assistant</h4>
                            <p>Real-time educational support with NLP</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Personal Lessons -->
            <div class="comparison-block">
                <h3 class="comparison-title">
                    <i class="fas fa-graduation-cap"></i> Personal Lessons Interface
                </h3>
                <div class="gallery-grid">
                    <div class="gallery-item">
                        <img src="Figma/PersonalLessons01-G626533.png" alt="Lessons 1">
                        <div class="gallery-caption">
                            <h4>Lesson Overview</h4>
                            <p>Personalized learning paths</p>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="Figma/PersonalLessons01-G626534.png" alt="Lessons 2">
                        <div class="gallery-caption">
                            <h4>Course Content</h4>
                            <p>Interactive lesson materials</p>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="Figma/PersonalLessons01-G626535.png" alt="Lessons 3">
                        <div class="gallery-caption">
                            <h4>Progress Tracking</h4>
                            <p>Detailed progress analytics</p>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="Figma/PersonalLessons02-G3115.png" alt="Lessons 4">
                        <div class="gallery-caption">
                            <h4>Alternative View</h4>
                            <p>Different lesson layout approach</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Settings -->
            <div class="comparison-block">
                <h3 class="comparison-title">
                    <i class="fas fa-cog"></i> Settings Interface
                </h3>
                <div class="gallery-grid">
                    <div class="gallery-item">
                        <img src="Figma/Settings01-G626531.png" alt="Settings 1">
                        <div class="gallery-caption">
                            <h4>User Settings</h4>
                            <p>Comprehensive user preferences</p>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="Figma/Settings01-G626532.png" alt="Settings 2">
                        <div class="gallery-caption">
                            <h4>Advanced Settings</h4>
                            <p>AI and personalization options</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Other Screens Comparison -->
            <div class="comparison-block">
                <h3 class="comparison-title">
                    <i class="fas fa-th"></i> Additional Screens
                </h3>
                <div class="gallery-grid">
                    <div class="gallery-item">
                        <img src="Figma/HomeReal01.png" alt="Home Real">
                        <div class="gallery-caption">
                            <h4>Current Home</h4>
                            <p>MVP home screen implementation</p>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="Figma/ProfileReal01.png" alt="Profile Real">
                        <div class="gallery-caption">
                            <h4>Current Profile</h4>
                            <p>Basic user profile page</p>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="Figma/LeaderBoardReal01.png" alt="Leaderboard">
                        <div class="gallery-caption">
                            <h4>Leaderboard</h4>
                            <p>Gamification element</p>
                        </div>
                    </div>
                    <div class="gallery-item">
                        <img src="Figma/AssignmentReal01.png" alt="Assignments">
                        <div class="gallery-caption">
                            <h4>Assignments</h4>
                            <p>Task management interface</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

// Load content when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content-container');
    if (container) {
        container.innerHTML = contentHTML;
    }
});
