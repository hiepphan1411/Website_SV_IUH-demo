let allReceipts = [];
let filteredReceipts = [];
let currentPage = 1;
const itemsPerPage = 5;
let currentReceipt = null;

async function loadReceiptsData() {
  try {
    const response = await fetch("../data/phieu-thu-tong-hop.json");
    const data = await response.json();
    allReceipts = data.receipts;
    filteredReceipts = [...allReceipts];
    renderTable();
    updatePagination();
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
  }
}

function formatCurrency(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function parseDate(dateStr) {
  const [datePart, timePart] = dateStr.split(" ");
  const [day, month, year] = datePart.split("/");
  return new Date(year, month - 1, day);
}

function renderTable() {
  const tbody = document.querySelector(".receipts-table tbody");
  tbody.innerHTML = "";

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReceipts = filteredReceipts.slice(startIndex, endIndex);

  currentReceipts.forEach((receipt, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="text-center">${startIndex + index + 1}</td>
      <td>
        <span class="receipt-number">${receipt.soPhieu}</span>
      </td>
      <td>${receipt.maHoaDon}</td>
      <td>${receipt.ngayThu}</td>
      <td class="text-center">
        <span class="amount">${formatCurrency(receipt.soTien)}</span>
      </td>
      <td>${receipt.donViThu}</td>
      <td>
        <span class="type-badge">${receipt.loaiHDDT}</span>
      </td>
      <td class="text-center">
        <div class="action-buttons">
          <button class="action-icon-btn refresh" title="Làm mới">
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </td>
      <td class="text-center">
        <div class="action-buttons">
          <button
            class="action-icon-btn view"
            onclick="showReceiptDetail(${receipt.id})"
            title="Xem chi tiết"
          >
            <i class="fas fa-eye"></i>
          </button>
        </div>
      </td>
      <td class="text-center">
        <div class="action-buttons">
          <button
            class="action-icon-btn history"
            onclick="showReceiptLog(${receipt.id})"
            title="Lịch sử"
          >
            <i class="fas fa-history"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function updatePagination() {
  const totalPages = Math.ceil(filteredReceipts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(
    currentPage * itemsPerPage,
    filteredReceipts.length,
  );

  document.querySelector(".pagination-info").textContent =
    `Hiển thị ${startIndex}-${endIndex} trong tổng số ${filteredReceipts.length} phiếu thu`;

  const paginationUl = document.querySelector(".pagination");
  paginationUl.innerHTML = `
    <li class="page-item">
      <a class="page-step" href="#" onclick="changePage(${currentPage - 1}); return false;">
        <i class="fas fa-chevron-left"></i>
      </a>
    </li>
  `;

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationUl.innerHTML += `
      <li class="page-item ${i === currentPage ? "active" : ""}">
        <a class="page-link border-raddius-50" href="#" onclick="changePage(${i}); return false;">${i}</a>
      </li>
    `;
  }

  paginationUl.innerHTML += `
    <li class="page-item">
      <a class="page-step" href="#" onclick="changePage(${currentPage + 1}); return false;">
        <i class="fas fa-chevron-right"></i>
      </a>
    </li>
  `;
}

function changePage(page) {
  const totalPages = Math.ceil(filteredReceipts.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderTable();
  updatePagination();
}

function showReceiptDetail(receiptId) {
  currentReceipt = allReceipts.find((r) => r.id === receiptId);
  if (!currentReceipt) return;

  document.querySelector("#receiptDetailModal .receipt-info-grid").innerHTML = `
    <div class="receipt-info-item">
      <div class="receipt-info-label">
        <i class="fas fa-hashtag"></i>
        SỐ PHIẾU
      </div>
      <div class="receipt-info-value primary">${currentReceipt.soPhieu}</div>
    </div>
    <div class="receipt-info-item">
      <div class="receipt-info-label">
        <i class="fas fa-file-invoice"></i>
        MÃ HÓA ĐƠN
      </div>
      <div class="receipt-info-value">${currentReceipt.maHoaDon}</div>
    </div>
    <div class="receipt-info-item">
      <div class="receipt-info-label">
        <i class="fas fa-calendar-alt"></i>
        NGÀY THU
      </div>
      <div class="receipt-info-value">${currentReceipt.ngayThu}</div>
    </div>
    <div class="receipt-info-item">
      <div class="receipt-info-label">
        <i class="fas fa-user"></i>
        ĐƠN VỊ THU
      </div>
      <div class="receipt-info-value">${currentReceipt.donViThu}</div>
    </div>
  `;

  const detailTableBody = document.querySelector(
    "#receiptDetailModal .detail-table tbody",
  );
  detailTableBody.innerHTML = "";

  currentReceipt.details.forEach((detail) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${detail.stt}</td>
      <td>${detail.ma}</td>
      <td>${detail.noiDungThu}</td>
      <td>${detail.hocKy}</td>
      <td class="text-right ${detail.soTien < 0 ? "amount negative" : ""}">${formatCurrency(detail.soTien)}</td>
    `;
    detailTableBody.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.className = "total-row";
  totalRow.innerHTML = `
    <td colspan="4" class="text-right">TỔNG CỘNG:</td>
    <td class="text-right">${formatCurrency(currentReceipt.soTien)}</td>
  `;
  detailTableBody.appendChild(totalRow);

  const modal = new bootstrap.Modal(
    document.getElementById("receiptDetailModal"),
  );
  modal.show();
}

function showReceiptLog(receiptId) {
  const receipt = allReceipts.find((r) => r.id === receiptId);
  if (!receipt || receipt.logs.length === 0) {
    alert("Không có nhật ký cho phiếu thu này");
    return;
  }

  const logTableBody = document.querySelector(
    "#receiptLogModal .detail-table tbody",
  );
  logTableBody.innerHTML = "";

  receipt.logs.forEach((log) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${log.stt}</td>
      <td>${log.maGiaoDich}</td>
      <td>${log.kyHieu}</td>
      <td>${log.ngayTao}</td>
      <td>${log.soHoaDon}</td>
      <td>${log.trangThaiHoaDon}</td>
      <td>${log.trangThaiKy}</td>
      <td>${log.thongBao}</td>
    `;
    logTableBody.appendChild(row);
  });

  const modal = new bootstrap.Modal(document.getElementById("receiptLogModal"));
  modal.show();
}

function toggleFilterDropdown() {
  const dropdown = document.getElementById("filterDropdown");
  dropdown.classList.toggle("show");
}

function closeFilterDropdown() {
  const dropdown = document.getElementById("filterDropdown");
  dropdown.classList.remove("show");
}

function applyFilter() {
  const fromDate = document.getElementById("fromDate").value;
  const toDate = document.getElementById("toDate").value;
  const loaiHDDT = document.getElementById("loaiHDDT").value;

  filteredReceipts = allReceipts.filter((receipt) => {
    const receiptDate = parseDate(receipt.ngayThu);

    if (fromDate) {
      const from = new Date(fromDate);
      if (receiptDate < from) return false;
    }

    if (toDate) {
      const to = new Date(toDate);
      if (receiptDate > to) return false;
    }

    if (loaiHDDT && loaiHDDT !== "all") {
      if (receipt.loaiHDDT !== loaiHDDT) return false;
    }

    return true;
  });

  currentPage = 1;
  renderTable();
  updatePagination();
  closeFilterDropdown();
}

function resetFilter() {
  document.getElementById("fromDate").value = "";
  document.getElementById("toDate").value = "";
  document.getElementById("loaiHDDT").value = "all";

  filteredReceipts = [...allReceipts];
  currentPage = 1;
  renderTable();
  updatePagination();
  closeFilterDropdown();
}

document.addEventListener("DOMContentLoaded", function () {
  loadReceiptsData();

  const filterBtn = document.querySelector(".filter-wrapper .filter-btn");
  if (filterBtn) {
    filterBtn.addEventListener("click", toggleFilterDropdown);
  }

  // Đóng dropdown khi click bên ngoài
  document.addEventListener("click", function (event) {
    const filterWrapper = document.querySelector(".filter-wrapper");
    if (filterWrapper && !filterWrapper.contains(event.target)) {
      closeFilterDropdown();
    }
  });
});
