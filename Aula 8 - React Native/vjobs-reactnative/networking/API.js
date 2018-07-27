import axios from 'axios';

axios.defaults.baseURL = 'https://vjobs.herokuapp.com';
//axios.defaults.baseURL = 'http://localhost:4000';


const getJobs = () => {
    return axios
        .get('/jobs')
        .then(response => response.data);
}

const getJobsMock = () => {
    let idCount = 0;
    return
    [
        {
            id: "1pRiCe3m1JRrAbGOQxYa",
            name: "Estagiário de Testes",
            salary: "3500",
            area: "Testes",
            description: "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento " +
                    "de software e que tenha experiência em desenvolvimento full stack.",
            skills: [
                "- Superior em Ciência da Computação, Engenharia da Computação, Sistema de Inform" +
                        "ação ou áreas afins",
                "- Conhecimento em desenvolvimento backend Java",
                "- Conhecimento em desenvolvimento frontend (ex Angular)",
                "- Conhecimentos em banco de dados relacional (administração básica) e programaçã" +
                        "o (PL/SQL)",
                "- Experiência com sistema de controle de versão Git + Gerrit",
                "- Conhecimento em redes (protocolo TCP/IP e VPN)",
                "- Conhecimento em metodologias ágeis (ex. Scrum)"
            ],
            "differentials": [
                "- Conhecimento em EXT JS", "- Redes de computadores e sistemas operacionais Linux e noções de configuração d" +
                        "e firewall"
            ],
            "isPcd": true,
            "isActive": true
        }, {
            id: "F6slhduvPWamT4l8u0Bt",
            name: "Estagiário de Design 123",
            salary: "3500",
            area: "Design",
            description: "Profissional que goste de trabalhar em um ambiênte dinâmico com desenvolvimento " +
                    "de software e que tenha experiência em desenvolvimento full stack.",
            skills: [
                "- Superior em Ciência da Computação, Engenharia da Computação, Sistema de Inform" +
                        "ação ou áreas afins",
                "- Conhecimento em desenvolvimento backend Java",
                "- Conhecimento em desenvolvimento frontend (ex Angular)",
                "- Conhecimentos em banco de dados relacional (administração básica) e programaçã" +
                        "o (PL/SQL)",
                "- Experiência com sistema de controle de versão Git + Gerrit",
                "- Conhecimento em redes (protocolo TCP/IP e VPN)",
                "- Conhecimento em metodologias ágeis (ex. Scrum)"
            ],
            differentials: [
                "- Conhecimento em EXT JS", "- Redes de computadores e sistemas operacionais Linux e noções de configuração d" +
                        "e firewall"
            ],
            "isPcd": true,
            "isActive": true
        }
    ]
}

module.exports = {
    getJobs,
    getJobsMock
}