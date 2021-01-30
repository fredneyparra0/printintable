const nameInput = document.getElementById('name'),
      emailInput = document.getElementById('email'),
      ageInput = document.getElementById('age'),
      countryInput = document.getElementById('country'),
      dniInput = document.getElementById('dni'),
      form = document.getElementById('form'),
      table = document.getElementById('table'),
      allCountrys = ['Venezuela','Colombia','Peru','Chile','Mexico'];
      

      // ForEach agregar options a select
      allCountrys.forEach((element) => {
          const option = document.createElement('option');
          option.textContent = element;
          option.setAttribute('value' ,element);
          country.appendChild(option);
      });

      // Evento submit del formulario
      form.addEventListener('submit',(e) => {
        e.preventDefault();

        const tr = document.createElement('tr');

        const nameTh = document.createElement('th');
        nameTh.textContent = nameInput.value;
        nameTh.className = 'ln';
        tr.appendChild(nameTh);
        nameInput.value = "";

        const emailTh = document.createElement('th');
        emailTh.textContent = emailInput.value;
        emailTh.className = 'ln';
        tr.appendChild(emailTh);
        emailInput.value = '';

        const ageTh = document.createElement('th');
        ageTh.textContent = ageInput.value;
        ageTh.className = 'ln';
        tr.appendChild(ageTh);
        ageInput.value = '';

        const countryTh = document.createElement('th');
        countryTh.textContent = countryInput.value;
        countryTh.className = 'ln';
        tr.appendChild(countryTh);
        countryInput.value = '';
        
        const dniTh = document.createElement('th');
        dniTh.textContent = dniInput.value;
        dniTh.className = 'ln';
        tr.appendChild(dniTh);
        dniInput.value = '';

        table.appendChild(tr)
      });

      