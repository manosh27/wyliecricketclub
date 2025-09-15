// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation for contact form
function validateContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        let errorMessage = '';

        // Clear previous error styles
        clearErrorStyles();

        // Validate name
        if (!name) {
            showError('name', 'Name is required');
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Validate phone (optional but should be valid if provided)
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (phone && !phoneRegex.test(phone)) {
            showError('phone', 'Please enter a valid phone number');
            isValid = false;
        }

        // Validate subject
        if (!subject) {
            showError('subject', 'Subject is required');
            isValid = false;
        }

        // Validate message
        if (!message) {
            showError('message', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showError('message', 'Message must be at least 10 characters long');
            isValid = false;
        }

        if (isValid) {
            // Show success message
            showSuccessMessage('Thank you for your message! We will get back to you soon.');
            form.reset();
        }
    });
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.5rem';
    
    field.style.borderColor = '#e74c3c';
    field.parentNode.appendChild(errorDiv);
}

function clearErrorStyles() {
    // Remove previous error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.remove());
    
    // Reset border colors
    document.querySelectorAll('input, textarea, select').forEach(field => {
        field.style.borderColor = '#ddd';
    });
    
    // Remove success message
    const successMsg = document.querySelector('.success-message');
    if (successMsg) successMsg.remove();
}

function showSuccessMessage(message) {
    const form = document.getElementById('contact-form');
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.background = '#d4edda';
    successDiv.style.color = '#155724';
    successDiv.style.padding = '1rem';
    successDiv.style.borderRadius = '5px';
    successDiv.style.marginBottom = '1rem';
    successDiv.style.border = '1px solid #c3e6cb';
    
    form.parentNode.insertBefore(successDiv, form);
}

// Initialize form validation when DOM is loaded
document.addEventListener('DOMContentLoaded', validateContactForm);

// Gallery lightbox functionality
function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
    });
}

function openLightbox(src, alt) {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        cursor: pointer;
    `;
    
    // Create image element
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
    `;
    
    // Create close button
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        color: white;
        font-size: 3rem;
        font-weight: bold;
        cursor: pointer;
        z-index: 2001;
    `;
    
    lightbox.appendChild(img);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);
    
    // Close lightbox on click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target === closeBtn) {
            document.body.removeChild(lightbox);
        }
    });
    
    // Close lightbox on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (document.body.contains(lightbox)) {
                document.body.removeChild(lightbox);
            }
        }
    });
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeGallery);

// Add fade-in animation to elements when they come into view
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe sections for animation
    document.querySelectorAll('section, .news-card, .info-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', observeElements);

// Discussion form functionality
function initializeDiscussions() {
    const discussionForm = document.getElementById('discussion-form');
    if (!discussionForm) return;

    discussionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('discussion-name').value.trim();
        const topic = document.getElementById('discussion-topic').value.trim();
        const content = document.getElementById('discussion-content').value.trim();
        
        if (!name || !topic || !content) {
            alert('Please fill in all fields');
            return;
        }
        
        if (content.length < 10) {
            alert('Discussion content must be at least 10 characters long');
            return;
        }
        
        // Add new discussion to the list
        addDiscussionToList(name, topic, content);
        
        // Reset form
        discussionForm.reset();
        
        // Show success message
        showDiscussionSuccess('Your discussion has been added successfully!');
    });
}

function addDiscussionToList(name, topic, content) {
    const discussionsList = document.getElementById('discussions-list');
    if (!discussionsList) return;
    
    const discussionItem = document.createElement('div');
    discussionItem.className = 'discussion-item';
    discussionItem.innerHTML = `
        <div class="discussion-header">
            <h4>${escapeHtml(topic)}</h4>
            <div class="discussion-meta">
                <span class="discussion-author">By ${escapeHtml(name)}</span>
                <span class="discussion-date">${new Date().toLocaleDateString()}</span>
            </div>
        </div>
        <div class="discussion-content">
            <p>${escapeHtml(content)}</p>
        </div>
        <div class="discussion-actions">
            <button class="btn-reply" onclick="showReplyForm(this)">Reply</button>
        </div>
        <div class="replies-container"></div>
    `;
    
    discussionsList.insertBefore(discussionItem, discussionsList.firstChild);
}

function showReplyForm(button) {
    const discussionItem = button.closest('.discussion-item');
    const repliesContainer = discussionItem.querySelector('.replies-container');
    
    // Check if reply form already exists
    if (discussionItem.querySelector('.reply-form')) {
        return;
    }
    
    const replyForm = document.createElement('div');
    replyForm.className = 'reply-form';
    replyForm.innerHTML = `
        <div class="form-group">
            <input type="text" placeholder="Your name" class="reply-name" required>
        </div>
        <div class="form-group">
            <textarea placeholder="Your reply..." class="reply-content" required></textarea>
        </div>
        <div class="form-actions">
            <button type="button" class="btn btn-primary" onclick="submitReply(this)">Post Reply</button>
            <button type="button" class="btn btn-secondary" onclick="cancelReply(this)">Cancel</button>
        </div>
    `;
    
    repliesContainer.appendChild(replyForm);
}

function submitReply(button) {
    const replyForm = button.closest('.reply-form');
    const name = replyForm.querySelector('.reply-name').value.trim();
    const content = replyForm.querySelector('.reply-content').value.trim();
    
    if (!name || !content) {
        alert('Please fill in all fields');
        return;
    }
    
    const repliesContainer = replyForm.parentElement;
    const reply = document.createElement('div');
    reply.className = 'reply-item';
    reply.innerHTML = `
        <div class="reply-header">
            <span class="reply-author">${escapeHtml(name)}</span>
            <span class="reply-date">${new Date().toLocaleDateString()}</span>
        </div>
        <div class="reply-content">
            <p>${escapeHtml(content)}</p>
        </div>
    `;
    
    repliesContainer.insertBefore(reply, replyForm);
    repliesContainer.removeChild(replyForm);
}

function cancelReply(button) {
    const replyForm = button.closest('.reply-form');
    replyForm.remove();
}

function showDiscussionSuccess(message) {
    const form = document.getElementById('discussion-form');
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.background = '#d4edda';
    successDiv.style.color = '#155724';
    successDiv.style.padding = '1rem';
    successDiv.style.borderRadius = '5px';
    successDiv.style.marginBottom = '1rem';
    successDiv.style.border = '1px solid #c3e6cb';
    
    form.parentNode.insertBefore(successDiv, form);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.parentNode.removeChild(successDiv);
        }
    }, 5000);
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// Initialize discussions when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeDiscussions);