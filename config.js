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

    isProduction() {
        return this.get('NODE_ENV') === 'production';
    }

    isDebugMode() {
        return this.get('DEBUG');
    }

    // Check if configuration is complete
    isConfigured() {
        // For now, consider configuration always complete since no API keys are required
        return true;
    }

    // Get missing configuration items
    getMissingConfig() {
        // No required configuration items anymore
        return [];
    }

    // Show configuration help
    showConfigHelp() {
        if (!this.isConfigured()) {
            console.warn('⚠️ Portfolio not fully configured!');
            console.log('Missing:', this.getMissingConfig());
        } else {
            console.log('✅ Portfolio configuration complete!');
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
            environment: envConfig.get('NODE_ENV')
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
