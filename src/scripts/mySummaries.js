const summariesData = [
    { title: 'Front end', course: '2 CI - IAGI', views: 111, author: '@Me', likes: 200 },
    { title: 'Back end', course: '2 CI - IAGI', views: 27, author: '@Me', likes: 100 }
  ];
  
  let summaryIdCounter = 0;

  function uploadSummary() {
      const niveau = document.getElementById("niveau").value;
      const filiere = document.getElementById("filiere").value;
      const module = document.getElementById("module").value;

      if (niveau && filiere && module) {
          // Incrémenter l'identifiant unique pour chaque résumé
          summaryIdCounter++;

          // Créer un élément pour le résumé
          const summaryDiv = document.createElement("div");
          summaryDiv.className = "bg-gray-50 p-4 rounded-lg flex justify-between items-center";
          summaryDiv.id = `summary-${summaryIdCounter}`;
          
          summaryDiv.innerHTML = `
              <div>
                  <h3 class="text-lg font-semibold">${module}</h3>
                  <p class="text-gray-500 text-sm">${niveau} - ${filiere}</p>
              </div>
              <button onclick="deleteSummary('summary-${summaryIdCounter}')" class="text-red-500 hover:text-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 5a1 1 0 00-1 1v8a1 1 0 102 0V6a1 1 0 00-1-1zm3-3a1 1 0 00-1 1v1H8V3a1 1 0 10-2 0v1H5a1 1 0 100 2h10a1 1 0 100-2h-1V3a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
              </button>
          `;

          // Ajouter le résumé à la liste
          document.getElementById("summaries-container").appendChild(summaryDiv);
          
          // Réinitialiser le formulaire
          document.getElementById("uploadForm").reset();
          alert('Summary uploaded successfully!');
      } else {
          alert('Please select values for Niveau, Filière, and Module');
      }
  }

  function deleteSummary(summaryId) {
      const summaryElement = document.getElementById(summaryId);
      if (summaryElement) {
          summaryElement.remove();
          alert('Summary deleted!');
      }
  }
