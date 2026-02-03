let currentRowId = null;

function toggleSemester(id) {
  const content = document.getElementById(id);
  const toggle = document.getElementById("toggle-" + id);

  content.classList.toggle("show");
  toggle.classList.toggle("rotated");
}

function toggleDetail(id) {
  const detailRow = document.getElementById("detail-" + id);
  const allDetails = document.querySelectorAll(".detail-row");

  allDetails.forEach((row) => {
    if (row.id !== "detail-" + id) {
      row.classList.remove("show");
    }
  });

  detailRow.classList.toggle("show");
}

function openRegisterModal(courseCode, courseName, rowId) {
  currentRowId = rowId;
  document.getElementById("modalCourseCode").value = courseCode;
  document.getElementById("modalCourseName").value = courseName;

  const modal = new bootstrap.Modal(document.getElementById("registerModal"));
  modal.show();
}

document
  .getElementById("modalFileInput")
  .addEventListener("change", function (e) {
    const files = e.target.files;
    if (files.length > 0) {
      const uploadArea = document.querySelector(".file-upload-area");
      const fileNames = Array.from(files)
        .map((f) => f.name)
        .join(", ");
      uploadArea.innerHTML = `
                    <i class="bi bi-file-earmark-check" style="color: #28a745;"></i>
                    <div class="file-upload-text" style="color: #28a745;">
                        ${files.length} file(s) đã chọn
                    </div>
                    <div class="file-upload-note">
                        ${fileNames}
                    </div>
                `;
    }
  });

function submitRegistration() {
  const form = document.getElementById("registerForm");
  const reason = document.getElementById("modalReason").value;
  const files = document.getElementById("modalFileInput").files;

  if (!reason.trim()) {
    alert("Vui lòng nhập lý do hoãn thi!");
    return;
  }

  if (files.length === 0) {
    alert("Vui lòng đính kèm minh chứng!");
    return;
  }

  alert("Đăng ký hoãn thi thành công!");

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("registerModal"),
  );
  modal.hide();
  form.reset();

  document.querySelector(".file-upload-area").innerHTML = `
                <i class="bi bi-cloud-upload"></i>
                <div class="file-upload-text">
                    Kéo thả file hoặc <span style="color: #4dabf7; cursor: pointer;">nhấn để tải lên</span>
                </div>
                <div class="file-upload-note">
                    Định dạng JPG, PNG, PDF (Max 10MB)
                </div>
            `;
}

// TODO: Chỉnh sửa
// function editRegistration(id) {
//
// }

function deleteRegistration(id) {
  if (confirm("Bạn có chắc chắn muốn xóa đăng ký này?")) {
    alert("Đã xóa đăng ký hoãn thi");
  }
}

function filterSemester(value) {
  console.log("Filtering by:", value);
}

window.addEventListener("load", function () {
  toggleSemester("sem1");
});

// Load dữ liệu
// async function loadHoanThiData() {
//   const response = await fetch("../data/hoan-thi.json");
//   const data = await response.json();
//   renderHoanThiTable(data, "sem1");
//   renderHoanThiTable(data, "sem2");
// }

// function renderHoanThiTable(data, semesterId) {
//   const tableBody = document.querySelector(`#${semesterId} .data-table tbody`);
//   if (!tableBody) return;
//   let html = "";
//   data.forEach((row, idx) => {
//     html += `
//       <tr class="expandable-row" onclick="toggleDetail(${row.id})">
//         <td>${idx + 1}</td>
//         <td>${row.maHocPhan}</td>
//         <td style="text-align: left; padding-left: 20px">${row.tenMonHoc}</td>
//         <td>${row.soTC}</td>
//         <td>${row.dotThi}</td>
//         <td>${row.ngayThi}</td>
//         <td>${row.lyDo}</td>
//         <td>${row.minhChung === "Xem file" ? `<a href="#" style="color: #4dabf7">Xem file</a>` : row.minhChung}</td>
//         <td>${row.ngayDangKy}</td>
//         <td>${renderStatusBadge(row.trangThai)}</td>
//         <td>${row.lyDoKhongDuyet}</td>
//         <td>${row.ngayDuyet}</td>
//         <td>
//           <button class="action-btn" onclick="event.stopPropagation(); openRegisterModal('${row.maHocPhan}', '${row.tenMonHoc}', ${row.id});" title="Đăng ký">
//             <i class="fa-solid fa-plus"></i>
//           </button>
//         </td>
//       </tr>
//       <tr class="detail-row" id="detail-${row.id}">
//         <td colspan="13">
//           <div class="detail-content">
//             <div class="detail-section">
//               <div class="detail-section-title">Lịch sử thay đổi</div>
//               <table class="detail-table">
//                 <thead>
//                   <tr>
//                     <th>Thời gian</th>
//                     <th>Thao tác</th>
//                     <th>Người thực hiện</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>01/02/2026</td>
//                     <td>Đăng ký</td>
//                     <td>Nguyễn Văn A</td>
//                   </tr>
//                 </tbody>
//               </table>
//               <div class="pagination-controls">
//                 <button class="action-btn" title="Trang trước"><i class="fa-solid fa-chevron-left"></i></button>
//                 <span>1/1</span>
//                 <button class="action-btn" title="Trang sau"><i class="fa-solid fa-chevron-right"></i></button>
//               </div>
//             </div>
//           </div>
//         </td>
//       </tr>
//     `;
//   });
//   tableBody.innerHTML = html;
// }

// function renderStatusBadge(status) {
//   if (status === "Chờ duyệt")
//     return '<span class="status-badge status-pending">Chờ duyệt</span>';
//   if (status === "Đã duyệt")
//     return '<span class="status-badge status-approved">Đã duyệt</span>';
//   if (status === "-" || !status) return "-";
//   return `<span class="status-badge">${status}</span>`;
// }

// window.addEventListener("DOMContentLoaded", loadHoanThiData);
