// Roadmap and estimation sections with detailed time breakdowns
const roadmapContent = `
    <!-- Tech Stack Section -->
    <section id="tech-stack" class="section dark-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Technology Stack Evolution</h2>
                <p class="section-subtitle">Building on existing technologies with strategic enhancements</p>
            </div>

            <div class="tech-comparison">
                <div class="tech-column current">
                    <h3><i class="fas fa-server"></i> Current Stack (MVP)</h3>
                    <div class="tech-category">
                        <h4>Frontend</h4>
                        <div class="tech-items">
                            <div class="tech-item existing">NextJs</div>
                            <div class="tech-item existing">TypeScript</div>
                            <div class="tech-item existing">Ant Design</div>
                            <div class="tech-item existing">Redux Toolkit</div>
                            <div class="tech-item existing">RTK Query</div>
                        </div>
                    </div>
                    <div class="tech-category">
                        <h4>Backend</h4>
                        <div class="tech-items">
                            <div class="tech-item existing">Node.js</div>
                            <div class="tech-item existing">Express</div>
                            <div class="tech-item existing">MongoDB</div>
                            <div class="tech-item existing">Mongoose</div>
                            <div class="tech-item existing">JWT/Passport</div>
                        </div>
                    </div>
                    <div class="tech-category">
                        <h4>Services</h4>
                        <div class="tech-items">
                            <div class="tech-item existing">Cloudinary</div>
                            <div class="tech-item existing">NodeMailer</div>
                            <div class="tech-item existing">Handlebars</div>
                        </div>
                    </div>
                </div>

                <div class="tech-arrow">
                    <i class="fas fa-arrow-right"></i>
                    <span>ENHANCE</span>
                </div>

                <div class="tech-column target">
                    <h3><i class="fas fa-rocket"></i> Enhanced Stack (Target)</h3>
                    <div class="tech-category">
                        <h4>Frontend Enhancements</h4>
                        <div class="tech-items">
                            <div class="tech-item existing">NextJs (keep)</div>
                            <div class="tech-item existing">TypeScript (keep)</div>
                            <div class="tech-item enhancement">TailwindCSS (add)</div>
                            <div class="tech-item enhancement">Framer Motion</div>
                            <div class="tech-item enhancement">Shadcn/ui</div>
                            <div class="tech-item existing">Redux (optimize)</div>
                        </div>
                    </div>
                    <div class="tech-category">
                        <h4>Backend & AI</h4>
                        <div class="tech-items">
                            <div class="tech-item existing">Node.js (keep)</div>
                            <div class="tech-item existing">Express (keep)</div>
                            <div class="tech-item existing">MongoDB (keep)</div>
                            <div class="tech-item enhancement">OpenAI API</div>
                            <div class="tech-item enhancement">WebSockets</div>
                            <div class="tech-item enhancement">Redis Cache</div>
                        </div>
                    </div>
                    <div class="tech-category">
                        <h4>DevOps (Suggested)</h4>
                        <div class="tech-items">
                            <div class="tech-item optional">Docker</div>
                            <div class="tech-item optional">CI/CD Pipeline</div>
                            <div class="tech-item optional">PM2/Monitoring</div>
                            <div class="tech-item optional">CDN</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Roadmap Section -->
    <section id="roadmap" class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Implementation Roadmap</h2>
                <p class="section-subtitle">Detailed 20-week plan to achieve the Figma vision</p>
            </div>

            <div class="roadmap-container">
                <div class="roadmap-phase">
                    <div class="phase-header">
                        <span class="phase-number">PHASE 1</span>
                        <h3>Foundation & Design System</h3>
                        <span class="phase-duration">Weeks 1-4</span>
                    </div>
                    <div class="phase-content">
                        <div class="task-list">
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Setup TailwindCSS with existing NextJs (1 week)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Create glassmorphism components library (1 week)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Implement dark/light theme toggle (3 days)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Add Framer Motion animations (1 week)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Update layout to sidebar navigation (2 days)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Create reusable UI components (Shadcn/ui) (3 days)</span>
                            </div>
                        </div>
                        <div class="deliverables">
                            <h4>Deliverables</h4>
                            <ul>
                                <li>Complete design system</li>
                                <li>Component library</li>
                                <li>Responsive layouts</li>
                                <li>Theme switching</li>
                                <li>Animation framework</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="roadmap-phase">
                    <div class="phase-header">
                        <span class="phase-number">PHASE 2</span>
                        <h3>Core Features Enhancement</h3>
                        <span class="phase-duration">Weeks 5-10</span>
                    </div>
                    <div class="phase-content">
                        <div class="task-list">
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Redesign dashboard with advanced metrics (2 weeks)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Implement gamification system (2 weeks)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Add social login (Google, Apple) (1 week)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Create leaderboard and achievements (1 week)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Implement real-time notifications (WebSockets) (3 days)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Add progress tracking visualizations (4 days)</span>
                            </div>
                        </div>
                        <div class="deliverables">
                            <h4>Deliverables</h4>
                            <ul>
                                <li>Interactive dashboard</li>
                                <li>Achievement system</li>
                                <li>Functional leaderboard</li>
                                <li>OAuth integration</li>
                                <li>Real-time updates</li>
                                <li>Progress analytics</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="roadmap-phase">
                    <div class="phase-header">
                        <span class="phase-number">PHASE 3</span>
                        <h3>AI & Machine Learning Integration</h3>
                        <span class="phase-duration">Weeks 11-18</span>
                    </div>
                    <div class="phase-content">
                        <div class="task-list">
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Integrate OpenAI GPT API (1 week)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Develop Personal AI Assistant (3 weeks)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Build recommendation system (2 weeks)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Implement predictive analytics (1.5 weeks)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Create AI-powered content suggestions (1 week)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Implement adaptive learning paths (3 days)</span>
                            </div>
                        </div>
                        <div class="deliverables">
                            <h4>Deliverables</h4>
                            <ul>
                                <li>Functional AI chat</li>
                                <li>Adaptive system</li>
                                <li>Analytics dashboard</li>
                                <li>ML recommendations</li>
                                <li>Content suggestions</li>
                                <li>Personalized learning</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="roadmap-phase">
                    <div class="phase-header">
                        <span class="phase-number">PHASE 4</span>
                        <h3>Testing & Deployment</h3>
                        <span class="phase-duration">Weeks 19-20</span>
                    </div>
                    <div class="phase-content">
                        <div class="task-list">
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Comprehensive testing (Unit, Integration, E2E) (1 week)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Performance optimization and caching (3 days)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Bug fixes and refinements (2 days)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Security audit and fixes (2 days)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Production deployment and monitoring setup (1 day)</span>
                            </div>
                            <div class="task">
                                <i class="fas fa-circle"></i>
                                <span>Documentation and handover (1 day)</span>
                            </div>
                        </div>
                        <div class="deliverables">
                            <h4>Deliverables</h4>
                            <ul>
                                <li>Complete platform</li>
                                <li>Test coverage reports</li>
                                <li>Documentation</li>
                                <li>Production deploy</li>
                                <li>Monitoring dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Detailed Timeline -->
            <div style="margin-top: 4rem; background: rgba(99, 102, 241, 0.1); border-radius: 20px; padding: 2rem;">
                <h3 style="text-align: center; margin-bottom: 2rem;">Detailed Development Timeline</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: rgba(99, 102, 241, 0.2);">
                            <th style="padding: 1rem; text-align: left;">Feature</th>
                            <th style="padding: 1rem; text-align: center;">Time Estimate</th>
                            <th style="padding: 1rem; text-align: center;">Priority</th>
                            <th style="padding: 1rem; text-align: center;">Complexity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 1rem;">Design System & UI</td>
                            <td style="padding: 1rem; text-align: center;">4 weeks</td>
                            <td style="padding: 1rem; text-align: center;"><span style="background: var(--danger); color: white; padding: 0.25rem 0.5rem; border-radius: 4px;">High</span></td>
                            <td style="padding: 1rem; text-align: center;">Medium</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 1rem;">Gamification System</td>
                            <td style="padding: 1rem; text-align: center;">2 weeks</td>
                            <td style="padding: 1rem; text-align: center;"><span style="background: var(--warning); color: var(--dark); padding: 0.25rem 0.5rem; border-radius: 4px;">Medium</span></td>
                            <td style="padding: 1rem; text-align: center;">Low</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 1rem;">Social Login</td>
                            <td style="padding: 1rem; text-align: center;">1 week</td>
                            <td style="padding: 1rem; text-align: center;"><span style="background: var(--warning); color: var(--dark); padding: 0.25rem 0.5rem; border-radius: 4px;">Medium</span></td>
                            <td style="padding: 1rem; text-align: center;">Low</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 1rem;">AI Chat Bot</td>
                            <td style="padding: 1rem; text-align: center;">4 weeks</td>
                            <td style="padding: 1rem; text-align: center;"><span style="background: var(--danger); color: white; padding: 0.25rem 0.5rem; border-radius: 4px;">High</span></td>
                            <td style="padding: 1rem; text-align: center;">High</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 1rem;">Recommendation System</td>
                            <td style="padding: 1rem; text-align: center;">2 weeks</td>
                            <td style="padding: 1rem; text-align: center;"><span style="background: var(--warning); color: var(--dark); padding: 0.25rem 0.5rem; border-radius: 4px;">Medium</span></td>
                            <td style="padding: 1rem; text-align: center;">High</td>
                        </tr>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                            <td style="padding: 1rem;">Analytics Dashboard</td>
                            <td style="padding: 1rem; text-align: center;">2 weeks</td>
                            <td style="padding: 1rem; text-align: center;"><span style="background: var(--success); color: white; padding: 0.25rem 0.5rem; border-radius: 4px;">Low</span></td>
                            <td style="padding: 1rem; text-align: center;">Medium</td>
                        </tr>
                        <tr>
                            <td style="padding: 1rem;">Testing & Deployment</td>
                            <td style="padding: 1rem; text-align: center;">2 weeks</td>
                            <td style="padding: 1rem; text-align: center;"><span style="background: var(--danger); color: white; padding: 0.25rem 0.5rem; border-radius: 4px;">High</span></td>
                            <td style="padding: 1rem; text-align: center;">Low</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- Estimation Section -->
    <section id="estimation" class="section dark-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Time & Resource Estimation</h2>
                <p class="section-subtitle">Realistic investment needed to achieve the Figma vision</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin: 3rem 0;">
                <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid var(--primary); border-radius: 16px; padding: 2rem;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;">⏱️ Total Time</h3>
                    <div style="font-size: 3rem; font-weight: 800; color: var(--primary); margin-bottom: 1rem;">16-20</div>
                    <div style="color: var(--gray);">Weeks of development</div>
                    <ul style="list-style: none; margin-top: 1.5rem;">
                        <li style="padding: 0.5rem 0;">• Week 1-4: Design System</li>
                        <li style="padding: 0.5rem 0;">• Week 5-10: Core Features</li>
                        <li style="padding: 0.5rem 0;">• Week 11-18: AI Integration</li>
                        <li style="padding: 0.5rem 0;">• Week 19-20: Testing & Deploy</li>
                    </ul>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success); border-radius: 16px; padding: 2rem;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;">👨‍💻 Team Required</h3>
                    <div style="font-size: 3rem; font-weight: 800; color: var(--success); margin-bottom: 1rem;">1</div>
                    <div style="color: var(--gray);">Senior Full-Stack Developer</div>
                    <ul style="list-style: none; margin-top: 1.5rem;">
                        <li style="padding: 0.5rem 0;">✓ Full-Stack (NextJs/Node)</li>
                        <li style="padding: 0.5rem 0;">✓ AI/ML Integration</li>
                        <li style="padding: 0.5rem 0;">✓ DevOps & Deployment</li>
                        <li style="padding: 0.5rem 0;">✓ Single point of responsibility</li>
                    </ul>
                </div>

                <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid var(--warning); border-radius: 16px; padding: 2rem;">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;">💰 Estimated Investment</h3>
                    <div style="font-size: 3rem; font-weight: 800; color: var(--warning); margin-bottom: 1rem;">$35-50K</div>
                    <div style="color: var(--gray);">USD for complete development</div>
                    <ul style="list-style: none; margin-top: 1.5rem;">
                        <li style="padding: 0.5rem 0;">• Development: $30-42K</li>
                        <li style="padding: 0.5rem 0;">• AI APIs: $2-3K/year</li>
                        <li style="padding: 0.5rem 0;">• Infrastructure: $200-500/month</li>
                        <li style="padding: 0.5rem 0;">• Testing/QA: $3-5K</li>
                    </ul>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1)); border: 1px solid var(--primary); border-radius: 20px; padding: 3rem; margin-top: 3rem; text-align: center;">
                <h3 style="font-size: 2rem; margin-bottom: 2rem;">🚀 Conclusions & Recommendations</h3>
                <p style="font-size: 1.1rem; line-height: 1.8; max-width: 800px; margin: 0 auto; color: var(--light);">
                    The current MVP provides a solid functional foundation that can be enhanced incrementally.
                    The main investment should focus on:
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin: 2rem auto; max-width: 800px;">
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 12px;">
                        <strong style="color: var(--primary);">1. Modern UI/UX</strong>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">Implement glassmorphism and animations</p>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 12px;">
                        <strong style="color: var(--primary);">2. AI Integration</strong>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">Chat bot and adaptive personalization</p>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 12px;">
                        <strong style="color: var(--primary);">3. Gamification</strong>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">Rewards system and leaderboards</p>
                    </div>
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 1.5rem; border-radius: 12px;">
                        <strong style="color: var(--primary);">4. Optimization</strong>
                        <p style="font-size: 0.9rem; margin-top: 0.5rem;">Performance and scalability</p>
                    </div>
                </div>
                <p style="font-size: 1.2rem; margin-top: 2rem; font-weight: 600; color: var(--primary);">
                    Expected ROI: 250-350% in the first year post-launch
                </p>
            </div>
        </div>
    </section>
`;

// Append roadmap content to container
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content-container');
    if (container) {
        container.innerHTML += roadmapContent;
    }
});
