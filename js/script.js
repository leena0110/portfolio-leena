// ============================================
// PORTFOLIO SCRIPT - CLEAN & PROFESSIONAL
// ============================================

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');
const currentPage = window.location.pathname;

// Color variables from CSS
const colors = {
    primary: '#0A1828',
    secondary: '#178582',
    accent: '#BFA181',
    surface: '#102238',
    surfaceAlt: '#1a2e45'
};

// Initialize Mobile Navigation
function initMobileNav() {
    if (!hamburger || !mainNav) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mainNav.contains(e.target)) {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Set Active Navigation Link
function setActiveNav() {
    const navLinks = document.querySelectorAll('.main-nav a');
    const currentPageName = currentPage.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        // Remove active class from all links
        link.classList.remove('active');
        
        // Check if this link matches current page
        if (linkHref === currentPageName || 
            (currentPageName === 'index.html' && linkHref === 'index.html') ||
            (currentPageName.includes(linkHref.replace('.html', '')) && linkHref !== 'index.html')) {
            link.classList.add('active');
        }
        
        // Special case for resume link
        if (linkHref.includes('resume.pdf') && currentPageName === 'resume.html') {
            link.classList.add('active');
        }
    });
}

// Initialize OTP Demo
function initOTPDemo() {
    const otpForm = document.getElementById('otp-form');
    const emailInput = document.getElementById('email');
    const otpInputs = document.querySelectorAll('.otp-input');
    const otpMessage = document.getElementById('otp-message');
    const submitBtn = document.getElementById('otp-submit');
    
    if (!otpForm) return;
    
    let generatedOTP = '';
    let otpSent = false;
    
    // Generate random 6-digit OTP
    function generateOTP() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
    
    // Auto-focus next OTP input
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });
        
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });
    
    // Form submission
    otpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!otpSent) {
            // Send OTP
            const email = emailInput.value.trim();
            
            if (!validateEmail(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Generate OTP
            generatedOTP = generateOTP();
            console.log(`OTP for ${email}: ${generatedOTP}`);
            
            // Show OTP inputs
            document.getElementById('otp-group').style.display = 'block';
            otpInputs[0].focus();
            otpSent = true;
            submitBtn.textContent = 'Verify OTP';
            
            showMessage(`OTP sent to ${email} (Check console for testing code)`, 'success');
        } else {
            // Verify OTP
            let enteredOTP = '';
            otpInputs.forEach(input => {
                enteredOTP += input.value;
            });
            
            if (enteredOTP === generatedOTP) {
                showMessage('Email verified successfully!', 'success');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Verified ✓';
                
                // Update button color to match new scheme
                submitBtn.style.background = `linear-gradient(45deg, ${colors.secondary}, #1a9c98)`;
                submitBtn.style.color = 'white';
            } else {
                showMessage('Invalid OTP. Please try again.', 'error');
            }
        }
    });
    
    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Show message
    function showMessage(message, type) {
        if (!otpMessage) return;
        
        otpMessage.textContent = message;
        otpMessage.className = `otp-message ${type}`;
        otpMessage.style.display = 'block';
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            otpMessage.style.display = 'none';
        }, 5000);
    }
}

// Initialize Project Page Interactions
function initProjectPages() {
    // Image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
    
    // Smooth scroll for anchor links within same page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize Animations on Scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add specific animations based on element type
                if (entry.target.classList.contains('skill-bar')) {
                    entry.target.style.animationPlayState = 'running';
                }
                
                // Add bounce effect to cards
                if (entry.target.classList.contains('edu-card') || 
                    entry.target.classList.contains('project-card') ||
                    entry.target.classList.contains('certificate-card')) {
                    entry.target.style.animation = 'staggerFadeIn 0.6s ease forwards';
                }
            }
        });
    }, observerOptions);
    
    // Observe all elements that should animate on scroll
    const elementsToAnimate = document.querySelectorAll(
        '.edu-card, .project-card, .certificate-card, .skill-category-horizontal, .skill-bar'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Open PDFs in modal lightbox
function initPDFViewer() {
    const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');
    
    pdfLinks.forEach(link => {
        // Skip if it's a resume link that should open in new tab
        if (link.getAttribute('href').includes('resume.pdf') && link.getAttribute('target') === '_blank') {
            return;
        }
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pdfUrl = link.getAttribute('href');
            showPDFModal(pdfUrl, link.textContent);
        });
    });
}

