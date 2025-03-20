document.addEventListener('DOMContentLoaded', function() {
  // Feature cards data
  const features = [
    {
      name: 'ColorCard',
      description: 'Palette tool for designers.',
      icon: 'public/colorcard.png',
      color: 'bg-[#C1D82F] bg-colorcard',
      textClass: 'colorcard-text',
      textColor: '#1E1B4B',
      link: 'https://apps.apple.com/us/app/id1207354572',
    },
    {
      name: 'iFrame',
      description: 'Add frames to screenshots.',
      icon: 'public/iframe.png',
      color: 'bg-[#87CEEB] bg-iframe',
      textClass: 'iframe-text',
      textColor: 'white',
      link: 'https://apps.apple.com/us/app/id1209610705',
    },
    {
      name: 'Progress',
      description: 'Manage your task progress.',
      icon: 'public/progress.png',
      color: 'bg-[#FFD700] bg-progress',
      textClass: 'progress-text',
      textColor: '#1E1B4B',
      link: 'https://apps.apple.com/us/app/id1460584174',
    },
    {
      name: 'Menu AI',
      description: 'Ask AI in menu bar.',
      icon: 'public/menuai.png',
      color: 'bg-[#1B4B8C] bg-menuai',
      textClass: 'menuai-text',
      textColor: 'white',
      link: 'https://apps.apple.com/us/app/id6740474816',
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      content: "ColorCard has transformed my design workflow with its intuitive color scheme management.",
      author: "Emily Parker",
      role: "UI Designer",
      app: "ColorCard",
      avatar: "public/avatar/emily.jpg"
    },
    {
      content: "As a developer, Progress helps me track project milestones with its clean and straightforward interface.",
      author: "Marcus Anderson",
      role: "iOS Developer",
      app: "Progress"
    },
    {
      content: "iFrame makes my screenshots look more professional. Clients love it!",
      author: "Sofia Rodriguez",
      role: "Product Manager",
      app: "iFrame",
      avatar: "public/avatar/sofia.jpg"
    },
    {
      content: "Menu AI boosts my productivity with its convenient menu bar AI features.",
      author: "James Wilson",
      role: "Freelancer",
      app: "Menu AI"
    },
    {
      content: "The gradient library in ColorCard is a goldmine of creative inspiration. Absolutely recommended!",
      author: "Isabella Martinez",
      role: "Graphic Designer",
      app: "ColorCard",
      avatar: "public/avatar/isabella.jpg"
    },
    {
      content: "The widget feature in Progress is fantastic! I can track my goals right from my home screen.",
      author: "Oliver Thompson",
      role: "Student",
      app: "Progress"
    },
    {
      content: "The batch processing feature in iFrame saves me hours of work. Such a time-saver!",
      author: "Mia Johnson",
      role: "Content Creator",
      app: "iFrame",
      avatar: "public/avatar/mia.jpg"
    },
    {
      content: "Menu AI's natural language interaction is superb. It's become an essential tool in my workflow.",
      author: "Lucas Bennett",
      role: "Tech Writer",
      app: "Menu AI"
    },
    {
      content: "ColorCard's export options are perfect for my design team collaboration. We use it every day!",
      author: "Rachel Chen",
      role: "Art Director",
      app: "ColorCard",
      avatar: "public/avatar/rachel.jpg"
    }
  ];

  // Create feature cards
  const featureCardsContainer = document.querySelector('.hero-features .grid');
  
  features.forEach(feature => {
    const card = document.createElement('div');
    card.className = `feature-card rounded-3xl ${feature.color} px-8 py-10 cursor-pointer ${feature.textClass}`;
    card.style.color = feature.textColor;
    card.addEventListener('click', () => window.open(feature.link, '_blank'));
    
    card.innerHTML = `
      <div class="card-content">
        <div class="card-icon w-12 h-12">
          <img src="${feature.icon}" alt="${feature.name}" width="48" height="48" class="object-contain rounded-xl" />
        </div>
        <h3 class="card-title text-lg ubuntu-medium leading-8">${feature.name}</h3>
        <p class="mt-2 text-sm ubuntu-light leading-6 opacity-90">${feature.description}</p>
      </div>
    `;
    
    featureCardsContainer.appendChild(card);
  });

  // Split testimonials into pages of 3 items each
  const itemsPerPage = 3;
  const testimonialPages = [];
  
  for (let i = 0; i < testimonials.length; i += itemsPerPage) {
    testimonialPages.push(testimonials.slice(i, i + itemsPerPage));
  }

  // Create testimonial slides
  const testimonialsContainer = document.querySelector('.testimonials-container');
  const paginationContainer = document.querySelector('.testimonials-pagination');
  let currentPage = 0;
  
  // Helper function to highlight app names
  function highlightAppNames(content) {
    const appNames = ["ColorCard", "iFrame", "Progress", "Menu AI"];
    let highlightedContent = content;
    
    appNames.forEach(appName => {
      highlightedContent = highlightedContent.replace(
        new RegExp(appName, 'g'),
        `<span class="text-[#FFAC3C] text-accent">${appName}</span>`
      );
    });
    
    return highlightedContent;
  }

  // Create testimonial slides
  testimonialPages.forEach((page, pageIndex) => {
    const slide = document.createElement('div');
    slide.className = `testimonial-slide ${pageIndex === 0 ? 'active' : ''}`;
    slide.id = `slide-${pageIndex}`;
    
    page.forEach(testimonial => {
      const card = document.createElement('div');
      card.className = 'flex-none w-[360px] testimonial-card';
      
      card.innerHTML = `
        <div class="quote-mark top">"</div>
        <div class="testimonial-content text-gray-600 text-base">
          ${highlightAppNames(testimonial.content)}
        </div>
        <div class="quote-mark bottom">"</div>
        <div class="testimonial-author">
          ${testimonial.avatar 
            ? `<img src="${testimonial.avatar}" alt="${testimonial.author}" class="h-10 w-10 rounded-full object-cover">`
            : `<div class="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span class="text-xl font-semibold text-gray-500">${testimonial.author[0]}</span>
               </div>`
          }
          <div>
            <p class="font-semibold text-gray-900">${testimonial.author}</p>
            <p class="text-xs text-gray-500">${testimonial.role}</p>
          </div>
        </div>
      `;
      
      slide.appendChild(card);
    });
    
    testimonialsContainer.appendChild(slide);
    
    // Create pagination dots
    const dot = document.createElement('button');
    dot.className = `rounded-full ${pageIndex === 0 ? 'bg-[#FFAC3C] bg-accent active' : 'bg-gray-300'}`;
    dot.addEventListener('click', () => goToSlide(pageIndex));
    paginationContainer.appendChild(dot);
  });

  // Function to go to a specific slide
  function goToSlide(index) {
    // Remove active class from current slide and add prev class
    const currentSlide = document.querySelector(`.testimonial-slide.active`);
    if (currentSlide) {
      currentSlide.classList.remove('active');
      currentSlide.classList.add('prev');
      
      // Remove prev class after animation completes
      setTimeout(() => {
        currentSlide.classList.remove('prev');
      }, 500);
    }
    
    // Update pagination dots
    const dots = paginationContainer.querySelectorAll('button');
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.className = 'rounded-full bg-[#FFAC3C] bg-accent active';
      } else {
        dot.className = 'rounded-full bg-gray-300';
      }
    });
    
    // Activate new slide
    const newSlide = document.getElementById(`slide-${index}`);
    newSlide.classList.add('active');
    
    currentPage = index;
  }

  // Auto-rotate testimonials
  setInterval(() => {
    goToSlide((currentPage + 1) % testimonialPages.length);
  }, 5000);
}); 