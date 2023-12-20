// Configurar a conexão com o Firebase 1 (CHAMONE)
const firebaseConfig = {
  apiKey: "AIzaSyCp37eYY4iaaV4u9DQDAvP0ryJ36zhj5xI",
  authDomain: "exxatatimeline.firebaseapp.com",
  databaseURL: "https://exxatatimeline-default-rtdb.firebaseio.com",
  projectId: "exxatatimeline",
  storageBucket: "exxatatimeline.appspot.com",
  messagingSenderId: "335024989606",
  appId: "1:335024989606:web:e49ce0ca1e30438c951b67",
  measurementId: "G-8J4GQ9VD38"
};

// Iniciando o App do firebase

firebase.initializeApp(firebaseConfig, 'app1');
var database = firebase.app('app1').database();

// Referenciar o nó "timeline" no banco de dados
var timelineRef = database.ref("timeline");

// Função para registrar a entrada do usuário
function registerEntry(name) {
  timelineRef.set({
    name: name,
    timestamp: new Date().toLocaleString()
  });
}

// Função para registrar a saída do usuário
function exitTimeline() {
  timelineRef.remove();
}

// Função para verificar o status do Timeline
function checkTimelineStatus() {
  timelineRef.on("value", function(snapshot) {
    var data = snapshot.val();
    if (data) {
      displayStatus("Alguém está usando o Timeline.");
      displayLastAccess(data.name, data.timestamp);
    } else {
      displayStatus("Ninguém está usando o Timeline.");
      displayLastAccess("", "");
    }
  });
}

// Função para exibir o status
function displayStatus(status) {
  var statusDiv = document.getElementById("status");
  statusDiv.textContent = status;
}

// Função para exibir o último acesso
function displayLastAccess(name, timestamp) {
  var lastAccessDiv = document.getElementById("lastAccess");
  if (name && timestamp) {
    lastAccessDiv.textContent = "Último acesso: " + timestamp + " por " + name;
  } else {
    lastAccessDiv.textContent = "";
  }
}

// Manipulador de evento para envio do formulário
document.getElementById("entryForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var nameInput = document.getElementById("name");
  var name = nameInput.value;

  registerEntry(name);
  nameInput.value = "";
});



// CONFIGURANDO PARA O ORCAFASCIO




// Configurar a conexão com o Firebase 2

const firebaseConfig2 = {
  apiKey: "AIzaSyBlVrNME8fD1W7a5NhtggQT30Cm1v6mE4U",
  authDomain: "exxata-timeline.firebaseapp.com",
  databaseURL: "https://exxata-timeline-default-rtdb.firebaseio.com",
  projectId: "exxata-timeline",
  storageBucket: "exxata-timeline.appspot.com",
  messagingSenderId: "442283240555",
  appId: "1:442283240555:web:f585d2675d831b3d39552e"
};

// Iniciar o Firebase "App 2" (orçafascio)

firebase.initializeApp(firebaseConfig2, 'app2');
var database2 = firebase.app('app2').database();

// Referenciar o nó "timeline" no banco de dados
var timelineRef2 = database2.ref("orcafasio");

// Função para registrar a entrada do usuário
function registerEntry2(name2) {
  timelineRef2.set({
    name2: name2,
    timestamp2: new Date().toLocaleString()
  });
}

// Função para registrar a saída do usuário
function exitTimeline2() {
  timelineRef2.remove();
}

// Função para verificar o status do Timeline 2
function checkTimelineStatus2() {
  timelineRef2.on("value", function(snapshot2) {
    var data2 = snapshot2.val();
    if (data2) {
      displayStatus2("Alguém está usando o OrçaFascio.");
      displayLastAccess2(data2.name2, data2.timestamp2);
    } else {
      displayStatus2("Ninguém está usando o OrçaFascio.");
      displayLastAccess2("", "");
    }
  });
}

// Função para exibir o status 2
function displayStatus2(status2) {
  var statusDiv2 = document.getElementById("status2");
  statusDiv2.textContent = status2;
}

// Função para exibir o último acesso 2
function displayLastAccess2(name2, timestamp2) {
  var lastAccessDiv2 = document.getElementById("lastAccess2");
  if (name2 && timestamp2) {
    lastAccessDiv2.textContent = "Último acesso: " + timestamp2 + " por " + name2;
  } else {
    lastAccessDiv2.textContent = "";
  }
}

// Manipulador de evento para envio do formulário 2
// consertar essa parte mudar para name2, etc


document.getElementById("entryForm2").addEventListener("submit", function(event) {
  event.preventDefault();
  var nameInput = document.getElementById("name2");
  var name2 = nameInput.value;

  registerEntry2(name2);
  nameInput.value = "";
});
