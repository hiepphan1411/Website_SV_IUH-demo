async function loadScheduleData() {
  try {
    const response = await fetch("../data/lich-toan-truong.json");
    const data = await response.json();
    renderSchedules(data.schedules);
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
  }
}

function renderSchedules(schedules) {
  const scheduleListContent = document.querySelector(".schedule-list-content");
  scheduleListContent.innerHTML = "";

  schedules.forEach((schedule, index) => {
    const scheduleItem = createScheduleItem(schedule, index === 0);
    scheduleListContent.appendChild(scheduleItem);
  });
}

function createScheduleItem(schedule, isExpanded = false) {
  const scheduleItem = document.createElement("div");
  scheduleItem.className = "schedule-item";

  scheduleItem.innerHTML = `
    <div class="schedule-header" onclick="toggleSchedule(this)">
      <div class="schedule-info">
        <div class="schedule-title">
          Tên môn học/học phần: ${schedule.tenMonHoc} - ${schedule.maMonHoc}
        </div>
        <div class="schedule-meta">
          <span> <strong>Khoa:</strong> ${schedule.khoa} </span>
          <span>•</span>
          <span> <strong>Lớp học:</strong> ${schedule.lopHoc} </span>
        </div>
      </div>
      <i class="fas fa-chevron-down schedule-toggle ${isExpanded ? "expanded" : ""}"></i>
    </div>
    <div class="schedule-detail ${isExpanded ? "show" : ""}">
      <div class="schedule-detail-content">
        <table class="schedule-table">
          <thead>
            <tr>
              <th></th>
              <th colspan="4" class="text-center">Lịch học</th>
              <th colspan="2" class="text-center">Thời gian</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th class="text-center">STT</th>
              <th class="text-center">Thứ</th>
              <th class="text-center">Tiết</th>
              <th class="text-center">Số tín chỉ</th>
              <th class="text-center">Nhóm</th>
              <th class="text-center">Bắt đầu</th>
              <th class="text-center">Kết thúc</th>
              <th>Tên phòng</th>
              <th>Giảng viên</th>
            </tr>
          </thead>
          <tbody>
            ${schedule.lichHoc
              .map(
                (lich) => `
              <tr>
                <td class="text-center">${lich.stt}</td>
                <td class="text-center">${lich.thu}</td>
                <td class="text-center">${lich.tiet}</td>
                <td class="text-center">${lich.soTinChi}</td>
                <td class="text-center">${lich.nhom}</td>
                <td class="text-center">${lich.batDau}</td>
                <td class="text-center">${lich.ketThuc}</td>
                <td>${lich.tenPhong}</td>
                <td>${lich.giangVien}</td>
              </tr>
            `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;

  return scheduleItem;
}

function toggleSchedule(header) {
  const item = header.parentElement;
  const detail = item.querySelector(".schedule-detail");
  const toggle = item.querySelector(".schedule-toggle");

  document.querySelectorAll(".schedule-item").forEach((otherItem) => {
    if (otherItem !== item) {
      otherItem.querySelector(".schedule-detail").classList.remove("show");
      otherItem.querySelector(".schedule-toggle").classList.remove("expanded");
    }
  });

  detail.classList.toggle("show");
  toggle.classList.toggle("expanded");
}

function scrollToScheduleList() {
  const scheduleListSection = document.querySelector(".schedule-list-section");
  if (scheduleListSection) {
    scheduleListSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadScheduleData();

  const btnViewExam = document.querySelector(".btn-search");
  if (btnViewExam) {
    btnViewExam.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToScheduleList();
    });
  }

  const btnViewSchedule = document.querySelector(".btn-view-schedule");
  if (btnViewSchedule) {
    btnViewSchedule.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToScheduleList();
    });
  }
});
