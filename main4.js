
const firebaseConfig = {
    apiKey: "AIzaSyDab2F3oy_v4LJ9PtQzJVrF8j3Ei1AcFtM",
    authDomain: "collect-318ec.firebaseapp.com",
    databaseURL: "https://collect-318ec-default-rtdb.firebaseio.com",
    projectId: "collect-318ec",
    storageBucket: "collect-318ec.appspot.com",
    messagingSenderId: "228602922554",
    appId: "1:228602922554:web:152c0139284e8fb9c91703"
  };
  
  firebase.initializeApp(firebaseConfig);
  const CT = firebase.database().ref("chinh");
  
  // Gắn sự kiện submit cho biểu mẫu
  document.getElementById("collectf").addEventListener("submit", submitForm);
  
  // Hàm xử lý sự kiện submit biểu mẫu
  function submitForm(e) {
    e.preventDefault();
  
    // Lấy giá trị của phần tử radio được chọn
    var selectedChinh = document.querySelector('input[name="chinh"]:checked').value;
  
    // Lưu dữ liệu vào cơ sở dữ liệu Firebase
    saveMessages(selectedChinh);
  
 
  }
  
  // Hàm lưu dữ liệu vào Firebase
  const saveMessages = (chinh) => {
    var newContactForm = CT.push();
  
    newContactForm.set({
      chinh: chinh,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    });
  };
  
  
  document.getElementById("collectf").addEventListener("submit", function(event) {
    // Ngăn chặn hành vi mặc định của biểu mẫu
    event.preventDefault();

    // Kiểm tra xem người dùng đã chọn một trong các lựa chọn radio hay chưa
    var selectedOption = document.querySelector('input[name="chinh"]:checked');
    if (!selectedOption) {
        // Nếu không có lựa chọn nào được chọn, hiển thị một cảnh báo
        alert("Vui lòng chọn một lựa chọn trước khi tiếp tục!");
    } else {
      alert("Đã chọn");
        // hoặc điều hướng người dùng đến trang tiếp theo
         window.location.href = "index5.html";
    }
});
 // document.getElementById("collectf").addEventListener("submit", function(event) {
 //   event.preventDefault(); // Ngăn chặn sự kiện mặc định của form submit
 //   document.querySelector('button').removeAttribute('hidden'); // Hiển thị nút "NEXT"
//});