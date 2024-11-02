const summariesData = [
    { title: 'Front end', course: '2 CI - IAGI', views: 111, author: '@Me', likes: 200 },
    { title: 'Back end', course: '2 CI - IAGI', views: 27, author: '@Me', likes: 100 }
  ];
  
  let currentItem = null;
  
  function renderSummaries() {
    const container = document.getElementById("summaries-container");
    container.innerHTML = '';
  
    summariesData.forEach((item, index) => {
      const summaryElement = document.createElement("div");
      summaryElement.classList.add("bg-white", "p-4", "rounded-lg", "shadow-md", "flex", "justify-between", "items-center");
  
    summaryElement.innerHTML = `
      <div>
        <h3 class="text-xl font-semibold text-gray-700">${item.title}</h3>
        <p class="text-gray-500">${item.course}</p>
      </div>
      <div class="flex items-center space-x-6">
        <button onclick="handleLike(${index})" class="flex items-center text-gray-600 hover:text-red-500 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3.172 5.172a4 4 0 015.656 0l.172.172.172-.172a4 4 0 015.656 5.656l-6 6-6-6a4 4 0 010-5.656z"/>
          </svg>
        <span class="ml-1">${item.likes}</span>
        </button>
        <button onclick="openCommentModal(${index})" class="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4.5C7.305 4.5 3.135 7.61 1.5 12c1.635 4.39 5.805 7.5 10.5 7.5s8.865-3.11 10.5-7.5c-1.635-4.39-5.805-7.5-10.5-7.5zm0 13c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7.5c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z"/>
          </svg>
        <span class="ml-1">${item.views}</span>
        </button>
        <div class="flex items-center text-gray-600">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2a7 7 0 00-7 7v1h14v-1a7 7 0 00-7-7z" clip-rule="evenodd"/>
          </svg>
        <span class="ml-1">${item.author}</span>
        </div>
        <button onclick="handleDelete(${index})" class="flex items-center text-white bg-red-500 hover:bg-red-600 transition-colors rounded px-3 py-1">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h14a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 4a1 1 0 00-1 1v9a1 1 0 102 0V7a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v9a1 1 0 102 0V7a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
        <span class="ml-1 text-sm">Delete</span>
        </button>
      </div>
    `;
      
      container.appendChild(summaryElement);
    });
  }
    
  
  // Initialisation
  renderSummaries();