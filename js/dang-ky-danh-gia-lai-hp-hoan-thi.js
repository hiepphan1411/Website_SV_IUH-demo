// Dữ liệu mẫu học phần hoãn thi
let danhSachHocPhan = [
  {
    id: 1,
    maHocPhan: "LTHDT01",
    tenHocPhan: "Lập trình hướng đối tượng",
    tinChi: 3,
    hoanThi: {
      hocKy: "HK1 2023-2024",
      hinhThucThi: "Thi viết",
    },
    danhGiaLai: null,
  },
  {
    id: 2,
    maHocPhan: "CSDL01",
    tenHocPhan: "Cơ sở dữ liệu",
    tinChi: 4,
    hoanThi: {
      hocKy: "HK1 2023-2024",
      hinhThucThi: "Thi thực hành",
    },
    danhGiaLai: {
      hocKy: "HK2 2023-2024",
      hinhThucThi: "Thi viết",
      maLHP: "CSDL01_01",
      lopDuKien: "DHKTPM17A",
      ngayDangKy: "15/01/2024",
      trangThai: 1,
      phanHoi: "Đồng ý",
      ngayPhanHoi: "18/01/2024",
      nguoiPhanHoi: "Nguyễn Văn A",
    },
  },
  {
    id: 3,
    maHocPhan: "KTMT01",
    tenHocPhan: "Kiến trúc máy tính",
    tinChi: 3,
    hoanThi: {
      hocKy: "HK1 2023-2024",
      hinhThucThi: "Thi viết",
    },
    danhGiaLai: {
      hocKy: "HK2 2023-2024",
      hinhThucThi: "Thi viết",
      maLHP: "KTMT01_02",
      lopDuKien: "DHKTPM17B",
      ngayDangKy: "20/01/2024",
      trangThai: 2,
      phanHoi: "",
      ngayPhanHoi: "",
      nguoiPhanHoi: "",
    },
  },
  {
    id: 4,
    maHocPhan: "MMT01",
    tenHocPhan: "Mạng máy tính",
    tinChi: 3,
    hoanThi: {
      hocKy: "HK2 2023-2024",
      hinhThucThi: "Thi viết",
    },
    danhGiaLai: null,
  },
];

const danhSachHocPhanMo = [
  {
    id: 1,
    maHocPhan: "LTHDT01",
    tenHocPhan: "Lập trình hướng đối tượng",
    lopDuKien: "DHKTPM17A",
    tinChi: 3,
    hocKy: "HK2 2023-2024",
    hinhThucThi: "Thi viết",
  },
  {
    id: 2,
    maHocPhan: "LTHDT01",
    tenHocPhan: "Lập trình hướng đối tượng",
    lopDuKien: "DHKTPM17B",
    tinChi: 3,
    hocKy: "HK2 2023-2024",
    hinhThucThi: "Thi viết",
  },
  {
    id: 3,
    maHocPhan: "CSDL01",
    tenHocPhan: "Cơ sở dữ liệu",
    lopDuKien: "DHKTPM17A",
    tinChi: 4,
    hocKy: "HK2 2023-2024",
    hinhThucThi: "Thi thực hành",
  },
  {
    id: 4,
    maHocPhan: "MMT01",
    tenHocPhan: "Mạng máy tính",
    lopDuKien: "DHKTPM17C",
    tinChi: 3,
    hocKy: "HK2 2023-2024",
    hinhThucThi: "Thi viết",
  },
];

let hocPhanHienTai = null;

function renderTable() {
  const tableBody = document.getElementById("tableBody");
  if (!tableBody) return;

  let html = "";
  danhSachHocPhan.forEach((item, index) => {
    const daDangKy = item.danhGiaLai !== null;
    const status = daDangKy
      ? item.danhGiaLai.trangThai === 1
        ? `<span class="badge badge-completed">Đã duyệt</span>`
        : item.danhGiaLai.trangThai === 2
          ? `<span class="badge badge-progress">Đang chờ</span>`
          : `<span class="badge badge-denied">Từ chối</span>`
      : "";

    html += `
      <tr>
        <td class="text-center">${index + 1}</td>
        <td class="text-center">
          <div class="d-flex gap-2 justify-content-center">
            ${
              !daDangKy
                ? `<button class="icon icon-add" onclick="openModal(${item.id})" title="Đăng ký">
                     <i class="fa-solid fa-plus"></i>
                   </button>`
                : `<button class="icon icon-edit" onclick="editItem(${item.id})" title="Chỉnh sửa">
                     <i class="fa-solid fa-pen-to-square"></i>
                   </button>
                   <button class="icon icon-delete" onclick="deleteItem(${item.id})" title="Xóa">
                     <i class="fa-solid fa-xmark"></i>
                   </button>`
            }
          </div>
        </td>
        <td class="text-center">${item.maHocPhan}</td>
        <td class="ps-4">${item.tenHocPhan}</td>
        <td class="text-center">${item.tinChi}</td>
        <!-- Thông tin hoãn thi -->
        <td class="text-center">${item.hoanThi.hocKy}</td>
        <td class="text-center">${item.hoanThi.hinhThucThi}</td>
        <!-- Thông tin đánh giá lại -->
        <td class="text-center">${item.danhGiaLai?.hocKy || ""}</td>
        <td class="text-center">${item.danhGiaLai?.hinhThucThi || ""}</td>
        <td class="text-center">${item.danhGiaLai?.maLHP || ""}</td>
        <td class="text-center">${item.danhGiaLai?.lopDuKien || ""}</td>
        <td class="text-center">${item.danhGiaLai?.ngayDangKy || ""}</td>
        <td class="text-center">
          ${status}
        </td>
        <td class="text-center">${item.danhGiaLai?.phanHoi || ""}</td>
        <td class="text-center">${item.danhGiaLai?.ngayPhanHoi || ""}</td>
        <td class="text-center">${item.danhGiaLai?.nguoiPhanHoi || ""}</td>
      </tr>
    `;
  });

  tableBody.innerHTML = html;
}

