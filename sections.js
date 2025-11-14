// Additional sections content with time estimates
const additionalSections = `
    <!-- AI Features Section -->
    <section id="ai-features" class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">
                    <span class="gradient-text">Artificial Intelligence</span> Features Gap
                </h2>
                <p class="section-subtitle">The MVP currently lacks all AI features shown in the Figma design</p>
            </div>

            <div class="ai-features-grid">
                <div class="ai-card">
                    <div class="ai-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    <h3>Personal AI Assistant</h3>
                    <p>Personalized virtual tutor with capabilities for:</p>
                    <ul>
                        <li>Conversational chat with NLP</li>
                        <li>Contextual responses</li>
                        <li>Content generation</li>
                        <li>Document analysis</li>
                    </ul>
                    <div class="implementation-box">
                        <h4>Recommended Stack</h4>
                        <div class="tech-stack">
                            <span>OpenAI API</span>
                            <span>LangChain</span>
                            <span>Redis (existing)</span>
                            <span>WebSockets</span>
                        </div>
                        <p style="margin-top: 1rem; color: var(--warning);">
                            <i class="fas fa-clock"></i> <strong>Time: 2-3 weeks</strong>
                        </p>
                    </div>
                </div>

                <div class="ai-card">
                    <div class="ai-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3>Adaptive Learning</h3>
                    <p>Adaptive learning system with:</p>
                    <ul>
                        <li>Study pattern analysis</li>
                        <li>Personalized recommendations</li>
                        <li>Automatic difficulty adjustment</li>
                        <li>Performance prediction</li>
                    </ul>
                    <div class="implementation-box">
                        <h4>Recommended Stack</h4>
                        <div class="tech-stack">
                            <span>TensorFlow.js</span>
                            <span>MongoDB (existing)</span>
                            <span>Node.js ML APIs</span>
                            <span>Redis caching</span>
                        </div>
                        <p style="margin-top: 1rem; color: var(--warning);">
                            <i class="fas fa-clock"></i> <strong>Time: 3-4 weeks</strong>
                        </p>
                    </div>
                </div>

                <div class="ai-card">
                    <div class="ai-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Predictive Analytics</h3>
                    <p>Advanced predictive analytics with:</p>
                    <ul>
                        <li>Dropout prediction</li>
                        <li>Engagement analysis</li>
                        <li>Learning path optimization</li>
                        <li>Real-time insights</li>
                    </ul>
                    <div class="implementation-box">
                        <h4>Recommended Stack</h4>
                        <div class="tech-stack">
                            <span>Python APIs</span>
                            <span>Scikit-learn</span>
                            <span>Chart.js</span>
                            <span>MongoDB Aggregation</span>
                        </div>
                        <p style="margin-top: 1rem; color: var(--warning);">
                            <i class="fas fa-clock"></i> <strong>Time: 2-3 weeks</strong>
                        </p>
                    </div>
                </div>

                <div class="ai-card">
                    <div class="ai-icon">
                        <i class="fas fa-microphone"></i>
                    </div>
                    <h3>Voice & Vision AI</h3>
                    <p>Multimodal capabilities with:</p>
                    <ul>
                        <li>Voice commands</li>
                        <li>Text-to-Speech</li>
                        <li>Document OCR</li>
                        <li>Video analysis</li>
                    </ul>
                    <div class="implementation-box">
                        <h4>Recommended Stack</h4>
                        <div class="tech-stack">
                            <span>Web Speech API</span>
                            <span>Google Vision</span>
                            <span>Whisper API</span>
                            <span>WebRTC</span>
                        </div>
                        <p style="margin-top: 1rem; color: var(--warning);">
                            <i class="fas fa-clock"></i> <strong>Time: 3-4 weeks</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

// Append additional sections to content
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content-container');
    if (container) {
        container.innerHTML += additionalSections;
    }
});