function showPDFModal(pdfUrl, title) {
    // Create modal container
    const modal = document.createElement('div');
    modal.className = 'pdf-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(10, 24, 40, 0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        backdrop-filter: blur(10px);
        font-family: 'Manrope', sans-serif;
    `;
    
    // Create modal content
    modal.innerHTML = `
        <div class="pdf-modal-content" style="
            background: ${colors.surface};
            border-radius: var(--radius-lg);
            width: 90%;
            height: 90%;
            display: flex;
            flex-direction: column;
            border: 1px solid ${colors.secondary};
            box-shadow: 0 24px 72px rgba(23, 133, 130, 0.3);
        ">
            <div class="pdf-modal-header" style="
                padding: 20px;
                border-bottom: 1px solid rgba(23, 133, 130, 0.3);
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: ${colors.primary};
            ">
                <h3 style="margin: 0; color: white; font-family: 'Manrope', sans-serif; font-weight: 600;">${title}</h3>
                <button class="close-modal" style="
                    background: ${colors.secondary};
                    border: none;
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 1.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    font-family: 'Manrope', sans-serif;
                ">×</button>
            </div>
            <div class="pdf-modal-body" style="flex: 1; padding: 20px; overflow: auto; background: ${colors.surface};">
                <iframe src="${pdfUrl}" style="
                    width: 100%;
                    height: 100%;
                    border: none;
                    border-radius: var(--radius-md);
                "></iframe>
            </div>
            <div class="pdf-modal-footer" style="
                padding: 15px 20px;
                border-top: 1px solid rgba(23, 133, 130, 0.3);
                display: flex;
                gap: 10px;
                justify-content: flex-end;
                background: ${colors.primary};
            ">
                <a href="${pdfUrl}" download style="
                    background: ${colors.surfaceAlt};
                    color: white;
                    padding: 10px 24px;
                    border-radius: var(--radius-md);
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    font-family: 'Manrope', sans-serif;
                    border: 1px solid ${colors.secondary};
                ">
                    <i class="fas fa-download"></i> Download
                </a>
                <a href="${pdfUrl}" target="_blank" style="
                    background: ${colors.secondary};
                    color: white;
                    padding: 10px 24px;
                    border-radius: var(--radius-md);
                    text-decoration: none;
                    font-weight: 600;
                    font-family: 'Manrope', sans-serif;
                    transition: all 0.3s ease;
                ">
                    <i class="fas fa-external-link-alt"></i> Open in New Tab
                </a>
            </div>
        </div>
    `;
    
    // Add to document
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add close functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    });
    
    // Add hover effects to close button
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = colors.accent;
        closeBtn.style.transform = 'rotate(90deg) scale(1.1)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = colors.secondary;
        closeBtn.style.transform = 'rotate(0) scale(1)';
    });
    
    // Add hover effects to footer buttons
    const downloadBtn = modal.querySelector('a[download]');
    const newTabBtn = modal.querySelector('a[target="_blank"]');
    
    downloadBtn.addEventListener('mouseenter', () => {
        downloadBtn.style.background = colors.secondary;
        downloadBtn.style.borderColor = colors.accent;
    });
    
    downloadBtn.addEventListener('mouseleave', () => {
        downloadBtn.style.background = colors.surfaceAlt;
        downloadBtn.style.borderColor = colors.secondary;
    });
    
    newTabBtn.addEventListener('mouseenter', () => {
        newTabBtn.style.background = colors.accent;
        newTabBtn.style.transform = 'translateY(-2px)';
    });
    
    newTabBtn.addEventListener('mouseleave', () => {
        newTabBtn.style.background = colors.secondary;
        newTabBtn.style.transform = 'translateY(0)';
    });
    
    // Close when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
        }
    });
    
    // Add escape key to close
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Initialize Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level[data-level]');
    
    if (!skillBars.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const level = skillBar.getAttribute('data-level');
                skillBar.style.setProperty('--fill-width', `${level}%`);
                skillBar.classList.add('animated');
                
                // Set gradient color
                const fillElement = skillBar.querySelector('.skill-level-fill') || document.createElement('div');
                fillElement.className = 'skill-level-fill';
                fillElement.style.cssText = `
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 0;
                    background: linear-gradient(90deg, ${colors.secondary}, ${colors.accent});
                    border-radius: 4px;
                    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
                `;
                
                if (!skillBar.querySelector('.skill-level-fill')) {
                    skillBar.appendChild(fillElement);
                }
                
                // Animate the fill
                setTimeout(() => {
                    fillElement.style.width = `${level}%`;
                }, 100);
                
                observer.unobserve(skillBar);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    setActiveNav();
    initOTPDemo();
    initProjectPages();
    initScrollAnimations();
    initPDFViewer();
    initSkillBars();
    
    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Add loading state for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });
    
    // Add custom CSS for animations
    addCustomStyles();
});

// Add custom CSS styles
function addCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes staggerFadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .animated {
            animation: staggerFadeIn 0.6s ease forwards;
        }
        
        .pdf-modal {
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .close-modal:hover {
            transform: rotate(90deg) scale(1.1);
            box-shadow: 0 8px 24px rgba(23, 133, 130, 0.4);
        }
    `;
    document.head.appendChild(style);
}

// Utility function to validate forms
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ff6b6b';
        } else {
            input.style.borderColor = colors.secondary;
        }
    });
    
    return isValid;
}

// Smooth scroll for navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}