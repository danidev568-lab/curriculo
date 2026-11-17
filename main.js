const cv = {
    personalInformation: {
        fullName: "danilo soares da silva brandao",
        professionalTitle: "Desenvolvedor Web",
        email: "danilobrandao568email@email.com",
        phone: "(11) 934484872",
        profilePhoto: "IMG_20261110_211126595.jpg"
    }
};

document.getElementById("nome").textContent =
    cv.personalInformation.fullName;

document.getElementById("profissao").textContent =
    cv.personalInformation.professionalTitle;

document.getElementById("email").textContent =
    cv.personalInformation.email;

document.getElementById("telefone").textContent =
    cv.personalInformation.phone;

document.getElementById("foto").src =
    cv.personalInformation.profilePhoto;


