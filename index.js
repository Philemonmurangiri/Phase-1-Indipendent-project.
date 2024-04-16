
        // Fetch JSON data and populate tutorial list
fetch('tutorials.json')
  .then(response => response.json())
  .then(data => {
     const tutorialList = document.getElementById('tutorialList');
     data.forEach(tutorial => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
             link.href = tutorial.url;
            link.textContent = tutorial.title;
            listItem.appendChild(link);
            tutorialList.appendChild(listItem);
            });
     })
   .catch(error => console.error('Error fetching tutorials:', error));
