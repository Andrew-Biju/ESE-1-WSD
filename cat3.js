fetch('cats.json')
  .then(response => response.json())
  .then(data => {
    let catInfo = '';
    data.forEach(cat => {
      catInfo += `<div class="cat-breed">
                    <h3>${cat.name}</h3>
                    <img src="${cat.url}" alt="${cat.name}">
                    <p>${cat.description}</p>
                    <p>Origin: ${cat.origin}</p>
                    <p>Life Span: ${cat.life_span}</p>
                    <p>Temperament: ${cat.temperament}</p>
                  </div>`;
    });
    document.getElementById('cat-list').innerHTML = catInfo;
  })
  .catch(error => console.log('Error loading JSON data:', error));
