function toggleSelect(button) {
  const row = button.closest("tr");
  const isSelected = row.classList.contains("selected");

  if (isSelected) {
    row.classList.remove("selected");
    button.classList.remove("selected");
    button.innerHTML = 'Chọn <i class="fas fa-arrow-right"></i>';
  } else {
    row.classList.add("selected");
    button.classList.add("selected");
    button.innerHTML = 'Đã chọn <i class="fas fa-check"></i>';
  }

  updateSelectedItems();
}

function updateSelectedItems() {
  const selectedRows = document.querySelectorAll("tbody tr.selected");
  const selectedItemsList = document.getElementById("selectedItemsList");
  const selectedCount = document.getElementById("selectedCount");
  const selectedItemsTotal = document.getElementById("selectedItemsTotal");
  const selectedTotalAmount = document.getElementById("selectedTotalAmount");

  selectedCount.textContent = selectedRows.length;
  selectedItemsList.innerHTML = "";

  let total = 0;

  if (selectedRows.length === 0) {
    selectedItemsList.innerHTML = `
            <div class="empty-selection">
              <i class="fas fa-shopping-cart"></i>
              <div>Chưa chọn khoản nào</div>
            </div>
          `;
    document.getElementById("paymentBtn").disabled = true;
    selectedItemsTotal.style.display = "none";
  } else {
    document.getElementById("paymentBtn").disabled = false;
    selectedItemsTotal.style.display = "flex";

    selectedRows.forEach((row) => {
      const amount = parseInt(row.dataset.amount);
      const code = row.dataset.code;
      const name = row.dataset.name;

      total += amount;

      const itemHtml = `
              <div class="selected-item" data-code="${code}">
                <div class="selected-item-info">
                  <div class="selected-item-name">${name}</div>
                  <div class="selected-item-code">Mã: ${code}</div>
                </div>
                <div class="selected-item-amount">${amount.toLocaleString("vi-VN")}₫</div>
                <button class="remove-item-btn" onclick="removeSelectedItem('${code}')">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            `;

      selectedItemsList.innerHTML += itemHtml;
    });

    selectedTotalAmount.textContent = `${total.toLocaleString("vi-VN")}₫`;
  }

  return total;
}

function removeSelectedItem(code) {
  const row = document.querySelector(`tbody tr[data-code="${code}"]`);
  if (row) {
    const button = row.querySelector(".select-btn");
    toggleSelect(button);
  }
}

function selectAllItems() {
  const allRows = document.querySelectorAll("tbody tr");
  const allSelected = Array.from(allRows).every((row) =>
    row.classList.contains("selected"),
  );

  allRows.forEach((row) => {
    const button = row.querySelector(".select-btn");
    const isSelected = row.classList.contains("selected");

    if (allSelected) {
      if (isSelected) {
        row.classList.remove("selected");
        button.classList.remove("selected");
        button.innerHTML = 'Chọn <i class="fas fa-arrow-right"></i>';
      }
    } else {
      if (!isSelected) {
        row.classList.add("selected");
        button.classList.add("selected");
        button.innerHTML = 'Đã chọn <i class="fas fa-check"></i>';
      }
    }
  });

  updateSelectedItems();
}

function calculateTotal() {
  let total = 0;
  document.querySelectorAll("tbody tr.selected").forEach((row) => {
    total += parseInt(row.dataset.amount);
  });
  return total;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("tbody tr.selected").forEach((row) => {
    row.classList.remove("selected");
    const button = row.querySelector(".select-btn");
    if (button) {
      button.classList.remove("selected");
      button.innerHTML = 'Chọn <i class="fas fa-arrow-right"></i>';
    }
  });

  updateSelectedItems();
});

document.querySelectorAll(".method-option").forEach((option) => {
  option.addEventListener("click", function () {
    document.querySelectorAll(".method-option").forEach((opt) => {
      opt.classList.remove("selected");
    });
    this.classList.add("selected");
    this.querySelector('input[type="radio"]').checked = true;

    const method = this.dataset.method;
    const btnText = {
      vietqr: '<i class="fas fa-qrcode"></i> Thanh toán QR-Code',
    };
    document.getElementById("paymentBtn").innerHTML = btnText[method];
  });
});

function closeModal() {
  document.getElementById("qrModal").classList.remove("active");
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Đã sao chép: " + text);
  });
}

let countdownInterval;
function startCountdown() {
  let minutes = 29;
  let seconds = 58;

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(countdownInterval);
        alert("Giao dịch đã hết hạn!");
        closeModal();
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  }, 1000);
}

document.getElementById("qrModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});
