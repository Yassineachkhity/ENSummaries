const urlParams = new URLSearchParams(window.location.search);
const moduleTitle = urlParams.get('title');
const moduleCourse = urlParams.get('course');

let moduleSummaries = [
    { title: moduleTitle, course: moduleCourse, views: 400, author: '@Yassine', likes: 1000 },
    { title: moduleTitle, course: moduleCourse, views: 300, author: '@Ayoub', likes: 466 },
    { title: moduleTitle, course: moduleCourse, views: 200, author: '@Adnane', likes: 400 },
    { title: moduleTitle, course: moduleCourse, views: 100, author: '@Kaoutar', likes: 321 },
    { title: moduleTitle, course: moduleCourse, views: 78, author: '@Loubna', likes: 177 },
    { title: moduleTitle, course: moduleCourse, views: 60, author: '@Khalid', likes: 84 },
    { title: moduleTitle, course: moduleCourse, views: 30, author: '@Walid', likes: 66 },
    { title: moduleTitle, course: moduleCourse, views: 20, author: '@Hajar', likes: 40 },
    { title: moduleTitle, course: moduleCourse, views: 10, author: '@Imane', likes: 21 },
    { title: moduleTitle, course: moduleCourse, views: 8, author: '@Zakaria', likes: 7 }
];

let currentItem = null;
let visibleSummaries = 5;

// Set page title
document.getElementById('module-title').textContent = moduleTitle || "Module 1";

function renderSummaries() {
    const container = document.getElementById("module-summaries-container");
    container.innerHTML = '';

    moduleSummaries.slice(0, visibleSummaries)
    .sort((a, b) => b.likes - a.likes)
    .forEach((item, index) => {
        const summaryElement = document.createElement("div");
        summaryElement.classList.add(
            "bg-white", "p-4", "rounded-lg", "shadow-md",
            "flex", "flex-col", "sm:flex-row", "sm:justify-between",
            "sm:items-center", "space-y-3", "sm:space-y-0"
        );

        summaryElement.innerHTML = `
            <div class="space-y-1">
                <h3 class="text-lg sm:text-xl font-semibold text-gray-700">${item.title}</h3>
                <p class="text-sm sm:text-base text-gray-500">${item.course}</p>
            </div>
            <div class="flex flex-wrap gap-3 sm:gap-6 items-center">
                <button onclick="handleLike(${index})" 
                        class="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0l.172.172.172-.172a4 4 0 015.656 5.656l-6 6-6-6a4 4 0 010-5.656z"/>
                    </svg>
                    <span class="ml-1 text-sm sm:text-base">${item.likes}</span>
                </button>
                <button onclick="openCommentModal(${index})" 
                        class="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7.305 4.5 3.135 7.61 1.5 12c1.635 4.39 5.805 7.5 10.5 7.5s8.865-3.11 10.5-7.5c-1.635-4.39-5.805-7.5-10.5-7.5zm0 13c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7.5c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z"/>
                    </svg>
                    <span class="ml-1 text-sm sm:text-base">${item.views}</span>
                </button>
                <div class="flex items-center text-gray-600">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2a7 7 0 00-7 7v1h14v-1a7 7 0 00-7-7z" clip-rule="evenodd"/>
                    </svg>
                    <span class="ml-1 text-sm sm:text-base">${item.author}</span>
                </div>
                <button class="flex items-center text-white bg-green-500 hover:bg-green-600 transition-colors rounded px-3 py-1">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 15a1 1 0 011-1h4V8h2v6h4a1 1 0 011 1v1H3v-1zM9 2a1 1 0 112 0v8h3l-4 4-4-4h3V2z"/>
                    </svg>
                    <span class="ml-1 text-sm">Download</span>
                </button>
            </div>
        `;

        container.appendChild(summaryElement);
    });
}

function displayMore() {
    visibleSummaries += 2;
    if (visibleSummaries >= moduleSummaries.length) {
        document.querySelector('button[onclick="displayMore()"]').style.display = 'none';
    }
    renderSummaries();
}

function handleLike(index) {
    moduleSummaries[index].likes++;
    renderSummaries();
}

function openCommentModal(index) {
    currentItem = index;
    document.getElementById("comment-modal").classList.remove("hidden");
}

function closeCommentModal() {
    document.getElementById("comment-modal").classList.add("hidden");
}

function handleComment() {
    const commentInput = document.getElementById("comment-input");
    if (!commentInput.value) {
        return;
    } 
    moduleSummaries[currentItem].views++;
    commentInput.value = '';
    closeCommentModal();
    renderSummaries();
}

// Initialize
document.addEventListener("DOMContentLoaded", renderSummaries);


