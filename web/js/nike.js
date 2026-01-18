function showQuickView(sanpham) {
  const img = sanpham.querySelector("img");
  const name = sanpham.querySelector(".motasanpham");
  const price = sanpham.querySelector(".giatien");

  if (!img || !name || !price) return;

  // Gán thông tin
  document.getElementById("anhSanPham").src = img.src;
  document.getElementById("tenSanPham").innerText = name.innerText;
  document.getElementById("giaSanPham").innerText = price.innerText;


  // ===== XỬ LÝ SIZE =====
  const sizeBox = document.querySelector(".sizes");
  sizeBox.innerHTML = ""; // xoá size cũ

  // Kiểm tra có phải sản phẩm GIÀY không
  const laGiay = sanpham.closest(".khusanpham")?.querySelector(".bannergiay");

  // GIÀY → size số
  if (laGiay) {
    ["39", "40", "41", "42"].forEach(size => {
      const btn = document.createElement("button");
      btn.innerText = size;
      btn.onclick = () => chonSize(btn);
      sizeBox.appendChild(btn);
    });
  }
  // QUẦN ÁO → size chữ
  else {
    ["S", "M", "L", "XL"].forEach(size => {
      const btn = document.createElement("button");
      btn.innerText = size;
      btn.onclick = () => chonSize(btn);
      sizeBox.appendChild(btn);
    });
  }

  // Hiện popup
  document.getElementById("quickView").style.display = "flex";
}

// Đóng popup
function closeQuickView() {
  document.getElementById("quickView").style.display = "none";
}

// Chọn size
function chonSize(btnDuocChon) {
  document.querySelectorAll(".sizes button").forEach(btn => {
    btn.classList.remove("active");
  });
  btnDuocChon.classList.add("active");
}
function moThanhToan() {
  const sizeDaChon = document.querySelector(".sizes button.active");
  if (!sizeDaChon) {
    alert("Vui lòng chọn size!");
    return;
  }

  document.getElementById("ttTen").innerText =
    document.getElementById("tenSanPham").innerText;

  document.getElementById("ttGia").innerText =
    document.getElementById("giaSanPham").innerText;

  document.getElementById("ttSize").innerText =
    sizeDaChon.innerText;

  document.getElementById("quickView").style.display = "none";
  document.getElementById("thanhToan").style.display = "flex";
}

function dongThanhToan() {
  document.getElementById("thanhToan").style.display = "none";
}

function xacNhanThanhToan() {
  alert("🎉 Đặt hàng thành công!");
  document.getElementById("thanhToan").style.display = "none";
}
