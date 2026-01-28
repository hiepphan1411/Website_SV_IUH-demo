const debtData = {
  fees: {
    summary: {
      totalDebt: 1000000,
    },
    items: [
      {
        stt: 1,
        year: "2024 - 2025",
        dot: "",
        code: "TN",
        name: "Học phí tốt nghiệp",
        amount: 1000000,
        required: true,
        paymentDate: null,
        paid: 0,
        debt: 1000000,
      },
      {
        stt: 2,
        year: "2025 - 2026",
        dot: "",
        code: "BHYT2026",
        name: "Thu bảo hiểm y tế năm 2026",
        amount: 632000,
        required: false,
        paymentDate: "16/12/2025",
        paid: 632000,
        debt: 0,
      },
    ],
  },
  tuition: {
    summary: {
      totalRegistered: 55890000,
    },
    groups: [
      {
        name: "2025_HK2 (2025 - 2026)",
        semester: "HK2 (2025 - 2026)",
        items: [
          {
            stt: 1,
            code: "4203001549",
            classCode: "420300154901",
            name: "Kiến trúc và Thiết kế Phần mềm",
            credits: 4,
            initialFee: 3380000,
            discount: 0,
            discountAmount: 0,
            payAmount: 3380000,
            status: "Đăng ký mới",
            paymentDate: "11/12/2025",
            paid: 3380000,
            deduction: 0,
            debtReduction: 0,
            debt: 0,
            paidStatus: true,
            noDebtTracking: true,
          },
          {
            stt: 2,
            code: "4203003147",
            classCode: "420300314705",
            name: "Công nghệ mới trong phát triển ứng dụng CNTT",
            credits: 3,
            initialFee: 2630000,
            discount: 0,
            discountAmount: 0,
            payAmount: 2630000,
            status: "Đăng ký mới",
            paymentDate: "11/12/2025",
            paid: 2630000,
            deduction: 0,
            debtReduction: 0,
            debt: 0,
            paidStatus: true,
            noDebtTracking: true,
          },
          {
            stt: 3,
            code: "4203003098",
            classCode: "420300309801",
            name: "Thực tập doanh nghiệp",
            credits: 5,
            initialFee: 3750000,
            discount: 0,
            discountAmount: 0,
            payAmount: 3750000,
            status: "Đăng ký mới",
            paymentDate: "07/01/2026",
            paid: 3750000,
            deduction: 0,
            debtReduction: 0,
            debt: 0,
            paidStatus: true,
            noDebtTracking: true,
          },
        ],
      },
    ],
  },
  courses: {
    groups: [
      {
        name: "2025_HK2 (2025 - 2026)",
        semester: "HK2 (2025 - 2026)",
        items: [
          {
            stt: 1,
            code: "001549",
            classCode: "420300154901",
            unitPrice: 750000,
            name: "Kiến trúc và Thiết kế Phần mềm",
            credits: 4,
            registerDate: "31/10/2025 07:57",
            registerStatus: "Xóa bỏ đăng ký",
            classStatus: "Đã khóa",
            initialFee: 3380000,
            discount: 0,
            payAmount: 3380000,
            noDebtTracking: false,
            paid: 0,
            hasGrade: false,
            debt: 0,
          },
          {
            stt: 2,
            code: "003147",
            classCode: "420300314705",
            unitPrice: 750000,
            name: "Công nghệ mới trong phát triển ứng dụng CNTT",
            credits: 3,
            registerDate: "31/10/2025 07:54",
            registerStatus: "Đăng ký mới",
            classStatus: "Đã khóa",
            initialFee: 2630000,
            discount: 0,
            payAmount: 2630000,
            noDebtTracking: false,
            paid: 0,
            hasGrade: false,
            debt: 0,
          },
          {
            stt: 3,
            code: "003098",
            classCode: "420300309801",
            unitPrice: 750000,
            name: "Thực tập doanh nghiệp",
            credits: 5,
            registerDate: "08/11/2025 17:39",
            registerStatus: "Xóa bỏ đăng ký",
            classStatus: "Đã khóa",
            initialFee: 3750000,
            discount: 0,
            payAmount: 3750000,
            noDebtTracking: false,
            paid: 0,
            hasGrade: false,
            debt: 0,
          },
          {
            stt: 4,
            code: "001549",
            classCode: "420300154901",
            unitPrice: 750000,
            name: "Kiến trúc và Thiết kế Phần mềm",
            credits: 4,
            registerDate: "08/11/2025 08:25",
            registerStatus: "Đăng ký mới",
            classStatus: "Đã khóa",
            initialFee: 3380000,
            discount: 0,
            payAmount: 3380000,
            noDebtTracking: false,
            paid: 0,
            hasGrade: false,
            debt: 0,
          },
          {
            stt: 5,
            code: "003098",
            classCode: "420300309801",
            unitPrice: 750000,
            name: "Thực tập doanh nghiệp",
            credits: 5,
            registerDate: "07/01/2026 14:08",
            registerStatus: "Đăng ký mới",
            classStatus: "Đã khóa",
            initialFee: 3750000,
            discount: 0,
            payAmount: 3750000,
            noDebtTracking: false,
            paid: 0,
            hasGrade: false,
            debt: 0,
          },
        ],
      },
    ],
  },
  debtList: {
    items: [
      {
        stt: 1,
        dot: "HK1 (2022 - 2023)",
        classCode: "420301416477",
        name: "Triết học Mác - Lênin",
        paid: 2250000,
        debtReduction: 270000,
      },
      {
        stt: 2,
        dot: "HK1 (2022 - 2023)",
        classCode: "420300325966",
        name: "Toán cao cấp 1",
        paid: 1500000,
        debtReduction: 180000,
      },
      {
        stt: 3,
        dot: "HK1 (2022 - 2023)",
        classCode: "420300200907",
        name: "Nhập môn Tin học",
        paid: 1500000,
        debtReduction: 180000,
      },
      {
        stt: 4,
        dot: "HK1 (2022 - 2023)",
        classCode: "420300319249",
        name: "Kỹ năng làm việc nhóm",
        paid: 1500000,
        debtReduction: 180000,
      },
      {
        stt: 5,
        dot: "HK1 (2022 - 2023)",
        classCode: "420300324283",
        name: "Giáo dục Quốc phòng và An ninh 1",
        paid: 3000000,
        debtReduction: 360000,
      },
      {
        stt: 6,
        dot: "HK1 (2022 - 2023)",
        classCode: "420300330741",
        name: "Giáo dục thể chất 1",
        paid: 1500000,
        debtReduction: 180000,
      },
      {
        stt: 7,
        dot: "HK2 (2022 - 2023)",
        classCode: "420300330680",
        name: "Giáo dục thể chất 2",
        paid: 1500000,
        debtReduction: 180000,
      },
      {
        stt: 8,
        dot: "HK2 (2022 - 2023)",
        classCode: "420300335479",
        name: "Giáo dục quốc phòng và an ninh 2",
        paid: 3000000,
        debtReduction: 360000,
      },
      {
        stt: 9,
        dot: "HK2 (2022 - 2023)",
        classCode: "420301416532",
        name: "Kinh tế chính trị Mác - Lênin",
        paid: 1500000,
        debtReduction: 180000,
      },
      {
        stt: 10,
        dot: "HK2 (2022 - 2023)",
        classCode: "420300213708",
        name: "Hệ thống Máy tính",
        paid: 3400000,
        debtReduction: 270000,
      },
      {
        stt: 11,
        dot: "HK2 (2022 - 2023)",
        classCode: "420300332075",
        name: "Phương pháp tính",
        paid: 2250000,
        debtReduction: 270000,
      },
      {
        stt: 12,
        dot: "HK2 (2022 - 2023)",
        classCode: "420300105809",
        name: "Mạng máy tính",
        paid: 2250000,
        debtReduction: 270000,
      },
      {
        stt: 13,
        dot: "HK2 (2022 - 2023)",
        classCode: "420300094102",
        name: "Kỹ thuật lập trình",
        paid: 2650000,
        debtReduction: 180000,
      },
    ],
  },
  debtDetail: {
    items: [
      {
        stt: 1,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094205",
        name: "Cấu trúc dữ liệu và giải thuật",
        deduction: 360000,
        receiptNo: "-6479",
        executor: "Nguyễn Thị Hiền",
        date: "18/07/2023",
      },
      {
        stt: 2,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094205",
        name: "Cấu trúc dữ liệu và giải thuật",
        deduction: 180000,
        receiptNo: "-6479",
        executor: "Nguyễn Thị Hiền",
        date: "18/07/2023",
      },
      {
        stt: 3,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094205",
        name: "Cấu trúc dữ liệu và giải thuật",
        deduction: 180000,
        receiptNo: "-6479",
        executor: "Nguyễn Thị Hiền",
        date: "18/07/2023",
      },
      {
        stt: 4,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094205",
        name: "Cấu trúc dữ liệu và giải thuật",
        deduction: 180000,
        receiptNo: "-6479",
        executor: "Nguyễn Thị Hiền",
        date: "18/07/2023",
      },
      {
        stt: 5,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094205",
        name: "Cấu trúc dữ liệu và giải thuật",
        deduction: 180000,
        receiptNo: "-6479",
        executor: "Nguyễn Thị Hiền",
        date: "18/07/2023",
      },
      {
        stt: 6,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094205",
        name: "Cấu trúc dữ liệu và giải thuật",
        deduction: 270000,
        receiptNo: "-6479",
        executor: "Nguyễn Thị Hiền",
        date: "18/07/2023",
      },
      {
        stt: 7,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094205",
        name: "Cấu trúc dữ liệu và giải thuật",
        deduction: 180000,
        receiptNo: "-6479",
        executor: "Nguyễn Thị Hiền",
        date: "18/07/2023",
      },
      {
        stt: 8,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094205",
        name: "Cấu trúc dữ liệu và giải thuật",
        deduction: 360000,
        receiptNo: "-6479",
        executor: "Nguyễn Thị Hiền",
        date: "18/07/2023",
      },
      {
        stt: 9,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094205",
        name: "Cấu trúc dữ liệu và giải thuật",
        deduction: 180000,
        receiptNo: "-6479",
        executor: "Nguyễn Thị Hiền",
        date: "18/07/2023",
      },
      {
        stt: 10,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094205",
        name: "Cấu trúc dữ liệu và giải thuật",
        deduction: 270000,
        receiptNo: "-6479",
        executor: "Nguyễn Thị Hiền",
        date: "18/07/2023",
      },
      {
        stt: 11,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094206",
        name: "Lập trình hướng đối tượng",
        deduction: 360000,
        receiptNo: "-6480",
        executor: "Trần Văn An",
        date: "20/07/2023",
      },
      {
        stt: 12,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094206",
        name: "Lập trình hướng đối tượng",
        deduction: 180000,
        receiptNo: "-6480",
        executor: "Trần Văn An",
        date: "20/07/2023",
      },
      {
        stt: 13,
        dot: "HK1 (2023 - 2024)",
        classCode: "420300094206",
        name: "Lập trình hướng đối tượng",
        deduction: 180000,
        receiptNo: "-6480",
        executor: "Trần Văn An",
        date: "20/07/2023",
      },
    ],
  },
  unpaidFees: [
    {
      id: 1,
      category: "Khoản thu khác",
      categoryType: "other-fees",
      name: "Học phí tốt nghiệp",
      semester: "2024 - 2025",
      amount: 1000000,
      deadline: "31/03/2026",
    },
    {
      id: 2,
      category: "Học phí",
      categoryType: "tuition",
      name: "Nhập môn an toàn thông tin",
      semester: "HK2 (2025 - 2026)",
      amount: 2500000,
      deadline: "15/02/2026",
    },
    {
      id: 3,
      category: "Khoản thu khác",
      categoryType: "other-fees",
      name: "Lệ phí thi lại môn Cấu trúc dữ liệu",
      semester: "HK1 (2025 - 2026)",
      amount: 150000,
      deadline: "28/02/2026",
    },
  ],
};

