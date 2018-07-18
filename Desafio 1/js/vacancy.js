function Vacancy(title, description, baseSalary, image){
    this.title = title;
    this.description = description;
    this.baseSalary = baseSalary;
    this.image = image;
}


Vacancy.prototype.appendToPage = function(elementId){
    var div = document.getElementById(elementId);
    div.innerHTML += this.generateHtml();
}

Vacancy.prototype.generateHtml = function(){
    return `<div class="col-sm-12 col-md-6 col-lg-4 mb-3">
        <div class="card">
          <img class="card-img-top" src="`+ this.image + `" alt="">
          <div class="card-body">
            <h5 class="card-title">`+ this.title +`</h2>
              <h5 class="card-title font-weight-bold small">Descrição</h3>
                <p>`+ this.description +`</p>
                <h5 class="card-title font-weight-bold small">Salário base</h3>
                  <p>R$ `+ parseFloat(this.baseSalary).toFixed(2).split('.').join(',') +`</p>

                  <button type="button" class="btn btn-warning"><i class="far fa-edit"></i></button>
                  <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
          </div>
    </div>`;
}





new Vacancy(
    "Desenvolvedor Front-end JR", 
    "Profissional que goste de trabalhar em um ambiente dinâmico com desenvolvimento de software e que tenha experiênciaem desenvolvimento full stack.",
    10.00,
    "images/developer.png"
    ).appendToPage("openedVacs");


new Vacancy(
    "Designer UI/UX PL", 
    "Profissional que goste de trabalhar em um ambiente dinâmico com desenvolvimento de software e que tenha experiênciaem desenvolvimento full stack.",
    100.00,
    "images/designer.png"
    ).appendToPage("openedVacs");


new Vacancy(
    "Tester - Estágio", 
    "Profissional que goste de trabalhar em um ambiente dinâmico com desenvolvimento de software e que tenha experiênciaem desenvolvimento full stack.",
    2.00,
    "images/tester.png"
    ).appendToPage("openedVacs");

