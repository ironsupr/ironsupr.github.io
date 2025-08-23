// Environment Configuration for Portfolio
// =====================================

// Configuration loader for environment variables
// This file should be loaded before any API calls

class EnvironmentConfig {
    constructor() {
        this.config = {};
        this.loadConfig();
    }

    loadConfig() {
        // For client-side applications, you would typically load these from:
        // 1. Build-time environment variable injection
        // 2. A secure configuration endpoint
        // 3. Or set them manually here (NOT recommended for production)
        
        this.config = {
            // WARNING: Do not put real API keys here in production!
            // This is just for development/demo purposes
            GEMINI_API_KEY: '', // Set your API key here for testing
            GEMINI_MODEL: 'gemini-2.5-flash-preview-05-20',
            GEMINI_API_BASE_URL: 'https://generativelanguage.googleapis.com/v1beta/models',
            
            // Contact information
            CONTACT_EMAIL: 'abhinavsingh25001@gmail.com',
            LINKEDIN_URL: 'https://www.linkedin.com/in/abhinav-singh-aslcj3000',
            GITHUB_URL: 'https://github.com/ironsupr',
            
            // Development
            NODE_ENV: 'development',
            DEBUG: true
        };

        // Try to load from localStorage (for development)
        try {
            const savedConfig = localStorage.getItem('portfolioConfig');
            if (savedConfig) {
                const parsed = JSON.parse(savedConfig);
                // Merge saved config with defaults, giving priority to saved values
                Object.keys(parsed).forEach(key => {
                    if (parsed[key] && parsed[key] !== '') {
                        this.config[key] = parsed[key];
                    }
                });
            }
        } catch (e) {
            console.warn('Could not load config from localStorage:', e);
        }

        // Auto-detect production environment
        if (this.isProductionEnvironment()) {
            this.config.NODE_ENV = 'production';
            this.config.DEBUG = false;
        }
    }

    isProductionEnvironment() {
        // Check various indicators of production environment
        return window.location.hostname.includes('github.io') || 
               window.location.hostname.includes('netlify.app') ||
               window.location.hostname.includes('vercel.app') ||
               (window.location.protocol === 'https:' && 
                !window.location.hostname.includes('localhost') &&
                !window.location.hostname.includes('127.0.0.1'));
    }

    get(key) {
        return this.config[key];
    }

    set(key, value) {
        this.config[key] = value;
        this.saveConfig();
    }

    saveConfig() {
        try {
            // Only save non-sensitive config to localStorage
            const safeConfig = {
                GEMINI_MODEL: this.config.GEMINI_MODEL,
                NODE_ENV: this.config.NODE_ENV,
                DEBUG: this.config.DEBUG
            };
            localStorage.setItem('portfolioConfig', JSON.stringify(safeConfig));
        } catch (e) {
            console.warn('Could not save config to localStorage:', e);
        }
    }

    getGeminiApiUrl() {
        const baseUrl = this.get('GEMINI_API_BASE_URL');
        const model = this.get('GEMINI_MODEL');
        const apiKey = this.get('GEMINI_API_KEY');
        
        return `${baseUrl}/${model}:generateContent?key=${apiKey}`;
    }

    isProduction() {
        return this.get('NODE_ENV') === 'production';
    }

    isDebugMode() {
        return this.get('DEBUG');
    }

    // Check if configuration is complete
    isConfigured() {
        const geminiKey = this.get('GEMINI_API_KEY');
        return geminiKey && geminiKey !== '';
    }

    // Get missing configuration items
    getMissingConfig() {
        const missing = [];
        if (!this.get('GEMINI_API_KEY') || this.get('GEMINI_API_KEY') === '') missing.push('Gemini API Key');
        return missing;
    }

    // Show configuration help
    showConfigHelp() {
        if (!this.isConfigured()) {
            console.warn('⚠️ Portfolio not fully configured!');
            console.log('Missing:', this.getMissingConfig());
            console.log('🔧 Run setup.html to configure or check GITHUB_SETUP.md for deployment instructions');
        }
    }
}

// Export for use in other files
const envConfig = new EnvironmentConfig();

// For browser environments
if (typeof window !== 'undefined') {
    window.envConfig = envConfig;
    
    // Log configuration status for debugging
    if (envConfig.isDebugMode()) {
        console.log('🔧 Environment Config Loaded:', {
            isProduction: envConfig.isProduction(),
            isConfigured: envConfig.isConfigured(),
            missing: envConfig.getMissingConfig(),
            hostname: window.location.hostname,
            environment: envConfig.get('NODE_ENV'),
            hasGeminiKey: !!envConfig.get('GEMINI_API_KEY')
        });
        
        // Show configuration help if needed
        envConfig.showConfigHelp();
    }
    
    // Always log configuration status in production for debugging
    if (envConfig.isProduction()) {
        console.log('🚀 Production Environment:', {
            isConfigured: envConfig.isConfigured(),
            missing: envConfig.getMissingConfig(),
            hostname: window.location.hostname
        });
    }
}

// For Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = envConfig;
}
