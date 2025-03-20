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
    card.className = `feature-card rounded-3xl ${feature.color} px-6 py-8 cursor-pointer ${feature.textClass}`;
    card.style.color = feature.textColor;
    card.addEventListener('click', () => window.open(feature.link, '_blank'));
    
    card.innerHTML = `
      <div class="card-content">
        <div class="card-icon w-10 h-10">
          <img src="${feature.icon}" alt="${feature.name}" width="40" height="40" class="object-contain rounded-xl" />
        </div>
        <h3 class="card-title text-lg ubuntu-medium leading-8">${feature.name}</h3>
        <p class="mt-1 text-sm ubuntu-light leading-6 opacity-90">${feature.description}</p>
      </div>
    `;
    
    featureCardsContainer.appendChild(card);
  });

  // 根据设备宽度确定每页显示的项目数
  function getItemsPerPage() {
    if (window.innerWidth < 768) { // 移动端
      return 1;
    } else if (window.innerWidth < 1024) { // iPad
      return 2;
    } else { // 桌面
      return 3;
    }
  }

  // 初始化每页项目数
  let itemsPerPage = getItemsPerPage();
  
  // 分页逻辑函数
  function paginateTestimonials() {
    // 更新每页项目数
    itemsPerPage = getItemsPerPage();
    
    // 清空现有内容
    const testimonialsContainer = document.querySelector('.testimonials-container');
    const paginationContainer = document.querySelector('.testimonials-pagination');
    testimonialsContainer.innerHTML = '';
    paginationContainer.innerHTML = '';
    
    // 重新分页 - 将testimonials分成多个页面，但每个页面显示固定数量的项目
    const pageCount = Math.ceil(testimonials.length / itemsPerPage);
    const testimonialPages = [];
    
    for (let i = 0; i < pageCount; i++) {
      // 每个页面显示的项目从全部testimonials中截取相应的部分
      testimonialPages.push(testimonials.slice(i * itemsPerPage, Math.min((i + 1) * itemsPerPage, testimonials.length)));
    }
    
    // 创建轮播项
    testimonialPages.forEach((page, pageIndex) => {
      const slide = document.createElement('div');
      slide.className = `testimonial-slide ${pageIndex === 0 ? 'active' : ''}`;
      slide.id = `slide-${pageIndex}`;
      
      page.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'flex-none testimonial-card';
        
        card.innerHTML = `
          <div class="quote-mark top">"</div>
          <div class="testimonial-content text-gray-600 text-base">
            ${highlightAppNames(testimonial.content)}
          </div>
          <div class="quote-mark bottom">"</div>
          <div class="testimonial-author">
            ${testimonial.avatar 
              ? `<img src="${testimonial.avatar}" alt="${testimonial.author}" class="h-10 w-10 rounded-full object-cover">`
              : `<div class="avatar-placeholder">
                  <span class="text-xl font-semibold text-gray-500">${testimonial.author[0]}</span>
                 </div>`
            }
            <div class="testimonial-author-info">
              <p class="testimonial-author-name">${testimonial.author}</p>
              <p class="testimonial-author-role">${testimonial.role}</p>
            </div>
          </div>
        `;
        
        slide.appendChild(card);
      });
      
      testimonialsContainer.appendChild(slide);
      
      // 创建分页指示器
      const dot = document.createElement('button');
      dot.className = `rounded-full ${pageIndex === 0 ? 'bg-[#FFAC3C] bg-accent active' : 'bg-gray-300'}`;
      dot.addEventListener('click', () => goToSlide(pageIndex));
      paginationContainer.appendChild(dot);
    });
    
    return testimonialPages;
  }

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

  // 初始化轮播
  let testimonialPages = paginateTestimonials();
  let currentPage = 0;

  // 监听窗口大小变化，重新分页
  window.addEventListener('resize', function() {
    const oldItemsPerPage = itemsPerPage;
    const newItemsPerPage = getItemsPerPage();
    
    if (oldItemsPerPage !== newItemsPerPage) {
      testimonialPages = paginateTestimonials();
      currentPage = 0; // 重置到第一页
    }
  });

  // Function to go to a specific slide
  function goToSlide(index) {
    // 获取分页容器
    const paginationContainer = document.querySelector('.testimonials-pagination');
    
    // 如果目标索引与当前页相同，不执行任何操作
    if (index === currentPage) return;
    
    // 获取当前活动的幻灯片
    const currentSlide = document.querySelector(`.testimonial-slide.active`);
    
    // 获取目标幻灯片
    const targetSlide = document.getElementById(`slide-${index}`);
    
    if (!currentSlide || !targetSlide) return;
    
    // 设置过渡方向
    const direction = index > currentPage ? 'next' : 'prev';
    
    // 根据方向设置初始位置
    if (direction === 'next') {
      targetSlide.style.transform = 'translateX(100px)';
      currentSlide.classList.add('prev');
    } else {
      targetSlide.style.transform = 'translateX(-100px)';
      currentSlide.style.transform = 'translateX(100px)';
    }
    
    // 延迟一帧以确保初始状态被应用
    requestAnimationFrame(() => {
      // 移除当前幻灯片的active类
      currentSlide.classList.remove('active');
      
      // 添加目标幻灯片的active类并重置变换
      targetSlide.classList.add('active');
      targetSlide.style.transform = '';
      
      // 更新分页指示器
      const dots = paginationContainer.querySelectorAll('button');
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.className = 'rounded-full bg-[#FFAC3C] bg-accent active';
        } else {
          dot.className = 'rounded-full bg-gray-300';
        }
      });
      
      // 清理：500ms后移除prev类
      setTimeout(() => {
        currentSlide.classList.remove('prev');
        currentSlide.style.transform = '';
      }, 500);
      
      // 更新当前页
      currentPage = index;
    });
  }

  // Auto-rotate testimonials
  setInterval(() => {
    goToSlide((currentPage + 1) % testimonialPages.length);
  }, 5000);
});