function renderTableOpenSubject() {
  const tableBody = document.getElementById("tableOpenSubject");
  if (!tableBody) return;

  let html = "";
  danhSachHocPhanMo.forEach((item, index) => {
    html += `
      <tr>
        <td class="text-center">
          <input type="checkbox" name="selectedSubject" value="${item.id}" />
        </td>
        <td class="text-center">${index + 1}</td>
        <td class="text-center">${item.maHocPhan}</td>
        <td class="ps-4">${item.tenHocPhan}</td>
        <td class="ps-4">${item.lopDuKien}</td>
        <td class="text-center">${item.tinChi}</td>
        <td class="text-center">${item.hocKy}</td>
        <td class="text-center">${item.hinhThucThi}</td>
      </tr>
    `;
  });

  tableBody.innerHTML = html;
}

function openModal(id) {
  hocPhanHienTai = danhSachHocPhan.find((item) => item.id === id);
  if (!hocPhanHienTai) return;

  const modal = document.getElementById("certificateModal");
  modal.style.display = "flex";

  document.getElementById("formModal").reset();

  renderTableOpenSubject();
}

function closeModal() {
  const modal = document.getElementById("certificateModal");
  modal.style.display = "none";
  hocPhanHienTai = null;
}

function toggleSelectAll(checkbox) {
  const checkboxes = document.querySelectorAll('input[name="selectedSubject"]');
  checkboxes.forEach((cb) => {
    cb.checked = checkbox.checked;
  });
}

function submitForm() {
  const selectedPeriod = document.getElementById("period").value;
  const selectedSubjects = document.querySelectorAll(
    'input[name="selectedSubject"]:checked',
  );

  if (!selectedPeriod) {
    alert("Vui lòng chọn đợt!");
    return;
  }

  if (selectedSubjects.length === 0) {
    alert("Vui lòng chọn ít nhất một học phần!");
    return;
  }

  const firstSelectedId = parseInt(selectedSubjects[0].value);
  const selectedHocPhan = danhSachHocPhanMo.find(
    (item) => item.id === firstSelectedId,
  );

  if (hocPhanHienTai && selectedHocPhan) {
    hocPhanHienTai.danhGiaLai = {
      hocKy: selectedHocPhan.hocKy,
      hinhThucThi: selectedHocPhan.hinhThucThi,
      maLHP: selectedHocPhan.maHocPhan + "_01",
      lopDuKien: selectedHocPhan.lopDuKien,
      ngayDangKy: new Date().toLocaleDateString("vi-VN"),
      trangThai: 2,
      phanHoi: "",
      ngayPhanHoi: "",
      nguoiPhanHoi: "",
    };

    renderTable();

    closeModal();

    alert("Đăng ký thành công!");
  }
}

function editItem(id) {
  const item = danhSachHocPhan.find((hp) => hp.id === id);
  if (!item || !item.danhGiaLai) return;

  alert(
    `Chỉnh sửa đăng ký cho học phần: ${item.tenHocPhan}\n` +
      `Lớp dự kiến: ${item.danhGiaLai.lopDuKien}\n` +
      `Trạng thái: ${item.danhGiaLai.trangThai}`,
  );

  openModal(id);
}

function deleteItem(id) {
  const item = danhSachHocPhan.find((hp) => hp.id === id);
  if (!item) return;

  if (
    confirm(`Bạn có chắc chắn muốn xóa đăng ký học phần: ${item.tenHocPhan}?`)
  ) {
    item.danhGiaLai = null;

    renderTable();

    alert("Đã xóa đăng ký thành công!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderTable();

  const btnSearch = document.querySelector(".btn-add");
  if (btnSearch) {
    btnSearch.addEventListener("click", function () {
      const period = document.getElementById("periodSelect").value;
      console.log("Tìm kiếm theo đợt:", period);
      renderTable();
    });
  }

  const btnRefresh = document.querySelector(".btn-propose");
  if (btnRefresh) {
    btnRefresh.addEventListener("click", function () {
      document.getElementById("periodSelect").value = "";
      renderTable();
    });
  }

  const modal = document.getElementById("certificateModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});