function toggleGroup(headerElement, groupName) {
  const groupRows = document.querySelectorAll(`tr[data-group="${groupName}"]`);
  const icon = headerElement.querySelector(".toggle-icon");
  const isCollapsed = headerElement.classList.contains("collapsed");

  if (isCollapsed) {
    // Expand
    groupRows.forEach((row) => {
      if (!row.classList.contains("group-header")) {
        row.classList.remove("hidden");
      }
    });
    headerElement.classList.remove("collapsed");
  } else {
    // Collapse
    groupRows.forEach((row) => {
      if (!row.classList.contains("group-header")) {
        row.classList.add("hidden");
      }
    });
    headerElement.classList.add("collapsed");
  }
}

function formatCurrency(amount) {
  return amount.toLocaleString("vi-VN");
}

// ==================== RENDER UNPAID FEES ====================
function renderUnpaidFeesTable() {
  const tbody = document.getElementById("unpaid-table-body");
  const totalDisplay = document.getElementById("unpaid-total-display");

  if (!tbody) return;

  const unpaidFees = debtData.unpaidFees || [];

  // If no unpaid fees, show empty message
  if (unpaidFees.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="unpaid-empty">
          <div class="unpaid-empty-text">Không có khoản nào chưa thanh toán</div>
        </td>
      </tr>
    `;
    if (totalDisplay) {
      totalDisplay.textContent = "0₫";
    }
    return;
  }

  // Calculate total unpaid amount
  const totalAmount = unpaidFees.reduce((sum, fee) => sum + fee.amount, 0);

  // Render table rows
  let html = "";
  unpaidFees.forEach((fee, index) => {
    html += `
      <tr>
        <td>${index + 1}</td>
        <td>
          <span class="unpaid-category ${fee.categoryType}">${fee.category}</span>
        </td>
        <td>${fee.name}</td>
        <td>${fee.semester}</td>
        <td style="text-align: right">
          <span class="unpaid-amount">${formatCurrency(fee.amount)}₫</span>
        </td>
        <td style="text-align: center">
          <span class="unpaid-deadline">${fee.deadline}</span>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;

  // Update total display
  if (totalDisplay) {
    totalDisplay.textContent = formatCurrency(totalAmount) + "₫";
  }
}

function renderFeesTable() {
  const tbody = document.querySelector("#fees table tbody");
  if (!tbody) return;

  const { items } = debtData.fees;

  // Calculate totals
  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);
  const totalPaid = items.reduce((sum, item) => sum + item.paid, 0);
  const totalDebt = items.reduce((sum, item) => sum + item.debt, 0);

  let html = `
    <tr class="total-row">
      <td></td>
      <td colspan="4"></td>
      <td style="text-align: right">${formatCurrency(totalAmount)}</td>
      <td></td>
      <td></td>
      <td style="text-align: right">${formatCurrency(totalPaid)}</td>
      <td style="text-align: right" class="amount-negative">${formatCurrency(totalDebt)}</td>
      <td></td>
    </tr>
  `;

  items.forEach((item) => {
    const requiredIcon = item.required
      ? '<span class="status-badge paid"><i class="fas fa-check-circle"></i></span>'
      : '<span class="status-badge unpaid"><i class="fas fa-times-circle"></i></span>';

    const paymentDateText = item.paymentDate || "-";
    const paidClass = item.paid > 0 ? "amount-positive" : "amount-zero";
    const debtClass = item.debt > 0 ? "amount-negative" : "amount-zero";

    html += `
      <tr>
        <td>${item.stt}</td>
        <td>${item.year}</td>
        <td>${item.dot}</td>
        <td>${item.code}</td>
        <td>${item.name}</td>
        <td style="text-align: right">${formatCurrency(item.amount)}</td>
        <td style="text-align: center">${requiredIcon}</td>
        <td style="text-align: center">${paymentDateText}</td>
        <td style="text-align: right" class="${paidClass}">${formatCurrency(item.paid)}</td>
        <td style="text-align: right" class="${debtClass}">${formatCurrency(item.debt)}</td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function renderTuitionTable() {
  const tbody = document.querySelector("#tuition table tbody");
  if (!tbody) return;

  const { groups } = debtData.tuition;
  let html = "";
  let globalStt = 0;

  groups.forEach((group, groupIndex) => {
    const groupId = `tuition-group-${groupIndex + 1}`;

    // Group header
    html += `
      <tr class="group-header" onclick="toggleGroup(this, '${groupId}')" data-group="${groupId}">
        <td colspan="18">
          <i class="fas fa-chevron-down toggle-icon"></i> Đợt: ${group.name}
        </td>
      </tr>
    `;

    // Calculate group totals
    const groupTotals = {
      credits: 0,
      initialFee: 0,
      discountAmount: 0,
      payAmount: 0,
      paid: 0,
      deduction: 0,
      debtReduction: 0,
    };

    // Items
    group.items.forEach((item) => {
      globalStt++;

      groupTotals.credits += item.credits;
      groupTotals.initialFee += item.initialFee;
      groupTotals.discountAmount += item.discountAmount;
      groupTotals.payAmount += item.payAmount;
      groupTotals.paid += item.paid;
      groupTotals.deduction += item.deduction;
      groupTotals.debtReduction += item.debtReduction;

      const statusIcon = item.paidStatus
        ? '<span class="status-icon"><i class="fas fa-check-circle" style="color: #4caf50"></i></span>'
        : '<span class="status-icon"><i class="fas fa-times-circle" style="color: #f44336"></i></span>';

      const noDebtIcon = item.noDebtTracking
        ? '<span class="status-icon"><i class="fas fa-check-square" style="color: #4caf50"></i></span>'
        : '<span class="status-icon"><i class="fas fa-square" style="color: #999"></i></span>';

      html += `
        <tr class="group-row" data-group="${groupId}">
          <td>${globalStt}</td>
          <td>${group.semester}</td>
          <td>${item.code}</td>
          <td>${item.classCode}</td>
          <td>${item.name}</td>
          <td style="text-align: center">${item.credits}</td>
          <td style="text-align: right">${formatCurrency(item.initialFee)}</td>
          <td style="text-align: center">${item.discount || "-"}</td>
          <td style="text-align: right">${formatCurrency(item.discountAmount)}</td>
          <td style="text-align: right">${formatCurrency(item.payAmount)}</td>
          <td><span class="status-badge registered">${item.status}</span></td>
          <td style="text-align: center">${item.paymentDate}</td>
          <td style="text-align: right" class="amount-positive">${formatCurrency(item.paid)}</td>
          <td style="text-align: right">${formatCurrency(item.deduction)}</td>
          <td style="text-align: right">${formatCurrency(item.debtReduction)}</td>
          <td style="text-align: right" class="amount-zero">${formatCurrency(item.debt)}</td>
          <td style="text-align: center">${statusIcon}</td>
          <td style="text-align: center">${noDebtIcon}</td>
        </tr>
      `;
    });

    // Group total row
    html += `
      <tr class="total-row group-row" data-group="${groupId}">
        <td></td>
        <td colspan="4"></td>
        <td style="text-align: center">${groupTotals.credits}</td>
        <td style="text-align: right">${formatCurrency(groupTotals.initialFee)}</td>
        <td></td>
        <td style="text-align: right">${formatCurrency(groupTotals.discountAmount)}</td>
        <td style="text-align: right">${formatCurrency(groupTotals.payAmount)}</td>
        <td></td>
        <td></td>
        <td style="text-align: right">${formatCurrency(groupTotals.paid)}</td>
        <td style="text-align: right">${formatCurrency(groupTotals.deduction)}</td>
        <td style="text-align: right">${formatCurrency(groupTotals.debtReduction)}</td>
        <td style="text-align: right">0</td>
        <td></td>
        <td></td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function renderCoursesTable() {
  const tbody = document.querySelector("#courses table tbody");
  if (!tbody) return;

  const { groups } = debtData.courses;
  let html = "";
  let globalStt = 0;

  groups.forEach((group, groupIndex) => {
    const groupId = `courses-group-${groupIndex + 1}`;

    // Group header
    html += `
      <tr class="group-header" onclick="toggleGroup(this, '${groupId}')" data-group="${groupId}">
        <td colspan="17">
          <i class="fas fa-chevron-down toggle-icon"></i> Đợt: ${group.name}
        </td>
      </tr>
    `;

    // Calculate group totals
    const groupTotals = {
      credits: 0,
      initialFee: 0,
      discount: 0,
      payAmount: 0,
      paid: 0,
      debt: 0,
    };

    // Items
    group.items.forEach((item) => {
      globalStt++;

      groupTotals.credits += item.credits;
      groupTotals.initialFee += item.initialFee;
      groupTotals.discount += item.discount;
      groupTotals.payAmount += item.payAmount;
      groupTotals.paid += item.paid;
      groupTotals.debt += item.debt;

      const statusBadgeClass =
        item.registerStatus === "Đăng ký mới" ? "registered" : "unpaid";
      const noDebtIcon = item.noDebtTracking
        ? '<i class="fas fa-check" style="color: #4caf50"></i>'
        : '<i class="fas fa-times" style="color: #999"></i>';

      const gradeIcon = item.hasGrade
        ? '<i class="fas fa-check" style="color: #4caf50"></i>'
        : '<i class="fas fa-times" style="color: #999"></i>';

      html += `
        <tr class="group-row" data-group="${groupId}">
          <td>${globalStt}</td>
          <td>${group.semester}</td>
          <td>${item.code}</td>
          <td>${item.classCode}</td>
          <td style="text-align: right">${formatCurrency(item.unitPrice)}</td>
          <td>${item.name}</td>
          <td style="text-align: center">${item.credits}</td>
          <td style="text-align: center">${item.registerDate}</td>
          <td><span class="status-badge ${statusBadgeClass}">${item.registerStatus}</span></td>
          <td><span class="status-badge">${item.classStatus}</span></td>
          <td style="text-align: right">${formatCurrency(item.initialFee)}</td>
          <td style="text-align: right">${formatCurrency(item.discount)}</td>
          <td style="text-align: right">${formatCurrency(item.payAmount)}</td>
          <td style="text-align: center">${noDebtIcon}</td>
          <td style="text-align: right" class="amount-zero">${formatCurrency(item.paid)}</td>
          <td style="text-align: center">${gradeIcon}</td>
          <td style="text-align: right" class="amount-zero">${formatCurrency(item.debt)}</td>
        </tr>
      `;
    });

    // Group total row
    html += `
      <tr class="total-row group-row" data-group="${groupId}">
        <td></td>
        <td colspan="5"></td>
        <td style="text-align: center">${groupTotals.credits}</td>
        <td colspan="3"></td>
        <td style="text-align: right">${formatCurrency(groupTotals.initialFee)}</td>
        <td style="text-align: right">${formatCurrency(groupTotals.discount)}</td>
        <td style="text-align: right">${formatCurrency(groupTotals.payAmount)}</td>
        <td></td>
        <td style="text-align: right">${formatCurrency(groupTotals.paid)}</td>
        <td></td>
        <td style="text-align: right">${formatCurrency(groupTotals.debt)}</td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

// ==================== INITIALIZATION ====================
function initializeToggleGroups() {
  const tuitionTable = document.querySelector("#tuition table tbody");
  if (tuitionTable) {
    let currentGroup = null;
    let groupCounter = 0;
    const rows = tuitionTable.querySelectorAll("tr");

    rows.forEach((row) => {
      if (row.classList.contains("group-header")) {
        if (!row.hasAttribute("data-group")) {
          groupCounter++;
          currentGroup = "tuition-group-" + groupCounter;
          row.setAttribute("data-group", currentGroup);
          row.setAttribute("onclick", `toggleGroup(this, '${currentGroup}')`);

          const td = row.querySelector("td");
          if (td && !td.querySelector(".toggle-icon")) {
            const icon = document.createElement("i");
            icon.className = "fas fa-chevron-down toggle-icon";
            td.insertBefore(icon, td.firstChild);
            td.insertBefore(document.createTextNode(" "), icon.nextSibling);
          }
        } else {
          currentGroup = row.getAttribute("data-group");
        }
      } else if (currentGroup && !row.hasAttribute("data-group")) {
        row.classList.add("group-row");
        row.setAttribute("data-group", currentGroup);
      }
    });
  }

  const coursesTable = document.querySelector("#courses table tbody");
  if (coursesTable) {
    let currentGroup = null;
    let groupCounter = 0;
    const rows = coursesTable.querySelectorAll("tr");

    rows.forEach((row) => {
      if (row.classList.contains("group-header")) {
        if (!row.hasAttribute("data-group")) {
          groupCounter++;
          currentGroup = "courses-group-" + groupCounter;
          row.setAttribute("data-group", currentGroup);
          row.setAttribute("onclick", `toggleGroup(this, '${currentGroup}')`);

          const td = row.querySelector("td");
          if (td && !td.querySelector(".toggle-icon")) {
            const icon = document.createElement("i");
            icon.className = "fas fa-chevron-down toggle-icon";
            td.insertBefore(icon, td.firstChild);
            td.insertBefore(document.createTextNode(" "), icon.nextSibling);
          }
        } else {
          currentGroup = row.getAttribute("data-group");
        }
      } else if (currentGroup && !row.hasAttribute("data-group")) {
        row.classList.add("group-row");
        row.setAttribute("data-group", currentGroup);
      }
    });
  }
}

function switchTab(event, tabId) {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  renderUnpaidFeesTable();
  renderFeesTable();
  renderTuitionTable();
  renderCoursesTable();
  renderDebtListTable();
  renderDebtDetailTable();
  initializePaginationHandlers();
  initializeScrollIndicators();
});

function initializeScrollIndicators() {
  const tableWrappers = document.querySelectorAll(".data-table-wrapper");

  tableWrappers.forEach((wrapper) => {
    const handleScroll = function () {
      const scrollLeft = this.scrollLeft;
      const scrollWidth = this.scrollWidth;
      const clientWidth = this.clientWidth;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        wrapper.classList.add("scrolled-to-end");
      } else {
        wrapper.classList.remove("scrolled-to-end");
      }
    };

    wrapper.addEventListener("scroll", handleScroll);
    // Check initial state
    handleScroll.call(wrapper);
  });
}

const paginationState = {
  debtList: {
    currentPage: 1,
    itemsPerPage: 10,
  },
  debtDetail: {
    currentPage: 1,
    itemsPerPage: 10,
  },
};

function renderDebtListTable(page = 1) {
  const tbody = document.querySelector(
    "#deductions .table-section:first-child table tbody",
  );
  if (!tbody) return;

  const { items } = debtData.debtList;
  const itemsPerPage = paginationState.debtList.itemsPerPage;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;

  paginationState.debtList.currentPage = page;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);
  const pageItems = items.slice(startIndex, endIndex);

  let totalPaid = 0;
  let totalDebtReduction = 0;
  items.forEach((item) => {
    totalPaid += item.paid;
    totalDebtReduction += item.debtReduction;
  });

  let html = "";
  pageItems.forEach((item) => {
    html += `
      <tr>
        <td>${item.stt}</td>
        <td>${item.dot}</td>
        <td>${item.classCode}</td>
        <td>${item.name}</td>
        <td style="text-align: right" class="amount-positive">${formatCurrency(item.paid)}</td>
        <td style="text-align: right">${formatCurrency(item.debtReduction)}</td>
      </tr>
    `;
  });

  tbody.innerHTML = html;

  const totalPaidEl = document.getElementById("debt-list-total-paid");
  const totalReductionEl = document.getElementById("debt-list-total-reduction");
  if (totalPaidEl) totalPaidEl.textContent = formatCurrency(totalPaid);
  if (totalReductionEl)
    totalReductionEl.textContent = formatCurrency(totalDebtReduction);

  updatePaginationControls(
    "debt-list",
    page,
    totalPages,
    startIndex + 1,
    endIndex,
    items.length,
  );
}

function renderDebtDetailTable(page = 1) {
  const tbody = document.querySelector(
    "#deductions .table-section:last-child table tbody",
  );
  if (!tbody) return;

  const { items } = debtData.debtDetail;
  const itemsPerPage = paginationState.debtDetail.itemsPerPage;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;

  paginationState.debtDetail.currentPage = page;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);
  const pageItems = items.slice(startIndex, endIndex);

  let totalDeduction = 0;
  items.forEach((item) => {
    totalDeduction += item.deduction;
  });

  let html = "";
  pageItems.forEach((item) => {
    html += `
      <tr>
        <td>${item.stt}</td>
        <td>${item.dot}</td>
        <td>${item.classCode}</td>
        <td>${item.name}</td>
        <td style="text-align: right">${formatCurrency(item.deduction)}</td>
        <td>${item.receiptNo}</td>
        <td>${item.executor}</td>
        <td style="text-align: center">${item.date}</td>
      </tr>
    `;
  });

  tbody.innerHTML = html;

  const totalDeductionEl = document.getElementById(
    "debt-detail-total-deduction",
  );
  if (totalDeductionEl)
    totalDeductionEl.textContent = formatCurrency(totalDeduction);

  updatePaginationControls(
    "debt-detail",
    page,
    totalPages,
    startIndex + 1,
    endIndex,
    items.length,
  );
}

function updatePaginationControls(
  prefix,
  currentPage,
  totalPages,
  startItem,
  endItem,
  totalItems,
) {
  const paginationInfo = document.getElementById(`${prefix}-pagination-info`);
  if (paginationInfo) {
    paginationInfo.textContent = `${startItem} - ${endItem} của ${totalItems}`;
  }

  const pageSelect = document.getElementById(`${prefix}-page-select`);
  if (pageSelect) {
    pageSelect.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      if (i === currentPage) {
        option.selected = true;
      }
      pageSelect.appendChild(option);
    }
  }

  const firstBtn = document.getElementById(`${prefix}-first-btn`);
  const prevBtn = document.getElementById(`${prefix}-prev-btn`);
  const nextBtn = document.getElementById(`${prefix}-next-btn`);
  const lastBtn = document.getElementById(`${prefix}-last-btn`);

  if (firstBtn) firstBtn.disabled = currentPage === 1;
  if (prevBtn) prevBtn.disabled = currentPage === 1;
  if (nextBtn) nextBtn.disabled = currentPage === totalPages;
  if (lastBtn) lastBtn.disabled = currentPage === totalPages;
}

function initializePaginationHandlers() {
  const debtListFirstBtn = document.getElementById("debt-list-first-btn");
  const debtListPrevBtn = document.getElementById("debt-list-prev-btn");
  const debtListNextBtn = document.getElementById("debt-list-next-btn");
  const debtListLastBtn = document.getElementById("debt-list-last-btn");
  const debtListPageSelect = document.getElementById("debt-list-page-select");

  if (debtListFirstBtn) {
    debtListFirstBtn.addEventListener("click", () => renderDebtListTable(1));
  }
  if (debtListPrevBtn) {
    debtListPrevBtn.addEventListener("click", () => {
      const newPage = paginationState.debtList.currentPage - 1;
      renderDebtListTable(newPage);
    });
  }
  if (debtListNextBtn) {
    debtListNextBtn.addEventListener("click", () => {
      const newPage = paginationState.debtList.currentPage + 1;
      renderDebtListTable(newPage);
    });
  }
  if (debtListLastBtn) {
    debtListLastBtn.addEventListener("click", () => {
      const totalPages = Math.ceil(
        debtData.debtList.items.length / paginationState.debtList.itemsPerPage,
      );
      renderDebtListTable(totalPages);
    });
  }
  if (debtListPageSelect) {
    debtListPageSelect.addEventListener("change", (e) => {
      renderDebtListTable(parseInt(e.target.value));
    });
  }

  // Debt Detail pagination handlers
  const debtDetailFirstBtn = document.getElementById("debt-detail-first-btn");
  const debtDetailPrevBtn = document.getElementById("debt-detail-prev-btn");
  const debtDetailNextBtn = document.getElementById("debt-detail-next-btn");
  const debtDetailLastBtn = document.getElementById("debt-detail-last-btn");
  const debtDetailPageSelect = document.getElementById(
    "debt-detail-page-select",
  );

  if (debtDetailFirstBtn) {
    debtDetailFirstBtn.addEventListener("click", () =>
      renderDebtDetailTable(1),
    );
  }
  if (debtDetailPrevBtn) {
    debtDetailPrevBtn.addEventListener("click", () => {
      const newPage = paginationState.debtDetail.currentPage - 1;
      renderDebtDetailTable(newPage);
    });
  }
  if (debtDetailNextBtn) {
    debtDetailNextBtn.addEventListener("click", () => {
      const newPage = paginationState.debtDetail.currentPage + 1;
      renderDebtDetailTable(newPage);
    });
  }
  if (debtDetailLastBtn) {
    debtDetailLastBtn.addEventListener("click", () => {
      const totalPages = Math.ceil(
        debtData.debtDetail.items.length /
          paginationState.debtDetail.itemsPerPage,
      );
      renderDebtDetailTable(totalPages);
    });
  }
  if (debtDetailPageSelect) {
    debtDetailPageSelect.addEventListener("change", (e) => {
      renderDebtDetailTable(parseInt(e.target.value));
    });
  }
}
