document.addEventListener('DOMContentLoaded', function() {
    // Animate name letters
    const letters = document.querySelectorAll('.letter');
    
    if (typeof gsap !== 'undefined') {
        // Using GSAP for smoother animations if available
        gsap.from(letters, {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            onComplete: createCircuitLines
        });
        
        // Animate scroll indicator
        gsap.to('.scroll-indicator', {
            opacity: 1,
            duration: 1,
            delay: 2
        });
    } else {
        // Fallback to CSS animations
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = 1;
                letter.style.transform = 'translateY(0)';
            }, 100 * index);
        });
        
        // Show scroll indicator after name animation
        setTimeout(() => {
            document.querySelector('.scroll-indicator').style.opacity = 1;
        }, 2000);
        
        // Create circuit lines after name animation
        setTimeout(createCircuitLines, 2000);
    }
    
    // Circuit "O" effects
    const circuitNodes = document.querySelectorAll('.circuit-node');
    circuitNodes.forEach(node => {
        node.addEventListener('mouseover', pulseEffect);
    });
});

// Create animated circuit lines from the "O" letters
function createCircuitLines() {
    const circuitContainer = document.querySelector('.circuit-lines');
    const oLetters = document.querySelectorAll('.o-letter');
    
    // Clear existing lines
    circuitContainer.innerHTML = '';
    
    oLetters.forEach(letter => {
        // Create a random number of lines (2-4) from each "O"
        const lineCount = Math.floor(Math.random() * 3) + 2;
        
        for (let i = 0; i < lineCount; i++) {
            createRandomLine(letter, circuitContainer);
        }
    });
}

// Create a single animated circuit line
function createRandomLine(source, container) {
    const rect = source.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    // Starting position (center of the "O")
    const startX = rect.left + rect.width / 2 - containerRect.left;
    const startY = rect.top + rect.height / 2 - containerRect.top;
    
    // Generate random line properties
    const angle = Math.random() * Math.PI * 2; // Random angle
    const length = 50 + Math.random() * 150; // Random length (50-200px)
    
    // Calculate end position
    const endX = startX + Math.cos(angle) * length;
    const endY = startY + Math.sin(angle) * length;
    
    // Create the line element
    const line = document.createElement('div');
    line.classList.add('circuit-line');
    
    // Set line position and rotation
    line.style.height = '2px';
    line.style.width = `${length}px`;
    line.style.left = `${startX}px`;
    line.style.top = `${startY}px`;
    line.style.transformOrigin = '0 0';
    line.style.transform = `rotate(${angle}rad)`;
    
    // Add to container
    container.appendChild(line);
    
    // Animate the line
    setTimeout(() => {
        line.style.opacity = 0.4;
        
        // Make line disappear after a random duration
        setTimeout(() => {
            line.style.opacity = 0;
            
            // Remove line from DOM after fade out
            setTimeout(() => {
                line.remove();
            }, 1000);
        }, 2000 + Math.random() * 3000);
    }, Math.random() * 500);
}

// Create pulse effect when hovering over circuit nodes
function pulseEffect(e) {
    const node = e.target;
    const rect = node.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'transparent';
    ripple.style.border = '2px solid var(--circuit-blue)';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.zIndex = '1000';
    ripple.style.pointerEvents = 'none';
    
    document.body.appendChild(ripple);
    
    // Animate ripple expansion
    if (typeof gsap !== 'undefined') {
        gsap.to(ripple, {
            width: '100px',
            height: '100px',
            opacity: 0,
            duration: 1,
            onComplete: () => ripple.remove()
        });
    } else {
        // CSS transition fallback
        ripple.style.transition = 'all 1s ease';
        setTimeout(() => {
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.opacity = 0;
        }, 10);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    }
}