import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, onValue,} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfs2ZgftYnj2yePtyyLDT6V_FGFyjf3nA",
  authDomain: "ge-portfolio.firebaseapp.com",
  databaseURL: "https://ge-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ge-portfolio",
  storageBucket: "ge-portfolio.appspot.com",
  messagingSenderId: "212743200248",
  appId: "1:212743200248:web:edb8993092deb90bd9ca0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();

// navbar fix
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    
    if(window.pageYOffset > 20) {
        nav.classList.add("nav-fixed");
    } else {
        nav.classList.remove("nav-fixed");
    }
})

$(document).ready(function() {
    onValue(ref(db, "portfolio"), (snapshot) => {
        const data = snapshot.val().reverse();

        const itemsPerPage = 4;
    
        function displayData(data) {
          $('#dataList').empty();
          $.each(data, function(index, item) {
            $('#dataList').append(`
                <div class="card">
                    <h3><a href="${item?.link}" target="_blank">${item?.nama}</a></h3>
                    <a href="${item?.link}" target="_blank"><img src="${item?.image}" alt="${item?.nama}"></a>
                    <p>${item?.deskripsi}</p>
                </div>
            `);
          });
        }
    
        function handlePaginationClick(data, event) {
          displayData(data);
        }
    
        $('#paginationContainer').pagination({
          dataSource: data,
          pageSize: itemsPerPage,
          callback: handlePaginationClick
        });
    });

  });