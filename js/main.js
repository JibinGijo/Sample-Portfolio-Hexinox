// Main JavaScript file

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      // Toggle hamburger animation
      this.classList.toggle('active');
    });
  }
  
  // Close mobile menu when a link is clicked
  const navItems = document.querySelectorAll('.nav-links li a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);
  
  // Get all sections to observe
  const sections = document.querySelectorAll('section');
  
  // Add the animate-on-scroll class and observe each section
  sections.forEach((section, index) => {
    if (index > 0) { // Skip the hero section
      section.classList.add('animate-on-scroll');
      observer.observe(section);
    }
  });
  
  // Add animation classes to elements within sections
  const animateElements = () => {
    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      card.classList.add('animate-on-scroll');
      card.classList.add(`delay-${index + 1}`);
      observer.observe(card);
    });
    
    // Skills animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((skill, index) => {
      skill.classList.add('animate-on-scroll');
      skill.classList.add(`delay-${index + 1}`);
      observer.observe(skill);
    });
    
    // Contact items animation
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
      item.classList.add('animate-on-scroll');
      item.classList.add(`delay-${index + 1}`);
      observer.observe(item);
    });
  };
  
  animateElements();
  
  // Handle active navigation links based on scroll position
  const updateActiveNavLink = () => {
    const scrollPosition = window.scrollY;
    
    // Get all sections with IDs
    const sectionElements = document.querySelectorAll('section[id]');
    
    sectionElements.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to corresponding link
        const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  };
  
  // Listen for scroll to update active nav link
  window.addEventListener('scroll', updateActiveNavLink);
  
  // Initial call to set the active link
  updateActiveNavLink();
});