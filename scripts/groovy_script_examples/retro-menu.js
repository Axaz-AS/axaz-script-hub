// Retro menu data structure
const menuData = {
    categories: [
      {
        name: "🧪 Document Processing",
        items: [
          { title: "🔌 General Template", url: "index.html", active: true },
          { title: "📁 PUT Request Merginator", url: "file-operations.html", active: false }
        ]
      },
      {
        name: "⚗️ Utility",
        items: [
          { title: "💤 Sleep timer", url: "sleep-timer.html", active: false },
          { title: "📄 Pageination", url: "pagination-increment.html", active: false },
        ]
      }
    ]
  };
  
  // Function to generate menu HTML
  function generateMenu() {
    // Get the current page URL to highlight active menu item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    let menuHTML = `
      <div class="menu-container">
        <h2 class="menu-header">🚀 Script Nav 🚀</h2>
    `;
    
    // Create each category and its items
    menuData.categories.forEach(category => {
      menuHTML += `<h3 class="menu-category">${category.name}</h3>`;
      menuHTML += `<ul class="menu-list">`;
      
      category.items.forEach(item => {
        // Check if item is active or explicitly marked as active
        const isCurrentPage = item.url === currentPage;
        const isEnabled = item.active === true || isCurrentPage;
        const activeClass = isCurrentPage ? 'active' : '';
        const disabledClass = !isEnabled ? 'disabled' : '';
        
        // For disabled items, use a span instead of a link, otherwise use the normal link
        if (!isEnabled) {
          menuHTML += `
            <li class="menu-item ${activeClass} ${disabledClass}">
              <span class="disabled-link"><span class="menu-icon">${item.title.split(' ')[0]}</span>${item.title.split(' ').slice(1).join(' ')}<span class="coming-soon-badge">Coming Soon</span></span>
            </li>
          `;
        } else {
          menuHTML += `
            <li class="menu-item ${activeClass} ${disabledClass}">
              <a href="${item.url}"><span class="menu-icon">${item.title.split(' ')[0]}</span>${item.title.split(' ').slice(1).join(' ')}</a>
            </li>
          `;
        }
      });
      
      menuHTML += `</ul>`;
    });
    
    menuHTML += `
        <div class="menu-footer">
          <p style="color: #ffff00; text-align: center; margin-top: 20px; font-size: 12px;">
            ✨ Made with <span style="color: #ff00ff;">♥</span> since 2024 ✨
          </p>
        </div>
      </div>
    `;
    
    return menuHTML;
  }
  
  // Function to inject the menu into the page
  function injectMenu() {
    // Create menu element
    const menuElement = document.createElement('div');
    menuElement.innerHTML = generateMenu();
    
    // Add to the beginning of the body
    document.body.insertBefore(menuElement.firstElementChild, document.body.firstChild);
    
    // Wrap the existing content
    const existingContent = document.querySelector('.container');
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';
    
    // Move the container into the main content
    existingContent.parentNode.insertBefore(mainContent, existingContent);
    mainContent.appendChild(existingContent);
  }
  
  // Run when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', injectMenu);
  
  // Easter egg: Konami code detector
  let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiPosition = 0;
  
  document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiPosition]) {
      konamiPosition++;
      
      if (konamiPosition === konamiCode.length) {
        // Trigger the Easter egg
        document.body.style.backgroundColor = '#ff00ff';
        setTimeout(() => {
          document.body.style.backgroundColor = '#000080';
        }, 1000);
        
        // Create a floating pixelated spaceship
        const spaceship = document.createElement('div');
        spaceship.innerHTML = '👾';
        spaceship.style.position = 'fixed';
        spaceship.style.top = '50%';
        spaceship.style.left = '-50px';
        spaceship.style.fontSize = '50px';
        spaceship.style.zIndex = '9999';
        document.body.appendChild(spaceship);
        
        // Animate the spaceship across the screen
        let position = -50;
        const moveShip = setInterval(() => {
          position += 5;
          spaceship.style.left = position + 'px';
          
          if (position > window.innerWidth) {
            clearInterval(moveShip);
            document.body.removeChild(spaceship);
          }
        }, 30);
        
        // Reset the counter
        konamiPosition = 0;
      }
    } else {
      konamiPosition = 0;
    }
  });