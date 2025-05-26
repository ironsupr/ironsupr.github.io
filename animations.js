// 3D Animations for Portfolio Website
// Background particles animation for home section
function initBackgroundAnimation() {
    const container = document.getElementById('bg-canvas');
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Create particle geometry
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    // Fill with random positions
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 50;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create particle material
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.2,
        color: 0x8A2BE2, // Blueviolet color to match theme
        transparent: true,
        opacity: 0.8
    });
    
    // Create particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    
    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - window.innerWidth / 2) / 100;
        mouseY = (event.clientY - window.innerHeight / 2) / 100;
    }
    
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        particlesMesh.rotation.x += 0.001;
        particlesMesh.rotation.y += 0.001;
        
        // Add mouse interaction
        particlesMesh.rotation.x += mouseY * 0.001;
        particlesMesh.rotation.y += mouseX * 0.001;
        
        renderer.render(scene, camera);
    }
    
    // Handle window resize
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    window.addEventListener('resize', onWindowResize);
    
    // Start animation
    animate();
}

// 3D Skills visualization for about section
function initSkillsVisualization() {
    const container = document.getElementById('skills-canvas');
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Create an array of skill objects with colors
    const skills = [
        { name: "HTML", color: 0xE44D26 },
        { name: "CSS", color: 0x264DE4 },
        { name: "JavaScript", color: 0xF7DF1E },
        { name: "React", color: 0x61DAFB },
        { name: "Python", color: 0x3776AB },
        { name: "Django", color: 0x092E20 },
        { name: "Node.js", color: 0x68A063 },
        { name: "TensorFlow", color: 0xFF6F00 }
    ];
    
    // Create floating 3D spheres for each skill
    const spheres = [];
    
    skills.forEach((skill, index) => {
        const geometry = new THREE.SphereGeometry(1.5, 32, 32);
        const material = new THREE.MeshBasicMaterial({ 
            color: skill.color,
            transparent: true,
            opacity: 0.7
        });
        
        const sphere = new THREE.Mesh(geometry, material);
        
        // Position spheres in a circular pattern
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 12;
        sphere.position.x = Math.cos(angle) * radius;
        sphere.position.y = Math.sin(angle) * radius;
        sphere.position.z = Math.random() * 5;
        
        // Add data to the sphere object for animation
        sphere.userData = {
            originalX: sphere.position.x,
            originalY: sphere.position.y,
            originalZ: sphere.position.z,
            speed: 0.01 + Math.random() * 0.01,
            amplitude: 0.5 + Math.random() * 0.5,
            phase: Math.random() * Math.PI * 2
        };
        
        scene.add(sphere);
        spheres.push(sphere);
    });
    
    // Add some light particles in the background
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 70;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.1,
        color: 0xFFFFFF,
        transparent: true,
        opacity: 0.3
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        // Animate each sphere
        const time = Date.now() * 0.001;
        
        spheres.forEach((sphere) => {
            const userData = sphere.userData;
            
            sphere.position.y = userData.originalY + Math.sin(time * userData.speed) * userData.amplitude;
            sphere.position.x = userData.originalX + Math.cos(time * userData.speed) * userData.amplitude * 0.5;
            
            sphere.rotation.x += 0.003;
            sphere.rotation.y += 0.005;
        });
        
        // Rotate particle system slowly
        particlesMesh.rotation.x += 0.0003;
        particlesMesh.rotation.y += 0.0005;
        
        renderer.render(scene, camera);
    }
    
    // Handle window resize
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    window.addEventListener('resize', onWindowResize);
    
    // Start animation
    animate();
}

// Initialize all animations when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    initBackgroundAnimation();
    // Skills visualization removed
});
